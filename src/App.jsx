import { useState, useEffect } from "react";
import { fetchMoviesWithAxios } from "./actions/Movie.actions";
import NavBar from "./components/NavBar";
import Films from "./components/Films";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const apiResponse = await fetchMoviesWithAxios();
    if (apiResponse.success) {
      //See the result in the console from the browser
      console.log("Response In App.jsx");
      console.log(apiResponse.data);

      setMovies(apiResponse.data);
    } else {
      alert("Failed to fetch movies");
    }
  };

  //useEffect with empty array as second argument will run only once when the component is mounted
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="bg-neutral-900 w-full lg:max-w-screen overflow-y-hidden">
        <NavBar />
        <Films data={movies} />
      </div>
      <div className="h-10 w-full py-10 bg-neutral-900 flex justify-center items-center">
        <p className="text-white text-sm font-mono">
          &copy; Designed by Aulia A. Aziz | 2024
        </p>
      </div>
    </div>
  );
}

export default App;
