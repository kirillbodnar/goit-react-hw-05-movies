import { useState, useEffect } from 'react';
import { fetchByName } from 'api/movies';
import { useSearchParams } from 'react-router-dom';

import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';
import Section from 'components/Section/Section';

export default function MoviesView() {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null || '') {
      return;
    }
    fetchByName(query)
      .then(res => {
        setMovies(res.results);
        setSearchParams({ query: query });
      })
      .catch(error => console.log(error));
  }, [setSearchParams, query]);

  return (
    <>
      <Section>
        <Searchbar query={query} />
        {movies.length !== 0 && <MovieList movies={movies} />}
      </Section>
    </>
  );
}
