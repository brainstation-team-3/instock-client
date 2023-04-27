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
import InventoryItemDetail from '@components/Inventory/InventoryItemDetail'

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
          <Route path='/inventory/:id' element={<InventoryItemDetail />} />
          <Route path="/new-inventory-item" element={<NewInventoryItem />} />
          <Route path="/new-warehouse" element={<AddEditWarehouse />} />
          <Route path="/warehouse/:warehouseId/edit" element={<AddEditWarehouse />} />
          <Route path="/new-inventory-item" element={<NewInventoryItem />} />
          <Route path="/inventory/:inventoryId/edit" element={<NewInventoryItem />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
