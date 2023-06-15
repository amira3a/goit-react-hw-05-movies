import { useState, useEffect } from 'react';
import style from "./Movies.module.css";
import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { useLocation} from "react-router-dom";


function Movies() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = '605d61cf3adf4a00957fd8ad779797b5';
  const [searchParams, setSearchParams] = useSearchParams();
  
  
  

  const handleChange = event => {
    setQuery(event.target.value);
  };

  
  
  const handleSubmit = event => {
    event.preventDefault();
    if (!event) {
      return;
    }
    setSearchParams({ query: query });
  };

  useEffect(() => {
    let query = searchParams.get('query');
    if (!query) {
      return;
    }

    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [searchParams]);

  console.log("movies", location);

  return (
    <div>
      <h1>Search Movies</h1>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className={style.movieList}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}
              state={{from: location.pathname + location.search}}
              >
                {movie.title} ({movie.release_date.substring(0, 4)})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;