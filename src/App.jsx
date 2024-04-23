// === Lib modules ===
import { NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// === Pages ===
// import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

// === Components ===

// === Styles
import styles from "./App.module.css";
import MovieCast from "./components/MovieCast/MovieCast";
import Moviereviews from "./components/MovieReviews/MovieReviews";

function App() {
  return (
    <>
      <header>
        <NavLink className={styles.menuItem} to="/">
          Home
        </NavLink>
        <NavLink className={styles.menuItem} to="/movies">
          Movies
        </NavLink>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<Moviereviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
