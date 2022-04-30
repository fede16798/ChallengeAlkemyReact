//import hooks
import { Navigate } from 'react-router-dom';
//import components
import DetailsSeries from '../components/series/DetailsSeries.js';
import Header from '../components/Header';

const DetailMoviePage = () => {
  const token = localStorage.getItem('token');

  return (
    <>
      { !token && <Navigate to='/login' />}
      <Header />
      <DetailsSeries />
    </>
  );
}

export default DetailMoviePage;