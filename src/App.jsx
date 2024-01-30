import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/NavBar'
import Post from './component/Post'
import About from './component/About'
import Footer from './component/Footer'
import Experiemce from './component/Experience'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Master from './component/MASTER/Master'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Master />}>
            <Route path='/' element={<Post />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Post />} />
            <Route path='/experience' element={<Experiemce />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
