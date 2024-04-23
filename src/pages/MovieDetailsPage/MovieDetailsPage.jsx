// === Lib modules ===
import { NavLink, Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

//=== Components ===
import { FaArrowLeft } from "react-icons/fa";

// === Services ===
import { getMovieDetails } from "../../services/API";

// === Styles ===
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  console.log(useParams());

  const location = useLocation();
  console.log(location);
  const backLink = useRef(location.state?.from ?? "/");

  useEffect(() => {
    if (!movieId) return;

    const asyncWrapper = async () => {
      {
        try {
          const movie = await getMovieDetails(movieId);
          console.log(movie);
          setMovie(movie);
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    asyncWrapper();
  }, [movieId]);

  return (
    <>
      <nav>
        <NavLink className={styles.goback} to={backLink.current}>
          <FaArrowLeft className={styles.icon} />
          Go back
        </NavLink>
      </nav>
      <div>
        {movie && (
          <>
            <div className={styles.container}>
              <div className={styles.posterconatiner}>
                <img
                  className={styles.poster}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : defaultImg
                  }
                  alt="poster"
                ></img>
              </div>
              <div>
                <h1>{movie.title} </h1>
                <p>User score: {movie.vote_average}</p>
                <h2>Overview: </h2>
                <p className={styles.overview}>{movie.overview} </p>
                <h3>Genres: </h3>
                <div className={styles.genres.container}>
                  {movie.genres &&
                    movie.genres.map((genre) => {
                      return (
                        <p className={styles.genres} key={genre.id}>
                          {genre.name}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className={styles.infocontainer}>
              <p>Additional information</p>
              <nav>
                <ul>
                  <li>
                    <NavLink className={styles.detailslink} to="cast">
                      Cast
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={styles.detailslink} to="reviews">
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
