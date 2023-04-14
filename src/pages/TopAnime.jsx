import axios from "axios";
import React, { useState, useEffect } from "react";
import AnimeCard from "../components/AnimeCard";
import Grid from "@mui/material/Grid";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
const TopAnime = () => {
  // Define a state variable to store the anime data
  const [anime, setAnime] = useState([]);

  // Define a function that fetches the data from Jikan API v4
  const fetchData = async () => {
    // Use axios to make a GET request to the top anime endpoint
    const response = await axios.get("https://api.jikan.moe/v4/top/anime");
    // Extract the data array from the response
    const data = response.data.data;
    // Update the state variable with the data
    setAnime(data);
  };

  // Use useEffect hook to call the fetchData function once when the component mounts
  useEffect(() => {
    fetchData();
  }, []);
  console.log(anime);
  // Return some JSX that renders the anime data as a list
  return (
    <>
      <h1 className="bg-gradient-to-r from-slate-500 to-slate-800 text-center font-bold py-2">
        Top Anime
      </h1>
      <main className="flex gap-2 flex-wrap justify-center content-center bg-gradient-to-r from-slate-500 to-slate-800">
        {anime.map((anime) => (
          <Link // Use Link component to create a link to the detail page using the anime ID as a parameter
            key={anime.mal_id}
            to={`/detail/${anime.mal_id}`}
            className="flex flex-col md:flex-row max-w-md mx-auto shadow-lg rounded-lg overflow-hidden"
          >
            <AnimeCard anime={anime} />
          </Link>
        ))}
      </main>
    </>
  );
};

export default TopAnime;
