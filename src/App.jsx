import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Warehouse from '@pages/Warehouse'
import Inventory from '@pages/Inventory'
import PageNotFound from '@pages/PageNotFound'
import NavBar from '@components/NavBar/NavBar'
import Footer from '@components/Footer/Footer'
import NewWarehouse from '@pages/NewWarehouse'
import NewInventoryItem from '@components/Inventory/NewInventoryItem'

function App() {
  return (
    <div className='flex h-screen flex-col'>
      <NavBar />
      <div className='grow bg-instock-light-grey'>
        <Routes>
          <Route path='/' element={<Warehouse />} />
          <Route path='/warehouse' element={<Warehouse />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path="/new-warehouse" element={<NewWarehouse />} />
          <Route path='/new-inventory-item' element={<NewInventoryItem />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
