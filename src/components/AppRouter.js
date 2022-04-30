import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import components
import Login from '../components/Login.js';
import Footer from '../components/Footer.js';
//import pages
import HomePage from '../pages/HomePage.js';
import DetailMoviePage from '../pages/DetailMoviePage.js';
import SeriesPage from '../pages/SeriesPage.js';
import MoviesPage from '../pages/MoviesPage.js';
import DetailsSeries from '../pages/DetailSeriesPage.js';
import SearchPage from '../pages/SeachPage.js';

const AppRouter = () => { 
  return(
    <BrowserRouter className="AppRouter"  forceRefresh={true}>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:id' element={<DetailMoviePage />} />
        <Route path='/series' element={<SeriesPage />} />
        <Route path='/series/:id' element={<DetailsSeries />} />
        <Route path='/search/:keyword' element={<SearchPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;