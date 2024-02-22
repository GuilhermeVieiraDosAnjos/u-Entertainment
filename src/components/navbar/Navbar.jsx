import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div  className="bg-primaryBlue w-full h-full md:flex md:justify-between">
      <div className="flex justify-between items-center p-3 ">
          {/* <h1 className="text-white ">U-Entertainment</h1> */}
          <Link to={'/'} className="text-white font-ceveat font-semibold md:text-2xl md:ml-10">U-Entertainment</Link>
          <button type="button" onClick={toggleMenu} className="md:hidden ss:mr-3" >
            {menuOpen ? (
              <IoCloseOutline className="text-2xl text-white" /> 
            ) : (
              <BiMenu className="text-2xl text-white" />
            )}
          </button>
      </div>
      <div className="hidden md:flex items-center text-lg gap-4 mr-24 text-white   ">
        <Link to='/' className="my-5" onClick={closeMenu}> Home </Link>
        <Link to='/movies' className="my-5" onClick={closeMenu}> Melhores Filmes</Link>
        <Link to='/series' className="my-5" onClick={closeMenu}> Melhores Series</Link>
        <Link to='/people' className="my-5" onClick={closeMenu}> Pessoas </Link>
      </div>
      {menuOpen && (
        // <div className="h-screen flex flex-col items-center justify-center ss:">
        <div className='md:hidden h-screen flex flex-col items-center justify-center text-white'>
            <div className="flex flex-col justify-center items-center text-white">
              <Link to='/' className="my-5" onClick={closeMenu}> Home </Link>
              <Link to='/movies' className="my-5" onClick={closeMenu}> Melhores Filmes</Link>
              <Link to='/series' className="my-5" onClick={closeMenu}> Melhores Series</Link>
              <Link to='/people' className="my-5" onClick={closeMenu}> Pessoas </Link>
            </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
