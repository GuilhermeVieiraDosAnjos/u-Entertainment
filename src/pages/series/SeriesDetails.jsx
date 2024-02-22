import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { FaRegPlayCircle } from "react-icons/fa";

import {} from 'react-icons'
// import MovieCard from "../../components/movie_card/MovieCard";

import SerieCard from "../../components/movie_card/SerieCard";


const seriesUrl = import.meta.env.VITE_API_TV;
const apiKey = import.meta.env.VITE_API_KEY

const SeriesDetails = () => {
  const {id} = useParams()
    const [ serie, setSerie] = useState(null)

    const getSerie = async(url) =>{
        try{
            const res = await fetch(url)
            if(!res.ok){
                throw new Error('Could not find the data')
            }
            const data = await res.json()
            console.log(data)
            setSerie(data);
        }catch(e){
            console.error('Cannot get a Serie', e)
        }
    }

    useEffect(()=>{
        const url = `${seriesUrl}/${id}?api_key=${apiKey}`

        getSerie(url)
    }, [id])

  return (
    <div className="flex justify-center items-start md:items-center">
      {serie && (<>
        <SerieCard serie={serie} showLink={false} />
        <div className="flex flex-col items-center mr-10">
            <div className="my-3 flex flex-col items-center justify-center">
                <h3 className="flex items-center gap-2">
                <BsFillFileEarmarkTextFill />Description
                </h3>
                <p className="m-2 text-justify">
                    {serie.overview}
                </p>
            </div>
            <div className="my-3 flex flex-col items-center justify-center">
                <h3 className="flex items-center gap-2">
                <FaRegPlayCircle />First Episode:
                </h3>
                <p >
                {serie.first_air_date}
                </p>
            </div>
        </div>
        </>)}
    </div>
  )
}

export default SeriesDetails
