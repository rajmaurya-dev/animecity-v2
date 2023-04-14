import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function AnimeDetail() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => setAnime(response.data.data))
      .catch((error) => console.error(error));
  }, [id]);
  console.log(anime);
  if (!anime) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800">
      <div className="flex flex-col md:flex-row justify-center gap-3">
        <h1 className="text-center text-3xl font-medium text-black">
          {anime.title}
        </h1>
        <h1 className="text-center text-3xl font-medium text-black">
          {anime.title_synonyms}
        </h1>
      </div>
      <hr />

      <div className="flex flex-col md:flex-row justify-center items-center">
        <img
          className=" w-60 md:w-[240px] rounded-md ml-5 mt-5"
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
        />
        <div className="md:w-[50vw] flex flex-col">
          <p className="font-medium text-black">{anime.synopsis}</p>
          <div className="details flex gap-1 font-bold text-gray-950 capitalize md:ml-9">
            <h1 className="text-pink-700">Type: {anime.type}| </h1>
            <h1 className="text-blue-800">Source: {anime.source}| </h1>
            <h1 className="text-green-600">Episodes: {anime.episodes}| </h1>
            <h1 className="text-red-600 ml-1">Status: {anime.status}</h1>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-semibold ml-28 text-black">
          Genre: {anime.genres[0].name},{anime.genres[1]?.name}
        </h2>
      </div>
      <main className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col gap-1 md:w-80 mx-2 my-2 p-4 font-semibold text-blue-600 bg-blue-200 border shadow-xl rounded">
          <div className="border shadow-xl rounded-md p-3">
            <h1>Score: {anime.score}</h1>
            <h1>By:{anime.scored_by}</h1>
          </div>
          <h1>{anime.duration}</h1>
          <h1>Rating: {anime.rating}</h1>
          <h1>Members: {anime.members}</h1>
          <h1>{anime.favorites}</h1>
          <h1>Year: {anime.year}</h1>
          <h1>Season: {anime.season}</h1>
        </div>
        <div className="trailer">
          <ReactPlayer
            className="react-player "
            url={anime.trailer.url}
            controls="true"
            width="100%"
            height="100%"
          />
        </div>
      </main>
    </div>
  );
}

export default AnimeDetail;
