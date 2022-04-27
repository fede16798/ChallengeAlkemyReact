import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login.js';
import HomePage from '../pages/HomePage.js';
import Footer from '../components/Footer.js';


const AppRouter = () => { 
  return(
    <BrowserRouter className="AppRouter">
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter;