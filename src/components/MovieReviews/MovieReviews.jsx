// === Lib modules ===
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// === Services ===
import { getMovieReviews } from "../../services/API";

// === Styles ===
import styles from "./MovieReviews.module.css";

export default function Moviereviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const asyncWrapper = async () => {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
        console.log(reviews);
      } catch (error) {
        console.log(error.message);
      }
    };
    asyncWrapper();
  }, [movieId]);

  return (
    <div className={styles.reviewscontainer}>
      {reviews && reviews.results.length > 0 ? (reviews.results.map((review) => (
        <li key={review.id}>
          <p className={styles.author}>Author:{review.author}</p>
          <p className={styles.content}>{review.content}</p>
        </li>))) : <p>No reviews</p>
        
        }
    </div>
  );
}
