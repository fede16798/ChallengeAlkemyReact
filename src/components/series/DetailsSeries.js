//import hooks
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
//import components
import SeriesCard from './SeriesCard.js';
//import services
import  { getSeriesById, getSimilarSeries } from '../../services/Series.service.js';
//import styles
import '../../styles/MovieDetailed.css';
//import exterrnal styles and components
import '../../styles/SwiperSlide.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const DetailsSeries = () => {

  let id = useParams().id;

  const [oneSeries, setOneSeries] = useState({});
  const [similarSeries, setSimilarSeries] = useState([]);

  useEffect(() => {
    getSeriesById(id)
      .then((res) => {setOneSeries(res.data)})
      .catch((err) => console.log(err));
  },[id]);

  useEffect(() => {
    getSimilarSeries(id)
      .then((res) => {
        setSimilarSeries(res.data.results)
      })
      .catch(err=>console.log(err));
  }, [id])

  return (
    <>
    {!oneSeries && <p>No result</p>} 
    { oneSeries &&
      <>
        <div className='movieDetailed-container'>
          <img src={`https://image.tmdb.org/t/p/w500/${oneSeries.poster_path}`} alt='portada de la series' className='movieDetailed-container__img' />
          <div className='overview-container'>
            <h3 className='overview-container__h3'>{oneSeries.original_name}</h3>
            <p className='overview-container__p'>{oneSeries.overview}</p>
            <p>rating: {oneSeries.vote_average}</p>
          </div>
        </div>
        <h5>Similar</h5>
        <div className='similar-container'> 
          {(similarSeries.length == 0)? 
            <p className='similar-container__p'>There is no similar series</p>
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
                similarSeries.map((x) => {
                  return(<SwiperSlide key={x.id}><SeriesCard poster = {`https://image.tmdb.org/t/p/w500/${x.backdrop_path}`} id={x.id}/></SwiperSlide>);
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

export default DetailsSeries;