import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@pages/Home'
import Warehouse from '@pages/Warehouse'
import Inventory from '@pages/Inventory'
import PageNotFound from '@pages/PageNotFound'
import NavBar from '@components/NavBar/NavBar'
import Footer from '@components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warehouse" element={<Warehouse />}/>
        <Route path="/inventory" element={<Inventory />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
