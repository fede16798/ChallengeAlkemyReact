import { Link, useNavigate } from 'react-router-dom';
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
          <li className='nav-ul__li'><Link to='/'>Peliculas</Link></li>
          <li className='nav-ul__li'><Link to='/series' >Series</Link></li>      
          <li className='nav-ul__li'><Link to='/search' >Busqueda</Link></li>
          <li className='nav-ul__li'><Link to='/wishlist' >Favoritos</Link></li>
          <li className='nav-ul__li'><Link to='/originals' >Originals</Link></li>   
        </ul>
      </nav>
      <button className='nav-btn' type='submit' onClick={logoutHandler}>Logout</button>
    </header>
  );
}

export default Header;