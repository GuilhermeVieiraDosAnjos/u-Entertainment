import { useEffect, useState } from "react"
import MovieCard from "../../components/movie_card/MovieCard"

const topMoviesUrl = import.meta.env.VITE_API_MOVIE
const apiKey = import.meta.env.VITE_API_KEY

const Movies = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopMovies = async (url) => {
        try{
            const res = await fetch(url)
            const data = await res.json()
            setTopMovies(data.results)
        }catch(e){
            console.error('Error fetching top movies', e)
        }
    };

    useEffect(()=> {
        const topRate = `${topMoviesUrl}top_rated?api_key=${apiKey}`
        getTopMovies(topRate)
    }, []);

  return (
    <div className="">
        <h1 className="text-primaryBlue text-center text-2xl my-2">Melhores Filmes</h1>
        <div className="">
            <div className="md:flex flex-wrap">
                {topMovies.length>0 && topMovies.map((movie)=> (
                <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Movies
