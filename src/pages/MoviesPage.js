import Movies from '../components/movies/Movies.js';
import '../../src/App.css';
import React, { useEffect, useRef, useState } from 'react';
import Loading from '../components/Loading.js';
import { Navigate } from 'react-router-dom';
//import Swiper
import '../styles/SwiperSlide.css';
import "swiper/css";
import "swiper/css/pagination";
import Header from '../components/Header.js';

const MoviesPage = () => {
  
  const mounted = useRef(false);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
      setTimeout(() => setLoader(true) , 1000);
      mounted.current = true
      return () => {
          mounted.current = false;
      };
    }, []);
  return (
    <>
      { !localStorage.getItem('token') ? (
        <Navigate to='/login' /> 
        ) : (   
        <div>
          <Header />
          {(!loader)? (<Loading />) : (
            <Movies />
          )}
        </div> 
      )}
    </>
  );
}

export default MoviesPage;