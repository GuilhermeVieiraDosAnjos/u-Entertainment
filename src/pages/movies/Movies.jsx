import { useEffect, useState } from "react"
import MovieCard from "../../components/movie_card/MovieCard"

const topMoviesUrl = import.meta.env.VITE_API_MOVIE
const apiKey = import.meta.env.VITE_API_KEY

const Movies = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)
        setTopMovies(data.results)
    }

    useEffect(()=> {
        const topRate = `${topMoviesUrl}top_rated?api_key=${apiKey}`

        getTopMovies(topRate)
    }, [])

    //Parei no padding pra fazer o trem da movie container 
  return (
    <div className="">
        <h1 className="text-primaryBlue text-center text-2xl my-2">Melhores Filmes</h1>
        <div className="">
        {/* <div className="md:grid grid-cols-3 gap-4 justify-items-center "> */}
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
