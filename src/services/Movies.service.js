import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '44a71ca256a24dd1ea2fbb016327c9c3';

const getMovies =  async () => {
    const urlGetMovies = `${baseUrl}/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;
    let data =  await axios.get(urlGetMovies); 
    return data;   
}

const getTrendingMoviesPerWeek = async () => {

    const urlTrendingMovies = `${baseUrl}/trending/movie/week?api_key=${apiKey}`;
    let data = await axios.get(urlTrendingMovies);
    return data;
}

const getMovieById = async (id) => {
    const urlGetMoviById = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`;
    let data = await axios.get(urlGetMoviById);
    return data;
}

const getSimiliarMovies = async (id) => {
    const urlGetSmilarMovies =`${baseUrl}/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`;
    return await axios.get(urlGetSmilarMovies);
}

export {getMovies, getTrendingMoviesPerWeek, getMovieById, getSimiliarMovies};