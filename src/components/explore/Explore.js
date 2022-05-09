//import hooks
import { useState, useEffect } from 'react';
//import styles
import '../../styles/Explore.css';
//import services
import {getGenres} from '../../services/Explore.service.js';
//import componentes
import ExploreCard from './ExploreCard.js';

const Explore = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() =>{
    getGenres()
      .then(req => setGenres(req.data.genres))
      .catch(err => console.error('hay error'));
  }, [setGenres])

  return (
    <div className='explore-container'>
      {
        (genres.length === 0)? console.log('loading...'):
        genres.map((genre) => {
            return (
              <div className='exploreCard-container' key={genre.id}>
                <ExploreCard mediaType={'movie'} genre={genre} />
              </div>
            );
          })
      }
    </div>
  )
}

export default Explore; 