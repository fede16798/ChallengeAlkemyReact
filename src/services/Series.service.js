//import axios
import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '44a71ca256a24dd1ea2fbb016327c9c3';

const getSeries = async () => {
    const urlGetSeries = `${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`;
    return await axios.get(urlGetSeries);
}

export { getSeries };