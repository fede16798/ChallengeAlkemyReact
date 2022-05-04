import Series from '../components/series/Series.js';
import '../../src/App.css';
import { Navigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import Loading from '../components/Loading.js';

//import Swiper
import '../styles/SwiperSlide.css';
import "swiper/css";
import "swiper/css/pagination";
import Header from '../components/Header.js';

const SeriesPage = () => {
  const mounted = useRef(false);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
      mounted.current = true;
      setTimeout(() => setLoader(true) , 1000);
      console.log('mounted ', mounted);
      return () => {
          mounted.current = false;
          console.log('mounted en return', mounted);
      };
    }, []);

  
  return (
    <>
      { !localStorage.getItem('token') ? (
        <Navigate to='/login' /> 
        ) : (
        <div>
          <Header />
          {(!mounted.current)? (<Loading />) : (
            <Series />
          )}
        </div> 
      )}
    </>
  );
}

export default SeriesPage;