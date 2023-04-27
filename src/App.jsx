import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '@components/NavBar/NavBar'
import Warehouse from '@pages/Warehouse'
import Inventory from '@pages/Inventory'
import WarehouseDetail from '@components/Warehouse/WarehouseDetail.jsx'
import PageNotFound from '@pages/PageNotFound'
import AddEditWarehouse from '@components/Warehouse/AddEditWarehouse.jsx'
import Footer from '@components/Footer/Footer'
import AddEditInventoryItem from '@components/Inventory/AddEditInventoryItem.jsx'
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
          <Route path="/new-inventory-item" element={<AddEditInventoryItem />} />
          <Route path="/new-warehouse" element={<AddEditWarehouse />} />
          <Route path="/warehouse/:warehouseId/edit" element={<AddEditWarehouse />} />
          <Route path="/new-inventory-item" element={<AddEditInventoryItem />} />
          <Route path="/inventory/:inventoryId/edit" element={<AddEditInventoryItem />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
