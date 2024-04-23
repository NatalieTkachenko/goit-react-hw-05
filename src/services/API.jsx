// === Lib modules ===
import axios from "axios";

const API_KEY = "e6e08eed725eb6cd19ef276195d6b543";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmUwOGVlZDcyNWViNmNkMTllZjI3NjE5NWQ2YjU0MyIsInN1YiI6IjY2MTk3ZDk0M2ZmMmRmMDE3ZDliN2M0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljpgT5dmB94gzJqhPmV7I3RLERTn7x5y7YCSZzHQGaQ";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmUwOGVlZDcyNWViNmNkMTllZjI3NjE5NWQ2YjU0MyIsInN1YiI6IjY2MTk3ZDk0M2ZmMmRmMDE3ZDliN2M0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljpgT5dmB94gzJqhPmV7I3RLERTn7x5y7YCSZzHQGaQ",
  },
  params: {
    language: "en-US",
  },
});

export const getTrendingFilms = async () => {
  const { data } = await tmdbApi.get("trending/movie/day");
  return data.results;
};

export const SearchMovies = async (query) => {
  const { data } = await tmdbApi.get("search/movie", {
    params: {
      query,
    },
  });
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await tmdbApi.get(`movie/${movieId}`);
  return data;
};

export const getMovieCredits = async (movieId) => {
  const { data } = await tmdbApi.get(`movie/${movieId}/credits`);
  return data;
};

export const getMovieReviews = async (movieID) => {
  const { data } = await tmdbApi.get(`movie/${movieID}/reviews`);
  return data;
};
