import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import TrendingCarousel from "../../components/carousel/Carousel";



const Home = () => {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`search?q=${search}`);
    setSearch("");
  };

  useEffect(()=>{
    const fetchToTrending = async () =>{
      const trendingURL = import.meta.env.VITE_TRENDING;

      const apiKey = import.meta.env.VITE_API_KEY;
      const trendUrl = `${trendingURL}/all/day?language=en-US&api_key=${apiKey}`;
    try{
      const res = await fetch(trendUrl);
      if(!res.ok) {
        throw new Error('Failed To fetch Tendencies')
      }
      const data = await res.json()
      setTrending(data.results)
    }catch(e){
      console.error('error')
    }
  } 

  fetchToTrending()
  }, [])


  return (
    <div className="">
      <section className="first-container flex ss:justify-center">
        <div className="flex flex-col mx-2 mt-4 ">
          <h1 className="text-4xl text-white my-4 md:text-8xl">Bem-Vindo(a)</h1>
          <p className="text-xl my-4 text-white md:text-4xl  ">
            Milhões de Filmes, Séries para descobrir
          </p>
          <div className="flex my-4 items-center text-xl border-2 border-white rounded-2xl bg-white ">
            <form className="flex p-2" onSubmit={handleSubmit}>
              <input
                type="text" className="flex-grow pl-2"
                placeholder="Pesquisa..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <button className="ml-14 md:ml-96"><IoIosSearch className="text-primaryBlue"/></button>
            </form>
          </div>
        </div>
      </section>

      <section className="second-container flex ">
        <div className=" flex flex-col mx-2 mt-4 ss:mx-6 sm:mx-10">
          <h1 className="text-4xl text-center my-4 text-white md:text-8xl ">Mais populares</h1>
          <p className="text-xl my-4 text-white md:text-2xl">
            Explore o que está em alta e sendo mais assistido atualmente.
            Descubra os filmes, séries e pessoas que estão dominando as telas
          </p>
        </div>
      </section>

      <section className="tendencies my-6 ">
        <h1 className="text-2xl text-primaryBlue flex items-center justify-center m-2 ">
          Tendencias<FaFireFlameCurved className="ml-2 text text-pRed" />
        </h1>
        <div className="">
          <TrendingCarousel trending={trending} />
        </div>
      </section>
    </div>
  );
};

export default Home;
