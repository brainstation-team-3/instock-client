import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WarehouseList from '@components/Warehouse/WarehouseList'
import SearchBar from "@components/Searchbar/SearchBar";
import {getWarehouses} from '@utils/helpers'

function Warehouse() {

  const [loading, setLoading] = useState(true)
  const [warehouseList, setWarehouseList] = useState([])

  useEffect(() => {

    getWarehouses().then((data) => {
      setWarehouseList(data)
      setLoading(false)
    })

  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col pb-10 bg-instock-light-grey section">
      <div className="w-full rounded-t-md border-b px-6 md:px-10 py-8 shadow-md bg-instock-white
      mt-[-4.2rem] md:mt-[-6.4rem] border-instock-cloud md:border-b-0 md:flex md:gap-4 md:justify-end md:items-start">
        <h3 className="mb-6 text-3xl font-bold md:mr-auto md:mb-0">Warehouses</h3>
          <SearchBar />
          <Link to="/new-warehouse"
                className="block w-full rounded-full px-6 py-3 text-center text-sm
                font-bold text-white bg-instock-indigo md:w-52 md:py-2">
            + Add New Warehouse
          </Link>
      </div>
      <WarehouseList warehouseList={warehouseList}/>
    </div>)
}

export default Warehouse
