import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <>
      <ul className={s.List}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link
                className={s.Movie}
                to={`/movies/${movie.id}`}
                state={{
                  from:
                    location.search === ''
                      ? `${location.pathname}`
                      : `${location.pathname}${location.search}`,
                }}
              >
                {movie.title || movie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
