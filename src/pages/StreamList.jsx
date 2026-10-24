import { useState } from "react";

function StreamList() {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = movie.trim();
    if (!title) return;

    setMovies((currentMovies) => [...currentMovies, title]);
    setMovie("");
  };

  return (
    <div className="container">
      <h1>StreamList</h1>
      <p>Create your personal streaming watch list.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a movie title"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />

        <button type="submit">Add Movie</button>
      </form>

      <h2>My Movie List</h2>
      <ul>
        {movies.map((title, index) => (
          <li key={`${title}-${index}`}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
