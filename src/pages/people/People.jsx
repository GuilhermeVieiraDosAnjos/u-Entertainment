import { useEffect, useState } from "react"
import PeopleCard from "../../components/movie_card/PeopleCard"

const topPeopleUrl = import.meta.env.VITE_PEOPLE
const apiKey = import.meta.env.VITE_API_KEY

const People = () => {
    const [ topPeople, setTopPeople] = useState([])

    useEffect(() => {
        const fetchTopPeople = async () => {
          try {
            const response = await fetch(`${topPeopleUrl}/popular?api_key=${apiKey}`);
            if (!response.ok) {
              throw new Error("Failed to fetch top people");
            }
            const data = await response.json();
            setTopPeople(data.results);
          } catch (error) {
            console.error("Error fetching top people:", error);
          }
        };
    
        fetchTopPeople();
      }, []);

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
