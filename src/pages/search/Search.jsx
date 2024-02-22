import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../../components/movie_card/MovieCard"
import SerieCard  from "../../components/movie_card/SerieCard"
import PeopleCard  from "../../components/movie_card/PeopleCard"

const urlMulti = import.meta.env.VITE_MULTI
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
    const [searchParams] = useSearchParams()
    const [results, setAll] = useState([])
    const query = searchParams.get("q")    

    const getsetAll = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()

        setAll(data.results)
        console.log(data)
    }

    useEffect(()=>{
        const allUrl = `${urlMulti}?include_adult=false&api_key=${apiKey}&query=${query}`

        getsetAll(allUrl)
    }, [query])

    console.log(results, 'oi')
    
  return (
    <div >
        <h2 className="text-4xl text-center my-4 text-primaryBlue">Resultados para : <span>{query}</span></h2>
        <div className="md:flex flex-wrap">
           { results.length>0 &&  results.map((result) => {
            if(result.media_type === 'movie'){
                return <MovieCard key={result.id} movie={result} />
            } else if(result.media_type === 'tv'){
                return <SerieCard key={result.id} serie={result} />
            } else if(result.media_type === 'person'){
                return <PeopleCard key={result.id} people={result} />
            }
            return null
           })}
        </div>
    </div>
  )
}

export default Search
