//import poster from '../images/olaf-poster.jpg';
import '../styles/Movie.css';

const Pelicula = ({ poster }) => {
    return(
        <>
            <img src = {poster} alt='poster pelicula' />
        </>
    );
}

export default Pelicula;