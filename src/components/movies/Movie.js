import '../../styles/Movie.css';
import { Link } from 'react-router-dom';
import '../../styles/SwiperSlide.css';


const Movie = ({ poster, id }) => {
  return(
    <>  
      <Link to={`/movies/${id}`}>
        <img src = { poster } alt='poster pelicula' />
      </Link>
    </>
  );
}

export default Movie;