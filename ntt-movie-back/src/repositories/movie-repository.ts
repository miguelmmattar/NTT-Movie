import { ResponseMovie, ResponseMovies } from "@/protocols";
import { getMovieById, getMoviesByTitle } from "@/utils/omdbapi-service";

async function findByTitle(title: string): Promise<ResponseMovies> {
    const result = await getMoviesByTitle(title);
  
    return result;
}

async function findById(id: string): Promise<ResponseMovie> {
    const result = await getMovieById(id);
    
    return result;
}

const movieRepository = {
    findByTitle,
    findById,
};

export default movieRepository;