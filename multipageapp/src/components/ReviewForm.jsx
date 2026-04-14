import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/hooks";

function ReviewForm() {
  const [data] = useSearchParams();
  const { movie } = useMovieDetails(data.get("movieid"));
  const [name, setName] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");
  {
    movie && console.log(movie.Title);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !movieTitle || !rating || !review) {
      setMessage("Please fill out all fields.");
      return;
    }

    setMessage(`Review submitted for ${movieTitle}`);

    setName("");
    setMovieTitle("");
    setRating("");
    setReview("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </div>

      <div>
        <label>Movie Title</label>
        <input
          value={movieTitle}
          onChange={(event) => setMovieTitle(event.target.value)}
        />
      </div>

      <div>
        <label>Rating</label>
        <input
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </div>

      <div>
        <label>Review</label>
        <textarea
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </div>

      <button type="submit">Submit Review</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default ReviewForm;
