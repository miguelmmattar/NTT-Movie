import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

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