import type { Education } from "../data/educations";
import type { Experience } from "../data/experiences";
import type { RichParagraph, Profile } from "../data/profile";
import type { FeaturedProject, Project, ProjectTag } from "../data/projects";
import type { SkillGroup } from "../data/skills";

export const STRAPI_URL = (
  import.meta.env.VITE_STRAPI_URL || "https://strapi.donyramadhan.com"
).replace(/\/$/, "");

export interface PortfolioContent {
  profile: Profile;
  skills: SkillGroup[];
  experiences: Experience[];
  featuredProjects: FeaturedProject[];
  moreProjects: Project[];
  educations: Education[];
}

// --- Raw Strapi 5 response shapes (fields are flat, no `attributes`) ---

interface ListItem {
  text: string;
}

interface Media {
  url: string;
  alternativeText?: string | null;
  formats?: Record<string, { url: string }> | null;
}

interface BlockNode {
  type: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  url?: string;
  children?: BlockNode[];
}

interface StrapiProfile extends Omit<Profile, "aboutBody"> {
  aboutBody: BlockNode[] | null;
}

interface StrapiSkillGroup {
  name: string;
  primary: boolean | null;
  items: ListItem[];
}

interface StrapiExperience {
  company: string;
  position: string | null;
  date: string | null;
  highlights: ListItem[];
}

interface StrapiProject {
  name: string;
  tag: "production" | "live" | "private" | "open_source" | "thesis";
  description: string | null;
  coverNote: string | null;
  link: string | null;
  featured: boolean | null;
  stack: ListItem[];
  image: Media | null;
}

interface StrapiEducation {
  name: string;
  degree: string | null;
  date: string | null;
  gpa: string | null;
}

// --- Fetching ---

async function get<T>(path: string, signal: AbortSignal): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api/${path}`, { signal });
  if (!res.ok) throw new Error(`Strapi ${path.split("?")[0]}: HTTP ${res.status}`);
  const body = (await res.json()) as { data: T };
  return body.data;
}

const LIST = "sort=order:asc&pagination[pageSize]=100";

const mediaUrl = (path: string) => (path.startsWith("http") ? path : `${STRAPI_URL}${path}`);

// Card images render at ~360px wide, so prefer Strapi's medium size.
const imageUrl = (image: Media | null) => {
  if (!image) return undefined;
  return mediaUrl(image.formats?.medium?.url ?? image.formats?.small?.url ?? image.url);
};

const texts = (items: ListItem[] = []) => items.map((i) => i.text);

const toTag = (tag: StrapiProject["tag"]): ProjectTag =>
  tag === "open_source" ? "open source" : tag;

// Flattens Strapi blocks into paragraphs of styled text runs. Links keep
// their url; headings, lists and quotes become plain paragraphs.
function toParagraphs(blocks: BlockNode[] | null): RichParagraph[] {
  const runs = (nodes: BlockNode[] = [], url?: string): RichParagraph["children"] =>
    nodes.flatMap((n) =>
      n.type === "text"
        ? [{ text: n.text ?? "", bold: n.bold, italic: n.italic, url }]
        : runs(n.children, n.type === "link" ? n.url : url)
    );
  return (blocks ?? [])
    .flatMap((b) => (b.type === "list" ? b.children ?? [] : [b]))
    .map((b) => ({ children: runs(b.children) }))
    .filter((p) => p.children.some((c) => c.text.trim()));
}

export async function fetchPortfolio(signal: AbortSignal): Promise<PortfolioContent> {
  const [profile, skills, experiences, projects, educations] = await Promise.all([
    get<StrapiProfile>("profile", signal),
    get<StrapiSkillGroup[]>(`skill-groups?${LIST}&populate=items`, signal),
    get<StrapiExperience[]>(`experiences?${LIST}&populate=highlights`, signal),
    get<StrapiProject[]>(
      `projects?${LIST}&populate[stack]=true&populate[image][fields][0]=url&populate[image][fields][1]=alternativeText&populate[image][fields][2]=formats`,
      signal
    ),
    get<StrapiEducation[]>(`educations?${LIST}`, signal),
  ]);

  return {
    profile: { ...profile, aboutBody: toParagraphs(profile.aboutBody) },
    skills: skills.map((g) => ({ name: g.name, items: texts(g.items), primary: !!g.primary })),
    experiences: experiences.map((x) => ({
      company: x.company,
      position: x.position ?? "",
      date: x.date ?? "",
      highlights: texts(x.highlights),
    })),
    featuredProjects: projects
      .filter((p) => p.featured)
      .map((p) => ({
        name: p.name,
        tag: toTag(p.tag),
        stack: texts(p.stack),
        description: p.description ?? "",
        image: imageUrl(p.image),
        coverNote: p.coverNote ?? undefined,
      })),
    moreProjects: projects
      .filter((p) => !p.featured)
      .map((p) => ({
        name: p.name,
        tag: toTag(p.tag),
        stack: texts(p.stack),
        description: p.description ?? "",
        link: p.link ?? undefined,
      })),
    educations: educations.map((e) => ({
      name: e.name,
      degree: e.degree ?? "",
      date: e.date ?? "",
      gpa: e.gpa ?? undefined,
    })),
  };
}
