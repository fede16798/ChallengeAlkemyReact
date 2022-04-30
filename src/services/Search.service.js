import axios from 'axios';


const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '44a71ca256a24dd1ea2fbb016327c9c3';

const getMovieByWord = async (word) => {
    const urlGetmovieByWord = `${baseUrl}/search/movie?api_key=${apiKey}&query=${word}`;
    let data = await axios.get(urlGetmovieByWord);
    return data;
}

export default getMovieByWord;