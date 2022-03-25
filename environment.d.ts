declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FTP_HOST: string;
      FTP_USER: string;
      FTP_PASSWORD: string;
      FTP_PORT: string;

      MONGO_HOST: string;
      MONGO_PORT: string;
      MONGO_USER: string;
      MONGO_PASSWORD: string;

      MYSQL_HOST: string;
      MYSQL_PORT: string;
      MYSQL_USER: string;
      MYSQL_PASSWORD: string;
    }
  }
}

export {};
