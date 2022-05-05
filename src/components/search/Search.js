import { useState, useEffect } from 'react';
import getFilmByWord from '../../services/Search.service.js';
import {getMovies} from '../../services/Movies.service.js';
import handleError from '../../handleErrors/HandleError.js';
import { Link } from 'react-router-dom';

import '../../styles/Search.css';

const Search = ({ keyword }) => {

  const [films, setFilms] = useState([]);

  useEffect(() =>{
    async function getData() {
      try{
        let res = await getMovies();
        setFilms(res.data.results);
      }
      catch (err) {
        handleError("Something went wrong. Please try again", "There was an error loading the movies", "error");
      }
    }
    getData();
  }, [])

  useEffect(() => { 
        if (keyword.length > 0) {
          getFilmByWord(keyword)
            .then((res) => {
            setFilms(res.data.results);
          })
        .catch(err => handleError("Something went wrong. Please try again", "There was an error loading the movies", "error"));
      }
    }, [keyword]);   


  return (
    <div className="search-container"> 
      <h1 className='search-container__h1'>Films related with {keyword}</h1>
      {(films.length === 0) ? <p className='search-container__p'>Sorry, we couldn't find any movies</p>:
      <div className='galery-container'>
        {
          films.map((film) => {
            return (
              (film.media_type === 'movie') ?
                <Link key={film.id} to={`/movies/${film.id}`} className='galery-container__Link'> {
                  (film.poster_path == null)? 
                  <>
                    <p className='galery-container__p'>We couldn't find any poster for this movie.</p>
                    <button className='galery-container__button'>View details</button> 
                  </>:
                  <img className= 'galery-container__img' src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt='poster'></img>
                }
                </Link>:
                <Link key={film.id} to={`/series/${film.id}`} className='galery-container__Link'> {
                  (film.poster_path == null)?  
                  <>
                    <p className='galery-container__p'>We couldn't find any poster for this movie.</p>
                    <button className='galery-container__button'>View details</button> 
                  </>:
                  <img className= 'galery-container__img' src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt='poster'></img>
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