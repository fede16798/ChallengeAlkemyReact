import { useState, useEffect } from 'react';
//import components
import FilmCard from '../FilmCard.js';
//import style
import '../../styles/Wishlist.css';


const Wishlist = () => {
  const favList = JSON.parse(localStorage.getItem('favs'));

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(favList);
  }, [])


  return (
    <div className='container-div'>
      {
        favourites.map((favourite) => {
          return(<FilmCard key={favourite.id} className='container-div__filmCard' poster={favourite.img} id={favourite.id} mediaType={favourite.mediaType}/>);
        })
      }
    </div>
  )
}

export default Wishlist;