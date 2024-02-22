import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const App = () => {
  return (
      <div className='app w-screen'>
        <Navbar />
        <div className='main-content'>
          <Outlet />
        </div>
        <Footer />
      </div>
  )
}

export default App
