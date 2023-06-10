import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../types/movieDetail';
import './MovieDetailPage.css';

const formatDuration = (durationInSeconds: number) => {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);

  const formattedHours = hours > 0 ? `${hours}h ` : '';
  const formattedMinutes = minutes > 0 ? `${minutes}m ` : '';

  return formattedHours + formattedMinutes;
};

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://code-challenge.spectrumtoolbox.com/api/movies/${id}`, {
          headers: {
            Authorization: 'Api-Key q3MNxtfep8Gt',
          },
        });
        const data = await response.json();
        setMovie(data.data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleImageError = (event: any) => {
    event.target.src = `${process.env.PUBLIC_URL}/heroes/defaultImage.jpeg`;
  };

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  const { title, genres, releaseYear, description, duration } = movie;

  return (
    <div className="movie-detail-page">
      <img
        src={`${process.env.PUBLIC_URL}/heroes/${movie.id}.jpeg`}
        alt={movie.title}
        onError={handleImageError}
      />
      <h2>{title}</h2>
      <div className="genres">
        <strong>Genres: </strong>
        {genres.join(', ')}
      </div>
      <div className="release-year">
        <strong>Release Year: </strong>
        {releaseYear}
      </div>
      <div className="description">
        <strong>Description: </strong>
        {description}
      </div>
      <div className="duration">
        <strong>Duration: </strong>
        {formatDuration(duration)}
      </div>
    </div>
  );
};

export default MovieDetailPage;
