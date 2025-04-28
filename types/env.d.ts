declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}

export interface Environment {
  NODE_ENV: "development" | "production";
  SECRET_KEY: string;
  PORT?: string | undefined;
  DATABASE: string;
  DB_URI: string;
  DB_URI_DEV: string;
}
