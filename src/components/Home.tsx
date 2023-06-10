import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import Movie from "../types/movie";
import MovieList from "./MovieList";

const Home = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');


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
        setFilteredMovies(data.data);
      }
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
  };

  // Apply search filter to movies
  useEffect(() => {
    filterMoviesBySearch();
  }, [searchQuery]);

  const filterMoviesBySearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };    


return <main>
    <div className="container">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <MovieList movies={filteredMovies} />
    </div>
</main>;
}
export default Home;