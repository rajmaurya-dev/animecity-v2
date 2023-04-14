import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-around h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold">
              Sasta Otaku
            </Link>
          </div>
          <div className="">
            <div className="ml-10 flex items-baseline space-x-3">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>

              <Link
                to="/top-anime"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Anime
              </Link>

              <Link
                to="/top-manga"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Manga
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
