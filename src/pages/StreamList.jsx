import { useState } from "react";

function StreamList() {
  const [movie, setMovie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(movie);

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
    </div>
  );
}

export default StreamList;
