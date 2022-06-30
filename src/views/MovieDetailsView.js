import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchById } from 'api/movies';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import Section from 'components/Section/Section';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInfromation';
import GoBackButton from 'components/GoBackButton/GoBackButon';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    fetchById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <GoBackButton />

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
