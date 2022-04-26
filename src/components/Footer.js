import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-div-logo'>
        <img src='' alt='logo-footer'/>
      </div>  
      <navbar className='footer-navbar'>
        <ul className='footer-navbar-ul'>
          <li className='footer-navbar-ul__li'>Politicas Privacidad</li>
          <li className='footer-navbar-ul__li'>Acuerdo suscripcion</li>
          <li className='footer-navbar-ul__li'>Cancelar suscripcion</li>
          <li className='footer-navbar-ul__li'>Ayuda</li>
        </ul>
        <p className='footer-navbar-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud verit</p>
      </navbar>
    </footer>
  );
}

export default Footer;