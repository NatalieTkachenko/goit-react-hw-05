// === Lib modules ===
import { GiFilmProjector } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";

// === Styles ===
import styles from "./MovieList.module.css";
export default function MovieList({ movies }) {
  const location = useLocation();
  console.log(location);

  return (
    <ul className={styles.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <NavLink
              state={{ from: location }}
              to={`/movies/${movie.id}`}
              className={styles.item}
            >
              {" "}
              <GiFilmProjector className={styles.reactIcon} /> {movie.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
