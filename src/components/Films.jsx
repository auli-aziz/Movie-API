import FilmCard from "./cards/FilmCard";

export default function Films({ data }) {
  return (
    <div
      className="w-full h-fit py-10 flex flex-col items-center scroll-mt-[280px] sm:scroll-mt-28"
      id="films"
    >
      <p className="underline font-extrabold text-2xl font-mono mb-10 mt-24 text-neutral-300">
        Movies to Watch
      </p>

      {data !== undefined ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {data.map((film) => (
            <FilmCard
              key={film.id}
              id={film.id}
              body={film.overview}
              image={film.poster_path}
              title={film.title}
            />
          ))}
        </div>
      ) : (
        <div>
          <p className="font-mono">No Movies Found :(</p>
        </div>
      )}
    </div>
  );
}
