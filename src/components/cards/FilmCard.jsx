import { useNavigate } from "react-router-dom";

export default function FilmCard({ id, body, image, title }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      className="max-w-64 h-fit max-h-[380px] p-5 flex flex-col rounded-lg bg-neutral-700 drop-shadow-lg hover:scale-105 transition-transform ease-in-out"
    >
      <img className="object-cover h-[150px] w-full" src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
      <h2 className="text-blue-600 font-semibold font-mono text-md overflow-ellipsis whitespace-nowrap overflow-hidden my-5">
        {title}
      </h2>
      <p className="h-14 font-poppins text-neutral-300 text-sm line-clamp-3 text-ellipsis overflow-hidden">
        {body ? body : "No description available."}
      </p>
    </div>
  );
}
