import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getFilmsByGenresAndMediaType, getGenreById} from '../../services/Explore.service.js';
import FilmsCarrousel from '../FilmsCarrousel.js';
import handleError from '../../handleErrors/HandleError.js'

const ExploreSection = () => {
  let typeTv = 'tv';
  let typeMovie = 'movie';

  let keyword = useParams().keyword;
  const [seriesList, setSeriesList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);

  const getGenreName = async (keyword,typeMedia) => {
    let res = await getGenreById(typeMedia);
    let genres = res.data.genres;
    return genres.find(oneGenre => { return oneGenre.name.includes(keyword) });
  }

  useEffect(() => {
    const getData = async (keyword, typeMovie) => {
      try {
        let res = await getGenreName(keyword,typeMovie);
        let genre = res.id;
        let films = await getFilmsByGenresAndMediaType(genre, typeMovie);
        setMoviesList(films.data.results);    
      } catch (err) {
        handleError("Something went wrong. Please try again", "There was an error loading the movies", "error");
        console.log(err);
      }
    }
    getData(keyword, typeMovie);
  }, [keyword])

  useEffect(() => {  
    const getData = async (keyword, typeTv) => {
      try {
        let res = await getGenreName(keyword,typeTv);
        let genre = res.id;
        let films = await getFilmsByGenresAndMediaType(genre, typeTv);
        setSeriesList(films.data.results);    
      } catch (err) {
        handleError("Something went wrong. Please try again", "There was an error loading the movies", "error");
        console.log(err);
      }
    }
    getData(keyword, typeTv);
  }, [keyword])

  return(
    <>
      <FilmsCarrousel list={moviesList} mediaType='movies'/>
      <FilmsCarrousel list={seriesList} mediaType='series'/>
    </>
  )
}

export default ExploreSection;