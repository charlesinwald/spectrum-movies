import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../types/movieDetail';

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

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  const { title, genres, releaseYear, description, duration } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <div>
          <strong>Genres: </strong>
              {genres.join(', ')}
      </div>
      </div>
      <div>
        <strong>Release Year: </strong>
        {releaseYear}
      </div>
      <div>
        <strong>Description: </strong>
        {description}
      </div>
      <div>
        <strong>Duration: </strong>
        {formatDuration(duration)}
        </div>
    </div>
  );
};

export default MovieDetailPage;
