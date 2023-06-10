import React from "react";
import Movie from "../types/movie";

const MovieList = (props: {movies: Movie[]}) => <div>
            <ul>
            {props.movies.map((movie) => (
                <li key={movie.id}>
                    <h2>{movie.title}</h2>
                    {movie.genres.map((genre) => (
                        <span key={genre}>{genre}{' '}</span>
                    ))}
                </li>
            ))}
        </ul>
</div>

export default MovieList;