import { Link, useNavigate } from 'react-router-dom';
//import styles and logo
import '../styles/Header.css';
import logo from '../images/logo-app.svg';

const Header = () => {
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <header className='header'>
      <div className='container-logo'>
        <img src={logo} alt='logo de la app' />
      </div>
      <nav className="nav">
        <ul className="nav-ul">
          <li className='nav-ul__li'><Link to='/'>Home</Link></li>
          <li className='nav-ul__li'><Link to='/movies'>Movies</Link></li>
          <li className='nav-ul__li'><Link to='/series' >Series</Link></li>
          <li className='nav-ul__li'><Link to='/explore' >Explore</Link></li>
          <li className='nav-ul__li'><Link to='/wishlist' >Favorites</Link></li>
          <li className='nav-ul__li'><Link to='/search' >Search</Link></li>   
        </ul>
      </nav>
      <button className='nav-btn' type='submit' onClick={logoutHandler}>Logout</button>
    </header>
  );
}

export default Header;