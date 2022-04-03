import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { OtherHome } from './Components/OtherHome'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/2' element={<OtherHome />} />
    </Routes>
  )
}

export default App
