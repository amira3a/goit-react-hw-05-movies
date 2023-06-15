import { useState, useEffect } from 'react';
import style from './Home.module.css';
import { Link } from "react-router-dom";
import { useLocation} from "react-router-dom";


function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = '605d61cf3adf4a00957fd8ad779797b5';
  const location = useLocation();


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

  console.log("home", location);

  return (
    <div>
      <h1>Popular Movies Today</h1>
      <ul className={style.movieList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}
            state={{from: location.pathname + location.search}}
            >
              {movie.title} ({movie.release_date.substring(0, 4)})
            </Link>
          </li>
        ))}
      </ul>  
    </div>
  );
}

export default Home;