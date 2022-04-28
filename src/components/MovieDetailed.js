//import hooks
import { useLocation } from 'react-router-dom'
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

  //recibo un objeto
  const id = useLocation().state;
  console.log(id);

  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  
  const url = `https://api.themoviedb.org/3/movie/${id.id}?api_key=44a71ca256a24dd1ea2fbb016327c9c3&language=en-US`;
  const urlSmilarMovies =`https://api.themoviedb.org/3/movie/${id.id}/similar?api_key=44a71ca256a24dd1ea2fbb016327c9c3&language=en-US&page=1`;

  useEffect(() => {
    getMovieById(url)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        handleError("Something went wrong. Please try again", "There was an error loading the movies", "error");
      })
  }, [id]);

  useEffect(() => {
    getSimiliarMovies(urlSmilarMovies)
      .then(response =>{
        console.log(response.data.results);
        setSimilarMovies(response.data.results);
      })
      .catch(error => {
        handleError("Something went wrong. Please try again", "There was an error loading the movies", "error");
      })
  }, [id])

  return (
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
      </div>
    </>
  );
}

export default MovieDetailed;