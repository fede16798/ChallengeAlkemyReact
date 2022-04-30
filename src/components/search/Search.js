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
    async function fetchData() {
      console.log('buscando...', movies);
      const request = await getMovieByWord(name);
      setMovies(request.data.results);
      console.log('encontrado...', movies);
      return request;
    };

    fetchData()
      .then(() => console.log('movis ',movies))
      .catch(err => handleError("Something went wrong. Please try again", "There was an error loading the movies", "error"));
    }, [name]);

  return (
    <div className="search-container"> 
      <h3 className='search-container__h3'>Movies related with {name}</h3>
      <div className='galery-container'>
        {
          movies.map((movie) => {
            return (<Link key={movie.id} to={`/movies/${movie.id}`} className='galery-container__Link'><img className= 'galery-container__img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img></Link>);
          })
        }
      </div>
    </div>
  );
}

export default Search;