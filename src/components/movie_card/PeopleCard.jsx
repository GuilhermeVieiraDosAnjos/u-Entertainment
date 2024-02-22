import { Link } from "react-router-dom";


const imgUrl = import.meta.env.VITE_IMG

const PeopleCard = ({people, showLink=true }) => {
  return (
    <div>
      <div className='flex flex-col justify-between md:w-96 mx-14 bg-gray-200 rounded-md m-2 p-2 '>
        {people.profile_path && (
                  <img src={imgUrl + people.profile_path} alt={people.title} />
              )}
        <h2 className="text-xl text-center text-primaryBlue my-2">{people.name}</h2>
        {showLink && <Link className='bg-primaryBlue m-3 p-2 text-white text-center rounded text-lg' to={`/people/${people.id}`}>Saiba Mais</Link>}
      </div>
    </div>
  )
}

export default PeopleCard
