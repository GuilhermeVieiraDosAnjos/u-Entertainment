import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsChatDotsFill,
} from "react-icons/bs";
import MovieCard from "../../components/movie_card/MovieCard";

const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data);
    } catch (e) {
      console.error("Error Fecthing movie details", e);
    }
  };

  useEffect(() => {
    const movieUrl = import.meta.env.VITE_API_MOVIE;
    const apiKey = import.meta.env.VITE_API_KEY;
    const moviesUrl = `${movieUrl}/${id}?api_key=${apiKey}`;

    getMovies(moviesUrl);
  }, []);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="items-start md:items-center md:flex md:justify-center md:my-5">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />

          <div className="flex flex-col items-start mr-10 md:bg-gray-200 p-10 rounded-lg shadow-md">
            <p className="my-3 text-justify flex items-center gap-2 ">
              <BsChatDotsFill />
              {movie.tagline}
            </p>
            
            <div className="my-3 flex items-center justify-center">
              <h3 className="flex items-center gap-2">
                <BsWallet2 /> Budget:
              </h3>
              <p className="ml-1">{formatCurrency(movie.budget)}</p>
            </div>

            <div className="my-3 flex items-center justify-center">
              <h3 className="flex items-center gap-2">
                <BsGraphUp /> Revenue:
              </h3>
              <p className="ml-1">{formatCurrency(movie.revenue)}</p>
            </div>

            <div className="my-3 flex justify-center">
              <h3 className="flex items-center gap-2">
                <BsHourglassSplit /> Duration:
              </h3>
              <p className="ml-1">{movie.runtime} minuts</p>
            </div>

            <div className="flex flex-col  items-center justify-center">
              <h3 className="flex items-center gap-2">
                <BsFillFileEarmarkTextFill /> Description:
              </h3>
              <p className="flex text-justify m-2">{movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesDetails;
