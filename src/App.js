import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';

import CastView from 'views/CastView';
import ReviewsView from 'views/ReviewsView';
const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "home-view"*/)
);
const MoviesView = lazy(() =>
  import('views/MoviesView' /* webpackChunkName: "movies-view"*/)
);
const MovieDetailsView = lazy(() =>
  import('views/MovieDetailsView' /* webpackChunkName: "movieDetails-view"*/)
);
const NotFoundView = lazy(() =>
  import('views/NotFoundView' /* webpackChunkName: "notFound-view"*/)
);

export default function App() {
  return (
    <>
      <div>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/movies" element={<MoviesView />} />

            <Route path="/movies/:movieId" element={<MovieDetailsView />}>
              <Route path="cast" element={<CastView />} />
              <Route path="reviews" element={<ReviewsView />} />
            </Route>

            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
