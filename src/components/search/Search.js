import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieByWord from '../../services/Search.service.js';
import handleError from '../../handleErrors/HandleError.js';
import { Link } from 'react-router-dom';

import '../../styles/Search.css';

const Search = () => {

  const params = useParams();
  let name = params.keyword;

  const [movies, setMovies] = useState([]);

  useEffect(() => { 
      getMovieByWord(name)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch(err => handleError("Something went wrong. Please try again", "There was an error loading the movies", "error"));
    }, [name]);   


  return (
    <div className="search-container"> 
      <h1 className='search-container__h1'>Movies related with {name}</h1>
      {(movies.length === 0) ? <p className='search-container__p'>Sorry, we couldn't find any movies</p>:
      <div className='galery-container'>
        {
          movies.map((movie) => {
            return (
              (movie.media_type === 'movie') ?
                <Link key={movie.id} to={`/movies/${movie.id}`} className='galery-container__Link'> {
                  (movie.poster_path == null)? <p>No hay foto</p>:
                  <img className= 'galery-container__img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='poster'></img>
                }
                </Link>:
                <Link key={movie.id} to={`/series/${movie.id}`} className='galery-container__Link'> {
                  (movie.poster_path == null)? <p>No hay foto</p>:
                  <img className= 'galery-container__img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='poster'></img>
                }
                </Link>  
          )})
        }
      </div>
      }
    </div>
  );
}

export default Search;