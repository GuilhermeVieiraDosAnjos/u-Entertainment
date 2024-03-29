import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import App from './App.jsx'
import Home from './pages/home/Home.jsx' 
import Movies from './pages/movies/Movies.jsx'
import MoviesDetails from './pages/movies/MoviesDetails.jsx'
import Series from './pages/series/Series.jsx'
import SeriesDetails from './pages/series/SeriesDetails.jsx'
import People from './pages/people/People.jsx'
import PeopleDetails from './pages/people/PeopleDetails.jsx'
import Search from './pages/search/Search.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='movie/:id' element={<MoviesDetails/>} />
          <Route path='/series' element={<Series/>} />
          <Route path='series/:id' element={<SeriesDetails/>} />
          <Route path='people/' element={<People/>} /> 
          <Route path='people/:id' element={<PeopleDetails />} /> 
          <Route path='search/' element={<Search/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
