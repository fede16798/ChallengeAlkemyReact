import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login.js';
import HomePage from '../pages/HomePage.js';
import Footer from '../components/Footer.js';
import MovieDetailed from '../components/MovieDetailed.js';

const AppRouter = () => { 
  return(
    <BrowserRouter className="AppRouter"  forceRefresh={true}>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path={`/movie/:id`} element={<MovieDetailed />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;