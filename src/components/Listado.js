//import hooks
import { useState, useEffect } from 'react';
//import components
import Movie from '../components/Movie.js';
//import styles
import '../styles/Listado.css';
//import functions
import handleError from '../handleErrors/HandleError.js';
import  { getMovies, getTrendingMoviesPerWeek } from '../services/Movies.service.js';
//import exterrnal styles and components
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

const Listado = () => {

    const [movies, setMovies] = useState([]);
    const [moviesTrending, setMoviesTrending] = useState([]);

    const urlListMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=44a71ca256a24dd1ea2fbb016327c9c3&language=es-ES&page=1';
    const urlTrendingMovies = 'https://api.themoviedb.org/3/trending/movie/day?api_key=44a71ca256a24dd1ea2fbb016327c9c3';

    useEffect(() => {
        getMovies(urlListMovies) 
        .then(res => {
            setMovies(res.data.results);
        })  
        .catch(err => {
            handleError("Something went wrong. Please try again", "There was an error loading the movies", "error");
        });
    }, [setMovies]);
    
    useEffect(() => {
        getTrendingMoviesPerWeek(urlTrendingMovies)
            .then(res => {
                setMoviesTrending(res.data.results);
            })
            .catch(err => {
                handleError("Something went wrong. Please try again", "There was an error loading the movies", "error"); 
            })
    }, [setMoviesTrending]);

    return (
        <div className='listado-container'>
            <h2>Novedades</h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className='mySwiper'
            >
            {
                movies.map((movie) => {
                    return (<SwiperSlide key={movie.id}><Movie poster = {`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} id={movie.id}/></SwiperSlide>)
                })
            }
            </Swiper>
            <h3>Tendencias</h3>
            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
            {
                moviesTrending.map((movie) => {
                    return (<SwiperSlide key={movie.id}><Movie poster = {`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} id={movie.id}/></SwiperSlide>)
                })
            }
            </Swiper>
        </div>
    );
}

export default Listado;

    /*const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            console.log('Ejecucion');
            navigate('/login');
        }
    })
    */