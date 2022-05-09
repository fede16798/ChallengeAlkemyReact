//import hooks
import { useState, useEffect } from 'react';
//import styles
import '../../styles/Movies.css';
//import functions
import handleError from '../../handleErrors/HandleError.js';
import  { getMovies, getTrendingMoviesPerWeek } from '../../services/Movies.service.js';
//import components
import FilmsCarrousel from '../FilmsCarrousel.js';

const Movies = () => {

	const [movies, setMovies] = useState([]);
	const [moviesTrending, setMoviesTrending] = useState([]);

	useEffect(() => {
		getMovies()
			.then(res => {
				setMovies(res.data.results);
			})  
			.catch(err => {
				handleError("Something went wrong. Please try again", "There was an error loading the movies", "error");
			})
	}, [setMovies]);

	useEffect(() => {
		getTrendingMoviesPerWeek()
			.then(res => {
				setMoviesTrending(res.data.results);
			})
			.catch(err => {
				handleError("Something went wrong. Please try again", "There was an error loading the movies", "error"); 
			})
	}, [setMoviesTrending]);

	return (
		<div className='movie-container'>
			<h2>News</h2>
				{( movies.length === 0 )? <p className='movie-container__p'>There was an error loading the new movies</p>
				: 
				<FilmsCarrousel list={movies} mediaType={'movies'}/>
				}
				<h3>Trending</h3>
				{( moviesTrending.length === 0 )? <p className='movie-container__p'>There was an error loading the trending movies</p> 
				:
				<FilmsCarrousel list={moviesTrending} mediaType={'movies'}/>
				}
		</div>
	);
}

export default Movies;