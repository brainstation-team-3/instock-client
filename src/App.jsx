import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Warehouse from '@pages/Warehouse'
import Inventory from '@pages/Inventory'
import WarehouseDetail from '@pages/WarehouseDetail'
import PageNotFound from '@pages/PageNotFound'
import NavBar from '@components/NavBar/NavBar'
import Footer from '@components/Footer/Footer'

function App() {
  return (
    <div className='flex h-screen flex-col bg-instock-light-grey'>
      <NavBar />
      <div className='grow'>
        <Routes>
          <Route path='/' element={<Warehouse />} />
          <Route path='/warehouse' element={<Warehouse />} />
          <Route path='/warehouse/:id' element={<WarehouseDetail />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
