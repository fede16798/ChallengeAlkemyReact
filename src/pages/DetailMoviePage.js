//import hooks
import { Navigate } from 'react-router-dom';
//import components
import MovieDetailed from '../components/movies/MovieDetailed.js';
import Header from '../components/Header';

const DetailMoviePage = () => {
  const token = localStorage.getItem('token');

  return (
    <>
      { !token && <Navigate to='/login' />}
      <Header />
      <MovieDetailed />
    </>
  );
}

export default DetailMoviePage;