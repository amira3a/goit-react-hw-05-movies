import  { useState, useEffect } from 'react';
import style from "./movieDetails.module.css";
import { Outlet, useParams } from 'react-router-dom';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  const API_KEY = '605d61cf3adf4a00957fd8ad779797b5';

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3//movie/${movieId}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [movieId, API_KEY]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.movieDetails}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <ul>
        <li>Release Date: {movie.release_date}</li>
        <li>Runtime: {movie.runtime} minutes</li>
        <li>Genres: {movie.genres.map(genre => genre.name).join(', ')}</li>
      </ul>
      <div className={style.buttonList}>
      <button ><a href={`/movies/${movie.id}/cast`} > View Cast </a></button> 
      <button ><a href={`/movies/${movie.id}/reviews`} >View Reviews </a></button>
      </div>
      <Outlet/>
    </div>
  );
}

export default MovieDetails;