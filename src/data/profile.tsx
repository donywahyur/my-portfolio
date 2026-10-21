// A paragraph of the About text. Bold runs render in the ink color.
export interface RichParagraph {
  children: { text: string; bold?: boolean; italic?: boolean; url?: string }[];
}

export interface Profile {
  name: string;
  title: string;
  stackLine: string;
  years: string;
  location: string;
  cvUrl: string;
  email: string;
  github: string;
  linkedin: string;
  // The part wrapped in **…** renders as the green highlight.
  aboutLede: string;
  aboutBody: RichParagraph[];
}

const profile: Profile = {
  name: "Dony Wahyu Ramadhan",
  title: "Fullstack Developer",
  stackLine: "PHP, Java & JavaScript",
  years: "5+ years experience",
  location: "Malang, Indonesia",
  cvUrl: "https://drive.google.com/file/d/1js_yTgiLZ51Xbg_Tx8rPhy3rxyDLvqPs/view?usp=sharing",
  email: "donyramadhan3011@gmail.com",
  github: "https://github.com/donywahyur",
  linkedin: "https://www.linkedin.com/in/dony-w-ramadhan/",
  aboutLede:
    "I build software that **scales and stays up** — for universities, hospitals, and the apps Indonesians use every day.",
  aboutBody: [
    {
      children: [
        { text: "I'm a backend engineer at " },
        { text: "Jobseeker Company", bold: true },
        { text: ", building microservices with " },
        { text: "gRPC and REST", bold: true },
        { text: ", event-driven pipelines on " },
        { text: "Redis Streams and AWS", bold: true },
        { text: ", and integrations with " },
        { text: "Indomaret, DANA, Gojek and TikTok", bold: true },
        { text: "." },
      ],
    },
    {
      children: [
        { text: "Before that, five years at " },
        { text: "Prima Cipta Teknologi", bold: true },
        { text: " building academic systems for universities — including the " },
        { text: "Neo Feeder", bold: true },
        { text: " bridge and bank payment integrations — plus freelance hospital systems with " },
        { text: "BPJS VClaim", bold: true },
        { text: "." },
      ],
    },
  ],
};

export default profile;
