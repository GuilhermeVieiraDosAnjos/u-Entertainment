import { useEffect, useState } from "react"
// import MovieCard from "../../components/movie_card/MovieCard"
import SerieCard from "../../components/movie_card/SerieCard"

const topSeriesUrl = import.meta.env.VITE_API_TV
const apiKey = import.meta.env.VITE_API_KEY

const Series = () => {
    const [ topSeries, setTopSeries] = useState([])

    const getTopSeries = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)
        setTopSeries(data.results)
    }

    useEffect(()=> {
        const topRate = `${topSeriesUrl}top_rated?api_key=${apiKey}`

        getTopSeries(topRate)
    }, [])

  return (
    <div>
        <h1 className="text-primaryBlue text-center text-2xl my-2">Melhores Series</h1>
        <div className="md:flex flex-wrap">
            {topSeries.length>0 && topSeries.map((serie)=> (<SerieCard key={serie.id} serie={serie} />))}
        </div>
    </div>
  )
}

export default Series
