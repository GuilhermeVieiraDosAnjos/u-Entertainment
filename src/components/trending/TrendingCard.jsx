import PropTypes from 'prop-types'

import { GiChart } from "react-icons/gi";
import { Link } from 'react-router-dom';

const imgUrl = import.meta.env.VITE_IMG

const TrendingCard = ({trending, showLink=true}) => {

  return (
    <div className="TrendCard max-w-full ss:flex ss:flex-col ss:items-center ">
        <img src={imgUrl + trending.poster_path} alt={trending.title} className='ss:h-90 md:h-[500px] bg-gray-200 rounded-md m-2 p-2' ></img>
        {/* <h2 className='text-center text-xl text-primaryBlue my-2'>{trending.title}</h2> */}
        {showLink && <Link className='flex justify-center my-2 text-xl text-primaryBlue'  to={`/movie/${trending.id}`}>{trending.title}</Link>}
        <p className='text-center text-xl text-primaryBlue my-1 flex justify-center items-center gap-3'><GiChart className='text-2xl'/>Nota: {trending.vote_average}/10</p>
    </div>
  )
}

TrendingCard.propTypes = {
    trending: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string,
        vote_average: PropTypes.number,
        showLink: PropTypes.string
    }).isRequired,
};

export default TrendingCard
