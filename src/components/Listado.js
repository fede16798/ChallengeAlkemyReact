import Movie from '../components/Movie.js';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import '../styles/Listado.css';
import getMovies from '../services/Movies.service.js';
//import hooks
import { useState, useEffect } from 'react';

// import required modules
import { Pagination } from "swiper";

const Listado = () => {

    const [movies, setMovies] = useState([]);

    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=44a71ca256a24dd1ea2fbb016327c9c3&language=es-ES&page=1';
    useEffect(() => {
        getMovies(url) 
        .then(res => {
            setMovies(res.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }, [setMovies])
    console.log(movies);

    
    return (
        <div className='listado-container'>
            <h2>Novedades</h2>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
            {
                movies.map((movie, index) => {
                    return (<SwiperSlide key={index}><Movie poster = {`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} /></SwiperSlide>)
                })
            }
            </Swiper>
            <h3>Favoritos</h3>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
            {
                movies.map((movie, index) => {
                    return (<SwiperSlide key={index}><Movie poster = {`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} /></SwiperSlide>)
                })
            }
            </Swiper>
        </div>
    )
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