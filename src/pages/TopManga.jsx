import axios from "axios";
import { useState, useEffect } from "react";
import MangaList from "../components/MangaList";
const TopManga = () => {
  const [topManga, setTopManga] = useState([]);

  useEffect(() => {
    const fetchTopManga = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/top/manga");
        setTopManga(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTopManga();
  }, []);

  return (
    <div>
      <main className="flex gap-2 flex-wrap justify-center content-center bg-gradient-to-r from-slate-500 to-slate-800">
        {topManga.map((manga) => (
          <MangaList manga={manga} />
        ))}
      </main>
    </div>
  );
};

export default TopManga;
