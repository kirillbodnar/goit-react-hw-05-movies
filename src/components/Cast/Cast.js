import PropTypes from 'prop-types';
import noImage from '../../images/no-image-available.jpg';
import s from './Cast.module.css';

export default function Cast({ cast }) {
  return (
    <ul>
      {cast.map(person => {
        const { id, profile_path, original_name, character } = person;
        return (
          <li key={id} className={s.Person}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : noImage
              }
              alt={original_name}
              style={{ width: 200 }}
            />
            <ul className={s.Info}>
              <li>
                <p className={s.Name}>{original_name}</p>
              </li>
              <li>
                <p>Character: {character}</p>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      original_name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
