import Search from '../components/search/Search';
import '../../src/App.css';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header.js';

const SearchPage = () => {
  return (
    <>
      { !localStorage.getItem('token') ? (
        <Navigate to='/login' /> 
        ) : (   
        <div>
          <Header />
          <Search />
        </div> 
      )}
    </>
  );
}

export default SearchPage;