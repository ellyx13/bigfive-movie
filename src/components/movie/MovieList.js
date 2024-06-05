import React from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
    // Fake data for illustration
    const movies = [
        { id: 1, title: 'Movie 1', description: 'This is Movie 1' },
        { id: 2, title: 'Movie 2', description: 'This is Movie 2' },
    ];

    return (
        <div>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;
