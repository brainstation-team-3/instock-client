import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import  WarehouseList  from './pages/WarehouseList';
import  InventoryList  from './pages/InventoryList';
import  PageNotFound  from './pages/PageNotFound';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warehouses" element={<WarehouseList />} >
            <Route path="/warehouses/:id" element= {<WarehouseList />}  />
          </Route>
          <Route path="/inventory" element={<InventoryList />} >
            <Route path="/inventory/:id" element= {<InventoryList />}/>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      
  )
}

export default App
