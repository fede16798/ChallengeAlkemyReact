//import hooks
import { Navigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
//import components
import DetailsSeries from '../components/series/DetailsSeries.js';
import Header from '../components/Header';
import Loading from '../components/Loading.js';

const DetailMoviePage = ( props ) => {
  const token = localStorage.getItem('token');

  const mounted = useRef(false);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
      setTimeout(() => setLoader(true) , 1000);
      mounted.current = true
      return () => {
          mounted.current = false;
      };
    }, []);

  return (
    <>
      { !token && <Navigate to='/login' />}
      <Header />
      {(!loader)? <Loading /> : 
        <DetailsSeries addOrRemoveMoviesFromFavs={props.addOrRemoveMoviesFromFavs} favMessage={props.favMessage} getMensaje={props.getMensaje}/>
      }
    </>
  );
}

export default DetailMoviePage;