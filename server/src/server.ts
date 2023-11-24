import { config, configDotenv } from "dotenv";
import app from "./app";

configDotenv({ override: true, path: "./.env" });

config();

const port = process.env.PORT ?? 8989;

const initServer = async () => {
  app.listen(port, () => {
    console.log(`\n\n\nMODE: ${process.env.NODE_ENV}\nhttp://localhost:${port}`);
  });
};

initServer();
