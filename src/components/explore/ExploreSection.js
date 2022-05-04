import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getFilmsByGenresAndMediaType} from '../../services/Explore.service.js';
import FilmsCarrousel from '../FilmsCarrousel.js';

const ExploreSection = () => {
  let genreId = useParams().genreId;
  const [seriesList, setSeriesList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  
  useEffect(() => {
    getFilmsByGenresAndMediaType(genreId, 'movie')
      .then(res => {
        setMoviesList(res.data.results);
      })
      .catch(err => {console.log(err)});
  }, [genreId])

  useEffect(() => {
    getFilmsByGenresAndMediaType(genreId, 'tv')
      .then(res => {
        setSeriesList(res.data.results);
      })
      .catch(err => {console.log(err)});
  }, [genreId])

  return(
    <>
      <FilmsCarrousel list={moviesList} mediaType='movies'/>
      <FilmsCarrousel list={seriesList} mediaType='series'/>
    </>
  )
}

export default ExploreSection;