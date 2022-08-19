declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly DB_HOST: string;
      readonly DB_NAME: string;
      readonly DB_USER: string;
      readonly DB_PASS: string;
    }
  }
}