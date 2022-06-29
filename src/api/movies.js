const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '2d5905d53440f725e4ea4906113b6c61';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingToday() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
}

export function fetchByName(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`
  );
}

export function fetchById(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
}

export function fetchCreditsById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`
  );
}

export function fetchReviewsById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`
  );
}
