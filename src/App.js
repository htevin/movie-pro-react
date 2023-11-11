import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

const API_URL = `http://www.omdbapi.com/?apikey=be01dbcd`;

function App() {
  const movie1 = {
    Title: "Superman, Spiderman or Batman",
    Year: "2011",
    imdbID: "tt2084949",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
  };

  const searchMovies = async (title) => {
    const { data } = await axios.get(`${API_URL}&s=${title}`);


    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Search For Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
        </div>

        <div className="container">
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div>
              <h2>No Movies Found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
