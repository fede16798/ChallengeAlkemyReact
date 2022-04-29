//import hooks
import { useState, useEffect } from 'react';
//import components
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

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => { 
    getSeries()
      .then(res => {
        setSeries(res.data.results);  
        console.log(series)
      })
      .catch(err => {
        handleError('Something went wrong. Please try again later','There was an error getting the series','error');
      });
  }, [setSeries]);

  return (
    <div className='series-container'>
      <h3>Series</h3>
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
          series.map((serie) => {
            return (<SwiperSlide key={serie.id}><img src={`https://image.tmdb.org/t/p/w500/${serie.backdrop_path}`} alt='series-poster'></img></SwiperSlide>);
          })
        }
      </Swiper>
    </div>
  );
}

export default Series;