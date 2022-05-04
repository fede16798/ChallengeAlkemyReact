//import hooks
import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
//import components
import Explore from '../components/explore/Explore.js';
import Header from '../components/Header';
import Loading from '../components/Loading.js';

const DetailMoviePage = (props) => {
  const token = localStorage.getItem('token');

  const [loader, setLoader] = useState(false);

  useEffect(() => {
      setTimeout(() => setLoader(true) , 1000);
    }, []);
  return (
    <>
      { !token && <Navigate to='/login' />}
      <Header />
      {(!loader)? <Loading /> : 
        <Explore />
      }
    </>
  );
}

export default DetailMoviePage;