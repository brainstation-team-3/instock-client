import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Warehouse from '@pages/Warehouse'
import Inventory from '@pages/Inventory'
import PageNotFound from '@pages/PageNotFound'
import NavBar from '@components/NavBar/NavBar'
import Footer from '@components/Footer/Footer'
import AddNewWarehouse from '@components/Form/AddNewWarehouse'

function App() {
  return (
    <div className='flex h-screen flex-col bg-instock-light-grey'>
      <NavBar />
      <div className='grow'>
        <Routes>
          <Route path='/' element={<Warehouse />} />
          <Route path='/warehouse' element={<Warehouse />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path="/addwarehouse" element={<AddNewWarehouse />} />
        <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App