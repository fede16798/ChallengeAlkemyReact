import Movies from '../components/movies/Movies.js';
import Header from '../components/Header.js';
import Series from '../components/series/Series.js';
import '../../src/App.css';
import { Navigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import Loading from '../components/Loading.js';
//import Swiper
import '../styles/SwiperSlide.css';
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
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
          <Header/>
          {(!loader)? (<Loading />) : (
          <div className='main-container'> 
            <Movies />
            <Series />
          </div>
          )}
        </div>
      )} 
    </>
  );
}

export default HomePage