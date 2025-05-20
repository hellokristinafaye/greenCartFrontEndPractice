import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Routes>
          <Route />
        </Routes>
      </div>
    </div>
  )
}

export default App