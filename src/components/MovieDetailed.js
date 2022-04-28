//import hooks
import { Navigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
//import services
import  { getMovieById, getSimiliarMovies } from '../services/Movies.service.js';
//import component
import Header from '../components/Header.js';
import Movie from '../components/Movie.js';
//import styles
import '../styles/MovieDetailed.css';
import '../styles/Listado.css';
//import functions
import handleError from '../handleErrors/HandleError.js';
//import exterrnal styles and components
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const MovieDetailed = () => {

  const token = localStorage.getItem('token');
  
  let id = useParams().id;
  
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  
  useEffect(() => {
    getMovieById(id)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        handleError("Something went wrong. Please try again", "There was an error loading the movies", "error");
      })
  }, [id]);

  useEffect(() => {
    getSimiliarMovies(id)
      .then(response =>{
        setSimilarMovies(response.data.results);
      })
      .catch(error => {
        handleError("Something went wrong. Please try again", "There was an error loading the movies", "error");
      })
  }, [id])

  return (
    <>
      { !token && <Navigate to='/login' />}
      { !movie && <h1>Hubo un error</h1> }
      { movie &&
        <>
          <Header />
          <div className='movie-container'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='portada de la peliluca' className='movie-container__img' />
            <div className='overview-container'>
              <h3 className='overview-container__h3'>{movie.original_title}</h3>
              <p className='overview-container__p'>{movie.overview}</p>
              <p>rating: {movie.vote_average}</p>
            </div>
          </div>
          <h5>Similar</h5>
          <div className='similar-container'> 
            {(similarMovies.length == 0)? 
              <p className='similar-container__p'>There is no similar movie</p>
            :
              <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
                  pagination={{
                  clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                > 
                {
                  similarMovies.map((movie) => {
                    return(<SwiperSlide key={movie.id}><Movie poster = {`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} id={movie.id}/></SwiperSlide>)
                  })
                }
              </Swiper>
            }
          </div>
        </>
      }
    </>
  );
}

export default MovieDetailed;