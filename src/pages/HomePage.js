import Movies from '../components/movies/Movies.js';
import Header from '../components/Header.js';
import Series from '../components/series/Series.js';
import '../../src/App.css';
import { Navigate } from 'react-router-dom';
//import Swiper
import '../styles/SwiperSlide.css';
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
  return (
    <>
      { !localStorage.getItem('token') ? (
        <Navigate to='/login' /> 
        ) : (        
        <div>
          <Header/>
          <div className='main-container'>
            <Movies />
            <Series />
          </div>
        </div>
      )} 
    </>
  );
}

export default HomePage