//import styles
import '../styles/MovieDetailed.css';

const DetailsFilm = ( { poster, title, overview, rating, backPoster,favMessage, addOrRemoveMoviesFromFavs, id, mediaType} ) => {
  return (
    <div className='movieDetailed-container'>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt='portada de la series' className='movieDetailed-container__img' />
      <div className='overview-container'>
        <h3 className='overview-container__h3'>{title}</h3>
        <p className='overview-container__p'>{overview}</p>
        <p>rating: {rating}</p>
        <button 
          id='boton' 
          className={`overview-container__button ${favMessage == 'Remove from favorites' ? 'red' : ''}`}
          onClick={addOrRemoveMoviesFromFavs} 
          movieID={id} 
          mediaType={'movies'} 
          img={`https://image.tmdb.org/t/p/w500/${backPoster}`}
        > {favMessage}</button>
      </div>
    </div>
  )
}

export default DetailsFilm;