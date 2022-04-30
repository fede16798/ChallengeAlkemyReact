import { useNavigate } from 'react-router-dom';
import '../styles/SearcherForm.css';


const Searcher = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let word = e.target.keyword.value;
    navigate(`/search/${word}`);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input type='text' name='keyword' placeholder='Search...' className='search-form__input'></input>
    </form>
  );
}

export default Searcher;