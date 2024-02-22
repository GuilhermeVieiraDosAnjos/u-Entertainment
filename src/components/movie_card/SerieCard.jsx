import {FaStar} from 'react-icons/fa'
import { Link } from "react-router-dom";


const imgUrl = import.meta.env.VITE_IMG

const SerieCard = ({serie, showLink=true }) => {
  return (
    <div>
      <div className='flex flex-col justify-between md:w-96 mx-14 bg-gray-200 rounded-md m-2 p-2 '>
        <img src={imgUrl + serie.poster_path} alt={serie.name} className='mt-3' />
        <h2 className='text-xl text-center text-primaryBlue my-2'>{serie.name}</h2>
        <p className='flex items-center justify-center'>
          <FaStar className='text-yellow-500' /> {serie.vote_average}/10
        </p>
        {showLink && <Link className='bg-primaryBlue m-3 p-2 text-white text-center rounded text-lg' to={`/series/${serie.id}`}>Detalhes</Link>}
      </div>
    </div>
  )
}

export default SerieCard
