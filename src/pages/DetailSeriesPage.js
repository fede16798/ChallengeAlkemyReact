//import hooks
import { Navigate } from 'react-router-dom';
//import components
import DetailsSeries from '../components/series/DetailsSeries.js';
import Header from '../components/Header';

const DetailMoviePage = ( props ) => {
  const token = localStorage.getItem('token');

  return (
    <>
      { !token && <Navigate to='/login' />}
      <Header />
      <DetailsSeries addOrRemoveMoviesFromFavs={props.addOrRemoveMoviesFromFavs} favMessage={props.favMessage}/>
    </>
  );
}

export default DetailMoviePage;