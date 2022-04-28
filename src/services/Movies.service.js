import axios from 'axios';

const getMovies = (url) => {
    return axios.get(url);
}

const getTrendingMoviesPerWeek = (url) => {
    return axios.get(url);
}

const getMovieById = (url) => {
    return axios.get(url);
}

const getSimiliarMovies = (url) => {
    return axios.get(url);
}

export {getMovies, getTrendingMoviesPerWeek, getMovieById, getSimiliarMovies};