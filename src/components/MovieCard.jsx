
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-64 object-cover"
        src={"https://plus.unsplash.com/premium_vector-1731643892854-b7f5613c474a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxXWTQ5RUVWbHlqUXx8ZW58MHx8fHx8"}
        alt={movie.movie}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.movie}</div>
        <p className="text-gray-700 text-base">Rating: {movie.rating}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={movie.imdb_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
