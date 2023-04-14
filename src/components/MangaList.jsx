import React from "react";

const MangaList = ({ manga }) => {
  return (
    <div>
      <div
        key={manga.mal_id}
        className="flex flex-col justify-center items-center w-[300px] mx-auto shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48 rounded-md mt-3"
            src={manga.images?.jpg.image_url}
            alt={manga.title}
          />
        </div>
        <div className="p-4">
          <div className="text-xl font-bold text-gray-900">{manga.title}</div>
          <div className="text-sm text-gray-600">Rank: {manga.rank}</div>
          <div className="text-sm text-gray-600">Score: {manga.score}</div>
          <div className="text-sm text-gray-600">Status: {manga.status}</div>
          <div className="text-sm text-gray-600">
            Episodes: {manga.episodes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaList;
