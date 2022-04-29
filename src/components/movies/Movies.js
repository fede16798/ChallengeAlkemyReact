//import hooks
import { useState, useEffect } from 'react';
//import components
import Movie from './Movie.js';
//import styles
import '../../styles/Movies.css';
//import functions
import handleError from '../../handleErrors/HandleError.js';
import  { getMovies, getTrendingMoviesPerWeek } from '../../services/Movies.service.js';
//import Swiper
import '../../styles/SwiperSlide.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [moviesTrending, setMoviesTrending] = useState([]);

    useEffect(() => {
        getMovies() 
        .then(res => {
            setMovies(res.data.results);
        })  
        .catch(err => {
            handleError("Something went wrong. Please try again", "There was an error loading the movies", "error");
        });
    }, [setMovies]);
    
    useEffect(() => {
        getTrendingMoviesPerWeek()
            .then(res => {
                setMoviesTrending(res.data.results);
            })
            .catch(err => {
                handleError("Something went wrong. Please try again", "There was an error loading the movies", "error"); 
            })
    }, [setMoviesTrending]);

    return (
        <div className='movie-container'>
            <h2>News</h2>
            {( movies.length == 0 )? <p className='movie-container__p'>There was an error loading the new movies</p>
            :   
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
            }
            <h3>Trending</h3>
            {( moviesTrending.length == 0 )? <p className='movie-container__p'>There was an error loading the trending movies</p> 
            :
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
            }
        </div>
    );
}

export default Movies;

    /*const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            console.log('Ejecucion');
            navigate('/login');
        }
    })
    */