import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchById } from 'api/movies';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import Section from 'components/Section/Section';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInfromation';
import GoBackButton from 'components/GoBackButton/GoBackButon';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <GoBackButton location={location.state.from} />

      {movie && (
        <>
          <Section>
            <MovieDetails movie={movie} />
          </Section>
          <Section title="Additional Information">
            <AdditionalInformation />
          </Section>
        </>
      )}
    </>
  );
}
