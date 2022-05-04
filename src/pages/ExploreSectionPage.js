//import hooks
import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
//import components
import ExploreSection from '../components/explore/ExploreSection.js';
import Header from '../components/Header.js';
import Loading from '../components/Loading.js';

const DetailMoviePage = () => {
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
        <ExploreSection />
      }
    </>
  );
}

export default DetailMoviePage;