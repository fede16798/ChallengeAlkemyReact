import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '44a71ca256a24dd1ea2fbb016327c9c3';

const getFilmsByGenresAndMediaType = async (genreId, type) => {
    let request = await axios.get(`${baseUrl}/discover/${type}?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genreId}`);
    return request;
}

const getGenres = async () => {
    let request = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`);
    return request;
}

const getGenreById = async (type) => {
    let request = await axios.get(`${baseUrl}/genre/${type}/list?api_key=${apiKey}&language=en-US`);
    return request;
}

export { getGenres, getFilmsByGenresAndMediaType, getGenreById } ;