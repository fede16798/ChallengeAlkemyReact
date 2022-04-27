import axios from 'axios';

const getMovies = (url) => {
    return axios.get(url)
}


export default getMovies;