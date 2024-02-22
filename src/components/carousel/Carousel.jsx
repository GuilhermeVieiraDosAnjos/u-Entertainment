import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TrendingCard from '../trending/TrendingCard';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef, useState, useEffect } from 'react';

const TrendingCarousel = ({ trending }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(window.innerWidth < 1060 ? 1 : 3);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    afterChange: current => setCurrentSlide(current)
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newSlidesToShow = screenWidth < 1060 ? 1 : 3;
      setSlidesToShow(newSlidesToShow); // Update slidesToShow based on screen width
    };

    window.addEventListener('resize', handleResize);
    handleResize()

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative">
      <div>
        <Slider {...settings} ref={sliderRef}>
          {trending.map((trendings) => (
            <TrendingCard key={trendings.id} trending={trendings} />
          ))}
        </Slider>
      </div>
      <div className={`md:absolute md:top-1/2 md:transform md:-translate-y-1/2 left-0 ${slidesToShow === 1 ? 'hidden' : ''}`}>
        <button onClick={goToPrevious} disabled={currentSlide === 0} className='bg-gray-800 rounded-full p-2 text-white ml-10'>
          <IoIosArrowBack />
        </button>
      </div>
      <div className={`md:absolute md:top-1/2 md:transform md:-translate-y-1/2 right-0 ${slidesToShow === 1 ? 'hidden' : ''}`}>
        <button onClick={goToNext} disabled={currentSlide === trending.length - 1} className='bg-gray-800 rounded-full p-2 text-white mr-10 '>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

TrendingCarousel.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TrendingCarousel;