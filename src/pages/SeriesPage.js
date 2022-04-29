import Series from '../components/series/Series.js';
import '../../src/App.css';
import { Navigate } from 'react-router-dom';
//import Swiper
import '../styles/SwiperSlide.css';
import "swiper/css";
import "swiper/css/pagination";
import Header from '../components/Header.js';

const SeriesPage = () => {
  return (
    <>
      { !localStorage.getItem('token') ? (
        <Navigate to='/login' /> 
        ) : (   
        <div>
          <Header />
          <Series />
        </div> 
      )}
    </>
  );
}

export default SeriesPage;