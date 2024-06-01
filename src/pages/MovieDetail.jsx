import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../actions/Movie.actions";
import NavBar from "../components/NavBar";
import MainDetailCard from "../components/cards/MainDetailCard";
import ImageCard from "../components/cards/ImageCard";

const MovieDetail = () => {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();

  const fetchDetails = async () => {
    const apiResponse = await getMovieDetails(movieId);
    if (apiResponse.success) {
      //See the result in the console from the browser
      console.log("Response In MovieDetail.jsx");
      console.log(apiResponse.data);

      setDetails(apiResponse.data);
    } else {
      alert("Failed to fetch movies");
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="w-full h-fit bg-neutral-900">
      <NavBar isMovieDetails={true} />
      <ImageCard image={details.poster_path} title={details.title}/>
      <div className="w-full h-fit md:px-32 px-14 pb-10 flex flex-col items-center">
        <div className="mx-56">
          <a href={details.homepage}>
            <h2 className="text-amber-600 font-bold font-montserrat text-xl line-clamp-2 md:text-2xl lg:text-4xl text-md overflow-ellipsis whitespace-nowrap overflow-hidden my-5">
              {details.title}
            </h2>
          </a>
        </div>
        <div className="w-full h-fit grid lg:grid-cols-3 grid-cols-1  sm:gap-5 gap-1">
          <MainDetailCard details={details}/>
          <div className="w-full h-fit lg:col-span-1 col-span-3 rounded-lg bg-blue-500">
            <ImageCard image={details.backdrop_path} title={details.title}/>
          </div>
          <div className="w-full h-fit p-10 col-span-3 rounded-lg bg-neutral-700 text-center">
            <p className="font-poppins text-neutral-300">{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
