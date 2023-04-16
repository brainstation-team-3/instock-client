import React, { useState, useEffect } from 'react'
import WarehouseList from '@components/Warehouse/WarehouseList'
import { getWarehouses } from '@utils/helpers'

function Warehouse() {

  // in javascript, we have event loops i.e. if something
  // doesn't get completed in first loop, it gets completed in
  // second loop and so on and so forth
  const [loading, setLoading] = useState(true)
  const [warehouseList, setWarehouseList] = useState([])

  useEffect(() => {
    
    getWarehouses().then((data) => {
      setWarehouseList(data)
      setLoading(false)
      console.log(data)
    })

  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
      <div>
          Warehouse
          <WarehouseList warehouseList={warehouseList} />      
    </div>
  )
}

export default Warehouse
