import '../styles/Movie.css';
import { Link } from 'react-router-dom';

const Pelicula = ({ poster, id }) => {
  return(
    <>  
      <Link to={`/movie/${id}`} state = {{ id: id }}>
        <img src = { poster } alt='poster pelicula' />
      </Link>
    </>
  );
}

export default Pelicula;