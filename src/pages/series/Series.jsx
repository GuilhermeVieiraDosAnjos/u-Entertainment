import { useEffect, useState } from "react"
// import MovieCard from "../../components/movie_card/MovieCard"
import SerieCard from "../../components/movie_card/SerieCard"



const Series = () => {
    const [ topSeries, setTopSeries] = useState([])

    useEffect(()=>{
        const getTopSeries = async () => {
            const topSeriesUrl = import.meta.env.VITE_API_TV
            const apiKey = import.meta.env.VITE_API_KEY
            const topRate = `${topSeriesUrl}top_rated?api_key=${apiKey}`

            try{
                const res = await fetch(topRate);
                if(!res.ok){
                    throw new Error('Failed to Fetch top series')
                } 
                const data = await res.json()
                setTopSeries(data.results)
            }catch(e){
                console.error('Error Fetching top series',e)
            }
        }

        getTopSeries()
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
