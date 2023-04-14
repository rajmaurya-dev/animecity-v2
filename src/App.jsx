import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopAnime from "./pages/TopAnime";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import AnimeDetail from "./pages/AnimeDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TopManga from "./pages/TopManga";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-anime" element={<TopAnime />} />
        <Route path="/top-manga" element={<TopManga />} />
        <Route path="/detail/:id" element={<AnimeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
