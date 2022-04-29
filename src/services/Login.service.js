import axios from 'axios';
const setLogin = async (body) => {
    return await axios.post('http://challenge-react.alkemy.org', body)
}

export default setLogin;