import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
//import components
import Header from '../components/Header.js';
import Search from '../components/search/Search.js';
import Searcher from '../components/search/Searcher.js';
import Loading from '../components/Loading.js';
//import styles
import '../../src/App.css';

const SearchPage = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
      setTimeout(() => setLoader(true) , 1000);
    }, []);

  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  return (
    <>
      { !localStorage.getItem('token') ? (
        <Navigate to='/login' /> 
        ) : (   
        <>
        <Header />
        {(!loader)? <Loading /> :
          <>
          <Searcher handleChange = { handleChange }/>
          <Search keyword = { inputValue }/>   
          </>
        }
      </> 
      )}
    </>
  );
}

export default SearchPage;