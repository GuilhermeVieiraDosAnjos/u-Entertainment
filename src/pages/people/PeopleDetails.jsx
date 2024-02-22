import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PeopleCard from "../../components/movie_card/PeopleCard"
// import MovieCard from '../../components/movie_card/MovieCard.jsx';

const peoplesUrl = import.meta.env.VITE_PEOPLE
const apiKey = import.meta.env.VITE_API_KEY

const PeopleDetails = () => {
  const {id} = useParams()
  const [people , setPeople ] = useState(null)

  const getPeople = async (url) => {
    const res = await fetch(url)
    const data = await  res.json()

    setPeople(data);
    console.log(data)
  }

  const formatarData = (data) => {
    const dataObj = new Date(data);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return dataObj.toLocaleDateString('pt-BR', options);
  }

  const death = (date) => {
    if(date == null) {
      return "Person is still alive.";
    }else{
      return formatarData(date);
    }
  }

  useEffect(() => {
    const url = `${peoplesUrl}/${id}?api_key=${apiKey}`;

    getPeople(url)
  }, [id]) 

  return (
    <div className="flex justify-center items-start  m-10">
      {people && (<>
        <PeopleCard people={people} showLink={false} />
        <div>
          <h3 className="ml-2 text-2xl text-primaryBlue my-2 text-center">Details:</h3>

          <div className="md:flex md:flex-col">

            <div className="m-2">
              <h3 className="text-center text-lg">Biography</h3>
              <p className="text-justify">{people.biography}</p>
            </div>

            <div className="m-2">
              <h3 className="text-center text-lg" >Birthday</h3>
              <p>-{formatarData(people.birthday)}</p>
            </div>

            <div className="m-2">
              <h3 className="text-center text-lg">DeathDay</h3>
              <p>-{death(people.deathday)}</p>
            </div>

            <div className="m-2">
              <h3 className="text-center text-lg">Place of birth</h3>
              <p>-{people.place_of_birth}</p>
            </div>

          </div>
          
        </div>
      </>)}
    </div>
  )
}

export default PeopleDetails
