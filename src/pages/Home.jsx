
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../slices/moviesSlice';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies || []);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log({ movies, status }); // Log the state to debug
  }, [movies, status]);

  return (
    <div className="container mx-auto p-4">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Failed to load movies.</p>}
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
