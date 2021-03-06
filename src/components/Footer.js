//import styles and logo
import '../styles/Footer.css';
import logo from '../images/logo-app.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-div-logo'>
        <img src={logo} alt='logo-footer'/>
      </div>  
      <nav className='footer-nav'>
        <ul className='footer-nav-ul'>
          <li className='footer-nav-ul__li'>Politicas Privacidad</li>
          <li className='footer-nav-ul__li'>Acuerdo suscripcion</li>
          <li className='footer-nav-ul__li'>Cancelar suscripcion</li>
          <li className='footer-nav-ul__li'>Ayuda</li>
        </ul>
        <ul className='footer-nav-ul'>
          <li className='footer-nav-ul__li'>Acerca de Disney+</li>
          <li className='footer-nav-ul__li'>Publicidad personzalida</li>
        </ul>
      </nav>
      <p className='footer-p'>Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio Disney+ es comercializado por The Walt Disney Company (Argentina) S.A., Tucumán 1, Piso 4º (C1049AAA) Ciudad Autónoma de Buenos Aires, Argentina y número de CUIT 30-63984459-1.</p>
      <p className='footer-p'>© Disney. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;