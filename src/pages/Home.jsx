import { useState, useEffect } from 'react';
import style from './Home.module.css';




function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = '605d61cf3adf4a00957fd8ad779797b5';

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [API_KEY]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Popular Movies Today</h1>
      <ul className={style.movieList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <a href={`movies/${ movie.id }`}>
              {movie.title} ({movie.release_date.substring(0, 4)})
            </a>
          </li>
        ))}
      </ul>  
    </div>
  );
}

export default Home;