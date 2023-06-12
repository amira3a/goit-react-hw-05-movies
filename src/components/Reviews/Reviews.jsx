import  { useState, useEffect } from 'react';
import style from "./reviews.module.css";
import { useParams } from 'react-router-dom';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {movieId} = useParams();
  const API_KEY = '605d61cf3adf4a00957fd8ad779797b5';

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setReviews(data.results);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Reviews</h1>
      <ul className={style.reviewList}>
        {reviews.map(review => (
          <li key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;