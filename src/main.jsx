import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import Home from './pages/home/Home.jsx' 
import People from './pages/people/People.jsx'

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Movies from './pages/movies/Movies.jsx'
import Series from './pages/series/Series.jsx'
import MoviesDetails from './pages/movies/MoviesDetails.jsx'
import SeriesDetails from './pages/series/SeriesDetails.jsx'
import PeopleDetails from './pages/people/PeopleDetails.jsx'
import Search from './pages/search/Search.jsx'

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
