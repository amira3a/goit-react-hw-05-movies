import { lazy, Suspense } from 'react';
import { Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';


 const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));


export const App =() => {
  
  return (
    <div>
  
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetails />}> 
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
        
        
    </div>   
  );
};


