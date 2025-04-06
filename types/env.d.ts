export interface Environment extends NodeJS.ProcessEnv {
  NODE_ENV: "development" | "production";
  SECRET_KEY: string;
  PORT?: string | undefined;
  DB_URI: string;
}
