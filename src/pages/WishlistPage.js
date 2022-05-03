import '../../src/App.css';
import React, { useEffect, useRef, useState } from 'react';
import Loading from '../components/Loading.js';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header.js';
import Wishlist from '../components/wishlist/Wishlist.js';


const WishlistPage = () => {
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
      { !localStorage.getItem('token') ? (
        <Navigate to='/login' /> 
        ) : (   
        <div>
          <Header />
          {(!loader)? (<Loading />) : (
            <Wishlist />
          )}
        </div> 
      )}
    </>
  );
}

export default WishlistPage;