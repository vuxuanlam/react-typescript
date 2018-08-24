export interface ConfigType {
    root: string;
    port: number;
    session: {
      secret: string;
      resave: boolean;
      saveUninitialized: boolean;
      cookie: {
        maxAge: number;
      };
    };
  }