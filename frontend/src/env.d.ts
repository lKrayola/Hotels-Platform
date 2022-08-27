/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly DB_PASSWORD: string;
  readonly PUBLIC_SOME_KEY: string;
  // readonly PUBLIC_SOME_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
