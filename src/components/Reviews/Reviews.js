import PropTypes from 'prop-types';
import s from './Reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <ul className={s.ReviewList}>
      {reviews.map(review => {
        const { author, content, id } = review;
        return (
          <li key={id}>
            <p className={s.Author}>Author: {author}</p>
            <p className={s.Review}>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
