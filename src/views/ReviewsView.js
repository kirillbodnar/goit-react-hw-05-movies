import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'api/movies';

import Reviews from 'components/Reviews/Reviews';

export default function ReviewsView() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviewsById(movieId).then(res => setReviews(res.results));
  }, [movieId]);
  return (
    <>
      {reviews.length === 0 ? (
        <p style={{ fontSize: 25, fontWeight: 600 }}>
          We don't have reviews for this movie
        </p>
      ) : (
        <Reviews reviews={reviews} />
      )}
    </>
  );
}
