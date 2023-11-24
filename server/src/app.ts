import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import morgan from "morgan";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc/root";
import { createContext } from "./trpc/trpc";

const app: Express = express();

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.status(200).send({ message: "Server root" }));

app.use("/api/trpc", trpcExpress.createExpressMiddleware({ router: appRouter, createContext: createContext }));

export default app;
