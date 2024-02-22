import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { FaRegPlayCircle } from "react-icons/fa";
import SerieCard from "../../components/movie_card/SerieCard";

const SeriesDetails = () => {
  const {id} = useParams()
    const [ serie, setSerie] = useState(null)

    useEffect(()=>{
        const getSerie = async () => {
            const seriesUrl = import.meta.env.VITE_API_TV;
            const apiKey = import.meta.env.VITE_API_KEY
            const url = `${seriesUrl}/${id}?api_key=${apiKey}`

            try{
                const res = await fetch(url);
                if(!res.ok) {
                    throw new Error("Failed to fetch Series details");
                }
                const data = await res.json()
                setSerie(data)
                console.log(data)
            }catch(e){
                console.error("Cannot fetch Series Details")
            }
        }

        getSerie()
    },[id])

return (
    <div className="items-start md:items-center md:flex md:justify-center md:my-5 ">
      {serie && (
        <>
          <SerieCard serie={serie} showLink={false} />
          <div className="flex flex-col items-center mr-10 md:bg-gray-200 p-10 rounded-lg shadow-md">
            <div className="my-3 flex flex-col items-center justify-center">
              <h3 className="flex items-center gap-2">
                <BsFillFileEarmarkTextFill /> Description
              </h3>
              <p className="m-2 text-justify">{serie.overview}</p>
            </div>
            <div className="my-3 flex flex-col items-center justify-center">
              <h3 className="flex items-center gap-2">
                <FaRegPlayCircle /> First Episode:
              </h3>
              <p>{serie.first_air_date}</p>
            </div>
            <div className="my-3 flex flex-col items-center justify-center">
              <h3 className="flex items-center gap-2">Genres:</h3>
              <p>{serie.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
            <div className="my-3 flex flex-col items-center justify-center">
              <h3 className="flex items-center gap-2">Languages:</h3>
              <p>{serie.languages.join(", ")}</p>
            </div>
            <div className="my-3 flex flex-col items-center justify-center">
              <h3 className="flex items-center gap-2">
                Production Companies:
              </h3>
              <p>
                {serie.production_companies.map(
                  (company) => company.name
                ).join(", ")}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SeriesDetails
