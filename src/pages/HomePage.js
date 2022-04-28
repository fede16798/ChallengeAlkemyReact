import Listado from '../components/Listado.js';
import Header from '../components/Header.js';
import '../../src/App.css';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      { !localStorage.getItem('token') ? (
        <Navigate to='/login' /> 
        ) : (        
        <div>
          <Header/>
          <div className='main-container'>
            <Listado />
          </div>
        </div>
      )} 
    </>
  );
}

export default HomePage