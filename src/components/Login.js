//import hooks
import { useNavigate } from 'react-router-dom';
//import styles
import '../styles/Login.css';
//import images and functions
import setLogin from '../services/Login.service.js';
import handleError from '../handleErrors/HandleError.js';
import logo from '../images/logo-app.svg';
//import styles or external components
import swAlert from '@sweetalert/with-react';

const Login = () => {

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (email === '' || password === '') {
        swAlert("Oops", "No puedes enviar campos vacios", "error");
        return;
    } 
    if (!emailRegex.test(email) && email !== '') {
        swAlert("Error", "El email debe ser válido", "error");
        return;
    }
    setLogin({email, password})
      .then(res => {
          const tokenRecibido = res.data.token;
          localStorage.setItem('token', tokenRecibido );
          swAlert('Perfecto', 'Ingresaste correctamente', 'success');
          navigate('/');
    })
      .catch(err => {
          handleError('Error', 'Credenciales invalidas', 'error');
    })
  }

  return (
    <div className="login-container">
      <div className='logo-container'>
          <img src={logo} alt='logo app' />
      </div>
      <form onSubmit={submitHandler} className="form">
        <h3>Inicia sesión</h3>
        <label className="form-label">
          <input type="email" name="email" placeholder='Correo electronico'/>
        </label>
        <label className="form-label">
          <input type="password" name="password" placeholder='Contraseña'/>
        </label>
        <button type="submit" className="form-button">INICIAR SESION</button>
      </form>
    </div>
  );
}

export default Login;