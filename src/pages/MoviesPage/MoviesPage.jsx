// === Lib modules ===
import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

// === Components ===
import MovieList from "../../components/MovieList/MovieList";

// === Services ===
import { SearchMovies } from "../../services/API";

// === Styles ===
import styles from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesToShow, setMoviesToShow] = useState([]);
  const query = searchParams.get("query");
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!query) return;
    console.log(query);

    const asyncWrapper = async (query) => {
      try {
        const movies = await SearchMovies(query);
        setMoviesToShow(movies);
        console.log(movies);
      } catch (error) {
        console.log(error.message);
      }
    };

    asyncWrapper(query);
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ query: searchTerm });
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search movies"
          name="filmQuery"
          onChange={handleChange}
        />

        <button className={styles.searchButton} type="submit">
          <IoSearch className={styles.icon} />
        </button>
      </form>
      {moviesToShow && <MovieList movies={moviesToShow} />}
    </>
  );
}
