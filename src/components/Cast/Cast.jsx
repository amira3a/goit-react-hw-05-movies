import { useState, useEffect } from 'react';
import style from "./cast.module.css";
import { useParams } from 'react-router-dom';

function Cast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {movieId} = useParams();
  const API_KEY = '605d61cf3adf4a00957fd8ad779797b5';

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setCast(data.cast);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cast</h1>
      <ul className={style.castList}>
        {cast.map(person => (
          <li key={person.id}>
            {person.name} : ({person.character})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;