import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCreditsById } from 'api/movies';

import Cast from 'components/Cast/Cast';

export default function CastView() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCreditsById(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  return <>{cast.length !== 0 && <Cast cast={cast} />}</>;
}
