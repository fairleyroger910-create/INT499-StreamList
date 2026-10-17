import { Link } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <FaFilm size={25} color="#e50914" />
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
