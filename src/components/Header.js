import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../images/logo-app.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='container-logo'>
        <img src={logo} alt='logo de la app' />
      </div>
        <nav className="navbar">
          <ul className="navbar-ul">
            <li className='navbar-ul__li'><Link to='/'  >Home</Link></li>
            <li className='navbar-ul__li'><Link to='/peliculas' >Peliculas</Link></li>
            <li className='navbar-ul__li'><Link to='/series' >Series</Link></li>      
            <li className='navbar-ul__li'><Link to='/search' >Busqueda</Link></li>
            <li className='navbar-ul__li'><Link to='/wishlist' >Favoritos</Link></li>
            <li className='navbar-ul__li'><Link to='/originals' >Originals</Link></li>      
          </ul>
        </nav>
    </header>
  );
}

export default Header;