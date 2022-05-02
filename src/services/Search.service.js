import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '44a71ca256a24dd1ea2fbb016327c9c3';

const getMovieByWord = (word, page = 1) => {
    const urlGetmovieByWord = `${baseUrl}/search/multi?api_key=${apiKey}&query=${word}&page=${page}`;
    let data = axios.get(urlGetmovieByWord);
    return data;
}

export default getMovieByWord;