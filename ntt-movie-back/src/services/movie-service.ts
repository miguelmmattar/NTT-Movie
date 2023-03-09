import { invalidDataError, notFoundError } from "@/errors";
import { ResponseMovie, ResponseMovies } from "@/protocols";
import movieRepository from "@/repositories/movie-repository";


async function findMovies(title: string): Promise<ResponseMovies> {
    const movies = await movieRepository.findByTitle(title);

    if(movies.Response === "False") throw notFoundError;
    
    return movies;
}

async function findMovie(id: string): Promise<ResponseMovie> {
    const movie = await movieRepository.findById(id);
    
    if(movie.Response === "False") throw invalidDataError;
    
    return movie;
}

const movieService = {
    findMovies,
    findMovie,
};

export default movieService;