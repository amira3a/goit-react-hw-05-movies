import  { useState, useEffect, Suspense, lazy } from 'react';
import style from "./movieDetails.module.css";
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useLocation} from "react-router-dom";



const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
 

function MovieDetails() {
  const location = useLocation();
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

  const path = location?.state?.from ?? "/";

  console.log("path", path);
  return (
    <div className={style.movieDetails}>
      <Link to={path}>Go back</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <ul>
        <li>Release Date: {movie.release_date}</li>
        <li>Runtime: {movie.runtime} minutes</li>
        <li>Genres: {movie.genres.map(genre => genre.name).join(', ')}</li>
      </ul>
      <div className={style.linkList}>
      <Link to="cast" state={{from: path}}> View Cast </Link> 
      <Link to="reviews" state={{from: path}} >View Reviews </Link>
      </div>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MovieDetails;