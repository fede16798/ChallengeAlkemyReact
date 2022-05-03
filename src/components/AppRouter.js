import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import components
import Login from '../components/Login.js';
import Footer from '../components/Footer.js';
//import pages
import HomePage from '../pages/HomePage.js';
import DetailMoviePage from '../pages/DetailMoviePage.js';
import SeriesPage from '../pages/SeriesPage.js';
import MoviesPage from '../pages/MoviesPage.js';
import DetailsSeriesPage from '../pages/DetailSeriesPage.js';
import SearchPage from '../pages/SeachPage.js';
import WishlistPage from '../pages/WishlistPage.js';


const AppRouter = () => { 

  const [favMessage, setFavMessage] = useState('');

  function getFavsFromLocalStorage() {
    let list = localStorage.getItem('favs')
    if ( list === null ) {
      localStorage.setItem('favs', '');
      return [];
    } else {
      return JSON.parse(list);
    }
  }    
  function getMovieData (element) {
    const parent = element.parentElement;
    //const grandParent = parent.parentElement;

    const id = element.getAttribute('movieID');
    const title = parent.querySelector('h3').innerHTML;
    const overview = parent.querySelector('p').innerHTML;
    const img = element.getAttribute('img');
    const mediaType = element.getAttribute('mediaType');
    
    return {id, title, overview, img, mediaType};
  }

  function isMovieInFavs(list, film) {
    return list.find(oneMovie => {return oneMovie.id === film.id}); 
  }

  const addOrRemoveMoviesFromFavs = (e) => {
    let favsTemp = [];
    favsTemp = getFavsFromLocalStorage();

    const btn = e.target;
    const movie = getMovieData(btn);

    let isInFavs = isMovieInFavs(favsTemp, movie);

    if (!isInFavs) { 
      favsTemp.push(movie);
      localStorage.setItem('favs', JSON.stringify(favsTemp));
      setFavMessage('Remove from favorites');
      console.log('se agregó la peli');
    } else {
      let moviesLeft = favsTemp.filter(oneMovie => {return oneMovie.id !== movie.id});
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavMessage('Add to favorites');
      console.log('se eliminó la peli');
    }
  }

  return(
    <BrowserRouter className="AppRouter"  forceRefresh={true}>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:id' element={<DetailMoviePage addOrRemoveMoviesFromFavs={addOrRemoveMoviesFromFavs} favMessage={favMessage}/>}  />
        <Route path='/series' element={<SeriesPage />} />
        <Route path='/series/:id' element={<DetailsSeriesPage addOrRemoveMoviesFromFavs={addOrRemoveMoviesFromFavs} favMessage={favMessage}/>} />
        <Route path='/search/:keyword' element={<SearchPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;