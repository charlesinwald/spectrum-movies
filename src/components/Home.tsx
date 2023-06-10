import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import Movie from "../types/movie";
import MovieList from "./MovieList";

const Home = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedGenre, setSelectedGenre] = useState<string>('All');

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

  useEffect(() => {
    filterMovies();
  }, [searchQuery, selectedGenre]);
  
  const filterMovies = () => {
    let filtered = movies;
  
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    if (selectedGenre !== 'All') {
      filtered = filtered.filter((movie) =>
        movie.genres.includes(selectedGenre)
      );
    }
  
    setFilteredMovies(filtered);
  };
  


return <main>
    <div className="container">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
        <MovieList movies={filteredMovies} />
    </div>
</main>;
}
export default Home;