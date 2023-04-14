import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[300px] mx-auto shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:w-48 rounded-md mt-3"
          src={anime.images?.jpg.image_url}
          alt={anime.title}
        />
      </div>
      <div className="p-4">
        <div className="text-xl font-bold text-gray-900">{anime.title}</div>
        <div className="text-sm text-gray-600">Rank: {anime.rank}</div>
        <div className="text-sm text-gray-600">Score: {anime.score}</div>
        <div className="text-sm text-gray-600">Type: {anime.type}</div>
        <div className="text-sm text-gray-600">Episodes: {anime.episodes}</div>
      </div>
    </div>
  );
};

export default AnimeCard;
