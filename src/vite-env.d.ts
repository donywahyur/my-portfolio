/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Strapi base URL, no trailing slash. Defaults to https://strapi.donyramadhan.com.
  readonly VITE_STRAPI_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
