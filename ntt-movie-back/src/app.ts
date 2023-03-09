import express from "express";
import cors from "cors";

import { handleApplicationErrors } from "./middlewares";

import {
  movieRouter,
} from "./routers";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use(handleApplicationErrors)
  .use("/movie", movieRouter);
  
export default app;