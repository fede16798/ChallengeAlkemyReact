//import Swiper
import '../styles/SwiperSlide.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
//import component
import FilmCard from './FilmCard.js';

const FilmsCarrousel = ({ list, mediaType }) => {
  return (
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
        list.map( (oneElement) => {
          return (
          <SwiperSlide key={oneElement.id}>
            <FilmCard poster = {`https://image.tmdb.org/t/p/w500/${oneElement.backdrop_path}`} id={oneElement.id} mediaType={mediaType} />
          </SwiperSlide>)
        })
      }
    </Swiper>   
  )
}

export default FilmsCarrousel