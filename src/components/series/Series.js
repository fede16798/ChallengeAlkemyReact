//import hooks
import { useState, useEffect } from 'react';
//import components
import FilmCard from '../FilmCard.js';
//import styles
import '../../styles/Series.css';
//import Services
import { getSeries } from '../../services/Series.service.js';
//import HandleError
import handleError from '../../handleErrors/HandleError.js';
//import Swiper
import '../../styles/SwiperSlide.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import FilmsCarrousel from '../FilmsCarrousel.js';

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => { 
    getSeries()
      .then(res => {
        setSeries(res.data.results);  
      })
      .catch(err => {
        handleError('Something went wrong. Please try again later','There was an error getting the series','error');
      })
  }, [setSeries]);

  return (
    <>
    {(series.length === 0) && <h1>Hubo un error</h1>}
        <div className='series-container'>
          <h3>Series</h3>
          <FilmsCarrousel list={series} mediaType={'series'}/>
        </div>
    
    </>
  );
}

export default Series;