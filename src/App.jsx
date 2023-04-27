import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '@components/NavBar/NavBar'
import Warehouse from '@pages/Warehouse'
import Inventory from '@pages/Inventory'
import WarehouseDetail from '@pages/WarehouseDetail'
import PageNotFound from '@pages/PageNotFound'
import AddEditWarehouse from '@pages/AddEditWarehouse'
import Footer from '@components/Footer/Footer'
import NewInventoryItem from '@components/Inventory/NewInventoryItem'
import WarehouseInventoryList from '@components/Warehouse/WarehouseInventoryList'

function App() {
  return (
    <div className='flex h-screen flex-col'>
      <NavBar />
      <div className='grow bg-instock-light-grey'>
        <Routes>
          <Route path='/' element={<Warehouse />} />
          <Route path='/warehouse' element={<Warehouse />} />
          <Route path='/warehouse/:id' element={<WarehouseDetail />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path="/new-warehouse" element={<AddEditWarehouse />} />
          <Route path="/warehouse/:warehouseId/edit" element={<AddEditWarehouse />} />
          <Route path='/warehouse/:warehouseId/inventory' element={<WarehouseInventoryList />} />
          <Route path="/new-inventory-item" element={<NewInventoryItem />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
