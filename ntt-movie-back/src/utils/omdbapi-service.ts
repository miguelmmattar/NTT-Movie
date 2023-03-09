import { ResponseMovie, ResponseMovies } from "@/protocols";
import { request } from "./request";
import dotenv from "dotenv";
import { unauthorizedError } from "@/errors";

dotenv.config();

async function getMoviesByTitle(title: string): Promise<ResponseMovies> {
  const key = process.env.API_KEY;

  if(!key) throw unauthorizedError;

  const result = await request.get(`https://www.omdbapi.com/?apikey=${key}&s=${title}`);
  return result.data;
}

async function getMovieById(id: string): Promise<ResponseMovie> {
  const key = process.env.API_KEY;

  if(!key) throw unauthorizedError;
  
  const result = await request.get(`https://www.omdbapi.com/?apikey=${key}&i=${id}`);
  
  return result.data;
}

export {
  getMoviesByTitle,
  getMovieById,
};
