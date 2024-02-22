import {FaStar} from 'react-icons/fa'
import { Link } from "react-router-dom";


const imgUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink=true }) => {
  return (
      <div>
        <div className='flex flex-col justify-between md:w-96 mx-14 bg-gray-200 rounded-md m-2 p-2 '>
            <img className='mt-3' src={imgUrl + movie.poster_path} alt={movie.title}  />
            <div>
              <h2 className='text-xl text-center text-primaryBlue my-2'>{movie.title}</h2>
              <p className='flex items-center justify-center'>
                <FaStar className='text-yellow-500' /> {movie.vote_average}/10
              </p>
            </div>
            {showLink && <Link className='bg-primaryBlue m-3 p-2 text-white text-center rounded text-lg' to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
      </div>
  )
}

export default MovieCard
