import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "../components/AnimeCard";
import { Link } from "react-router-dom";
const Home = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const getData = async (title) => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${title}&limit=20`
    );
    const resData = await res.json();
    setResult(resData.data);
  };
  useEffect(() => {
    getData("");
  }, [query]);
  return (
    <>
      <div className=" flex justify-center p-3 bg-gradient-to-r from-slate-500 to-slate-800">
        <input
          className="border shadow-xl border-blue-700 rounded-md text-center"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() => getData(query)}
          className="bg-slate-500 text-fuchsia-200 py-1 ml-3 px-4 rounded-md"
        >
          Search
        </button>
      </div>
      <main className="flex gap-2 flex-wrap justify-center content-center bg-gradient-to-r from-slate-500 to-slate-800">
        {result?.length > 0 ? (
          result.map((anime) => (
            <Link // Use Link component to create a link to the detail page using the anime ID as a parameter
              key={anime.mal_id}
              to={`/detail/${anime.mal_id}`}
              className="flex flex-col md:flex-row max-w-md mx-auto shadow-lg rounded-lg overflow-hidden"
            >
              <AnimeCard anime={anime} />
            </Link>
          ))
        ) : (
          <div className="empty">
            <h2 className="text-red-800 bg-red-400 font-semibold p-5 text-center">
              Not found
            </h2>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
