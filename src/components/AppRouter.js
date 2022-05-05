import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
import ExplorePage from '../pages/ExplorePage.js';
import ExploreSectionPage from '../pages/ExploreSectionPage.js';

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
  function isMovieInFavs(list, id) {
    return list.find(oneMovie => {return oneMovie.id === id}); 
  }
  function getMensaje(id) {
    let favsTemp = [];
    favsTemp = getFavsFromLocalStorage();

    let isInFavs = isMovieInFavs(favsTemp, id);

    if (!isInFavs) { 
      setFavMessage('Add to favorites');
    } else {
      setFavMessage('Remove from favorites');
    }
  }
  const addOrRemoveMoviesFromFavs = (e) => {
    let favsTemp = [];
    favsTemp = getFavsFromLocalStorage();

    const btn = e.target;
    const movie = getMovieData(btn);

    let isInFavs = isMovieInFavs(favsTemp, movie.id);

    if (!isInFavs) { 
      favsTemp.push(movie);
      localStorage.setItem('favs', JSON.stringify(favsTemp));
      getMensaje(movie.id)
    } else {
      let moviesLeft = favsTemp.filter(oneMovie => {return oneMovie.id !== movie.id});
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      getMensaje(movie.id)
    }
  }
  
  return(
    <BrowserRouter className="AppRouter"  forceRefresh={true}>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:id' element={<DetailMoviePage addOrRemoveMoviesFromFavs={addOrRemoveMoviesFromFavs} favMessage={favMessage} getMensaje={getMensaje}/>} />
        <Route path='/series' element={<SeriesPage />} />
        <Route path='/series/:id' element={<DetailsSeriesPage addOrRemoveMoviesFromFavs={addOrRemoveMoviesFromFavs} favMessage={favMessage} getMensaje={getMensaje}/>} />
        <Route path='/search/:keyword' element={<SearchPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/explore/:keyword' element={<ExploreSectionPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;