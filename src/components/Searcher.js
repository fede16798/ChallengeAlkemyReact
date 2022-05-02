import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearcherForm.css';
import SnackBarMessage from '../components/SnackBarMessage.js';

const Searcher = () => {
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState({
    status: false,
    message: '',
    type: ''
  });  
  const { status, message, type } = showMessage 

  const handleClose = () => {
    setShowMessage({
        ...showMessage,
        status: false
    })
}

  const handleSubmit = (e) => {
    e.preventDefault();
    let keyword = e.target.keyword.value;
    if (keyword.length > 1 && keyword !== undefined) { 
      e.target.keyword.value = '';
      navigate(`/search/${keyword}`); 
    } else {
      setShowMessage({
        status: true,
        message: 'Your keyword is short. Please write at least 2 caracters.',
        type: 'error'
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <input type='text' name='keyword' placeholder='Search...' className='search-form__input'></input>
      </form> 
      <SnackBarMessage estado={status} handleClose={handleClose} type={type} message={message}/>
    </>
  );
}

export default Searcher;
