export default function ImageCard({ image, title }) {
  return (
    <img
              className="object-cover h-[350px] w-full rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${image}`}
              alt={title}
            />
  )
}
