import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login.js';
import HomePage from '../pages/HomePage.js';
import Header from '../components/Header.js';

const AppRouter = () => { 
  return(
    <BrowserRouter className="AppRouter">
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/listado" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;