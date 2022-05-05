import '../../styles/SearcherForm.css';

const Searcher = ({ handleChange }) => {

  return (
    <>
      <form className="search-form">
        <input type='text' name='keyword' placeholder='Search...' className='search-form__input'  onChange={handleChange}></input>
      </form> 
    </>
  );
}

export default Searcher;
