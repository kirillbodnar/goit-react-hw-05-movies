import PropTypes from 'prop-types';
import noImage from '../../images/no-image-available.jpg';
import s from './MovieDetails.module.css';

export default function MovieDetails({ movie }) {
  const { poster_path, tagline, title, name, vote_average, overview, genres } =
    movie;
  return (
    <>
      <div>
        <div className={s.Card}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : noImage
            }
            alt={tagline}
            className={s.Img}
            style={{ width: 300 }}
          />
          <div className={s.Info}>
            <h2>{title || name}</h2>
            <p>User rating: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className={s.GenreList}>
              {genres.map(genre => {
                return (
                  <li key={genre.id} className={s.Genre}>
                    {genre.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  }),
};
