// === Lib modules ===

// === Components ===
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";

// === Services ===
import { getTrendingFilms } from "../../services/API";

// === Styles ===
import styles from "./HomePage.module.css";
export default function HomePage() {
  const [filmsToShow, setFilmsToShow] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const trendingFilms = await getTrendingFilms();
        console.log(trendingFilms);
        setFilmsToShow(trendingFilms);
      } catch (error) {
        console.log(error.message);
      }
    };
    asyncWrapper();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending today</h1>
      <MovieList movies={filmsToShow} />
    </div>
  );
}
