import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container-logo">
        
      </div>
        <nav className="navbar">
          <ul className="navbar-ul">
            <li><Link to='/'  className='navbar-ul__li'>Home</Link></li>
            <li><Link to='/peliculas' className='navbar-ul__li'>Peliculas</Link></li>
            <li><Link to='/series' className='navbar-ul__li'>Series</Link></li>      
            <li><Link to='/search' className='navbar-ul__li'>Busqueda</Link></li>
            <li><Link to='/wishlist' className='navbar-ul__li'>Favoritos</Link></li>
            <li><Link to='/originals' className='navbar-ul__li'>Originals</Link></li>      
          </ul>
        </nav>
    </header>
  );
}

export default Header;