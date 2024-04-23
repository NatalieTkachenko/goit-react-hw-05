// === Lib modules ===
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// === Styles ===
import styles from "./MovieCast.module.css";

// === Services ===
import { getMovieCredits } from "../../services/API";

export default function MovieCast() {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  console.log(movieId);

  useEffect(() => {
    if (!movieId) return;

    const asyncWrapper = async () => {
      {
        try {
          const credits = await getMovieCredits(movieId);
          console.log("СПИСОК КРЕДИТОВ:", credits);
          setCredits(credits);
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    asyncWrapper();
  }, [movieId]);

  return (
    <div>
      <ul>
        {credits &&
          credits.cast.map((credit) => (
            <li key={credit.id}>
              <div className={styles.imgcontainer}>
                <img 
                  className={styles.poster}
                  src={
                    credit.profile_path
                      ? `https://image.tmdb.org/t/p/w500${credit.profile_path}`
                      : defaultImg
                  }
                  alt="picture"
                ></img>
              </div>
              <p>{credit.name}</p>
              <p>Character:{credit.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
