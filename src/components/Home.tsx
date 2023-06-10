import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import Movie from "../types/movie";

const Home = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    // Fetch movies data from the API
    useEffect(() => {
        fetchMovies();
    }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://code-challenge.spectrumtoolbox.com/api/movies', {
        headers: {
          Authorization: 'Api-Key q3MNxtfep8Gt',
        },
      });
      const data = await response.json();
      if (data.message === "Success") {
        setMovies(data.data);
      }
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
  };


return <main>
    <div className="container">
        <SearchBar />
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <h2>{movie.title}</h2>
                    {movie.genres.map((genre) => (
                        <span key={genre}>{genre}</span>
                    ))}
                </li>
            ))}
        </ul>
    </div>
</main>;
}
export default Home;