import { Router } from "express";

import { getMovies, getMovie } from "../controllers";

const movieRouter = Router();

movieRouter
  .get("/title/:title", getMovies)
  .get("/id/:id", getMovie);

export { movieRouter };