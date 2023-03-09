import axios from "axios";

//const BASE_URL = process.env.API;
const BASE_URL = "http://localhost:4000";

function getMovies(movie) {
    return axios.get(`${BASE_URL}/movie/title/${movie.title}`);
}

function getMovie(id) {
    return axios.get(`${BASE_URL}/movie/id/${id}`);
}

const api = {
    getMovies,
    getMovie,
};

export default api;