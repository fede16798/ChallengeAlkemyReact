import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '44a71ca256a24dd1ea2fbb016327c9c3';

const getMovies = () => {
    const urlGetMovies = `${baseUrl}/discover/movie?api_key=${apiKey}&language=es-ES&page=1`;
    return axios.get(urlGetMovies);
}

const getTrendingMoviesPerWeek = () => {
    const urlTrendingMovies = `${baseUrl}/trending/movie/day?api_key=${apiKey}`;
    return axios.get(urlTrendingMovies);
}

const getMovieById = (id) => {
    const urlGetMoviById = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`;

    return axios.get(urlGetMoviById);
}

const getSimiliarMovies = (id) => {
    const urlGetSmilarMovies =`${baseUrl}/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`;

    return axios.get(urlGetSmilarMovies);
}

export {getMovies, getTrendingMoviesPerWeek, getMovieById, getSimiliarMovies};