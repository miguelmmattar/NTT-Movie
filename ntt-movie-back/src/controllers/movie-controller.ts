import { IncomingMovie } from "@/protocols";
import movieService from "@/services/movie-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getMovies(req: Request, res: Response) {
  const { title } = req.params as IncomingMovie;

  if(!title) {
    return res.sendStatus(httpStatus.BAD_REQUEST); 
  }

  try {
    const result = await movieService.findMovies(title);
    
    return res.status(httpStatus.OK).send(result); 
  } catch (error) {
    if(error.name == "notFoundError") return res.status(httpStatus.NOT_FOUND).send(error.message);
    if(error.name === "unauthorizedError") return res.status(httpStatus.UNAUTHORIZED).send(error.message);
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}

export async function getMovie(req: Request, res: Response) {
  const id = req.params.id;
  
  if(!id) {
    return res.sendStatus(httpStatus.BAD_REQUEST); 
  }

  try {
    const result = await movieService.findMovie(id);
    
    return res.status(httpStatus.OK).send(result); 
  } catch (error) {
    if(error.name === "UnauthorizedError") return res.status(httpStatus.UNAUTHORIZED).send(error.message);
    return res.send(httpStatus.BAD_REQUEST).status(error.message);
  }
}