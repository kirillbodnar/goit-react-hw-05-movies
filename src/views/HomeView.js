import { useState, useEffect } from 'react';

import { fetchTrendingToday } from 'api/movies';

import MovieList from 'components/MovieList/MovieList';
import Section from 'components/Section/Section';

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingToday()
      .then(res => setMovies(res.results))
      .catch(error => setError(error));
  }, []);
  return (
    <>
      <Section title="Trending today">
        {movies && <MovieList movies={movies} />}
        {error && <h1>{error.text}</h1>}
      </Section>
    </>
  );
}
