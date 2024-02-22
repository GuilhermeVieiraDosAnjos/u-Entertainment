import PropTypes from 'prop-types'
import { GiChart } from "react-icons/gi";
import { Link } from 'react-router-dom';

const imgUrl = import.meta.env.VITE_IMG

const TrendingCard = ({trending, showLink=true}) => {
  const { id, poster_path, title, name, media_type, vote_average } = trending;

  const linkPath = media_type === 'movie' ? `/movie/${id}` : `/series/${id}`

  return (
    <div className=" w-full flex flex-col items-center justify-center ss:flex ss:flex-col ss:items-center ">
        <div className=''>
          <img
            src={imgUrl + poster_path}
            alt={title || name}
            className='ss:h-90 md:h-[500px] md:bg-gray-200 md:rounded-md md:m-2 md:p-2' >
          </img>
          {showLink && (
          <Link className='flex justify-center my-2 text-xl text-primaryBlue'  to={linkPath}>
            {trending.title || trending.name}
          </Link>)}
          <p className='text-center text-xl text-primaryBlue my-1 flex justify-center items-center gap-3'>
            <GiChart className='text-2xl'/>Nota: {vote_average}/10
          </p>
        </div>
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
