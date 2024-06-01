export default function MainDetailCard({ details }) {
  return (
    <div className="w-full h-fit p-5 lg:col-span-2 col-span-3 rounded-lg bg-neutral-700">
            <div>
              <div className="flex flex-row justify-center w-full h-fit">
                <div className="w-full flex flex-col items-center p-3 text-center">
                  <div className="sm:text-5xl text-2xl text-neutral-400">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <div className="text-xs md:text-md text-neutral-100">
                    <p>Views</p>
                    <p>{details.vote_count}</p>
                  </div>
                </div>
                <div className="w-full flex flex-col items-center p-3 text-center">
                  <div className="sm:text-5xl text-2xl text-white">
                    <ion-icon name="people-outline"></ion-icon>
                  </div>
                  <div className="text-xs md:text-md text-neutral-100">
                    <p>Vote Count</p>
                    <p>{details.popularity}</p>
                  </div>
                </div>
                <div className="w-full flex flex-col items-center p-3 text-center">
                  <div className="sm:text-5xl text-2xl text-yellow-500">
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
                  <div className="text-xs md:text-md text-neutral-100">
                    <p>Rating</p>
                    <p>{details.vote_average} / 10</p>
                  </div>
                </div>
              </div>
              <table className="w-full mt-5 h-fit font-montserrat text-sm  sm:text-md lg:text-lg">
                <tr>
                  <td className="w-[150px] text-blue-300">Status</td>
                  <td
                    className={
                      details.status === "Released"
                        ? `text-green-300`
                        : "text-red-500"
                    }
                  >
                    {details.status}
                  </td>
                </tr>
                <tr>
                  <td className="w-[150px] text-blue-300">Origin</td>
                  <td className="text-neutral-200">{details.origin_country}</td>
                </tr>
                <tr>
                  <td className="w-[150px] text-blue-300">Language</td>
                  <td className="text-neutral-200">
                    {details.original_language}
                  </td>
                </tr>
                <tr>
                  <td className="w-[150px] text-blue-300">Runtime</td>
                  <td className="text-neutral-200">
                    {details.runtime} minutes
                  </td>
                </tr>
                <tr>
                  <td className="w-[150px] text-blue-300">Release date</td>
                  <td className="text-neutral-200">{details.release_date}</td>
                </tr>
                <tr>
                  <td className="w-[150px] text-blue-300">Budget</td>
                  <td className="text-neutral-200">{details.budget}</td>
                </tr>
                <tr>
                  <td className="w-[150px] text-blue-300">Revenue</td>
                  <td className="text-neutral-200">{details.revenue}</td>
                </tr>
                <tr>
                  <td className="w-[150px] text-blue-300">Genres</td>
                  <td className="text-neutral-200">
                    {details.genres?.map((g, index) => (
                      <span key={g.id}>
                        {g.name}
                        {index < details.genres.length - 1 && ", "}
                      </span>
                    ))}
                  </td>
                </tr>
              </table>
            </div>
          </div>
  )
}
