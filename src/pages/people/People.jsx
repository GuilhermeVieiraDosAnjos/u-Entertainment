import { useEffect, useState } from "react"
import PeopleCard from "../../components/movie_card/PeopleCard"

const topPeopleUrl = import.meta.env.VITE_PEOPLE
const apiKey = import.meta.env.VITE_API_KEY

const People = () => {
    const [ topPeople, setTopPeople] = useState([])

    const getTopPeople = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)
        setTopPeople(data.results)
    }

    useEffect(()=> {
        const topRate = `${topPeopleUrl}popular?api_key=${apiKey}`

        getTopPeople(topRate)
    }, [])

  return (
    <div>
        <h1 className="text-primaryBlue text-center text-2xl my-2">Melhores Pessoas</h1>
        <div className="md:flex flex-wrap">
            {topPeople.length>0 && topPeople.map((people)=> (<PeopleCard key={people.id} people={people} />))}
        </div>
    </div>
  )
}

export default People
