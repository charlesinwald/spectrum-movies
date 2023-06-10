type MovieDetail = {
    description: string,
    duration: number,
    genres: string[],
    id: string,
    releaseDate: string,
    releaseYear: number,
    title: string
    topCast: {name: string, characterName: string}[]
};

export default MovieDetail;