import { useState, useEffect } from 'react'
import WarehouseList from '@components/Warehouse/WarehouseList'
import {getWarehouses} from '@utils/helpers'
import searchIcon from '@assets/icons/search-24px.svg'
import { Link } from 'react-router-dom'

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
      <div className="w-full rounded-t-md border-b px-6 py-8 md:pb-2 shadow-md bg-instock-white
      mt-[-4.2rem] md:mt-[-6.4rem] border-instock-cloud md:border-b-0 md:flex md:gap-4 md:justify-end">
        <h3 className="mb-6 text-3xl font-bold md:mr-auto">Warehouses</h3>
        <div className="relative flex md:min-w-40 md:w-1/4">
          <input className="mb-6 w-full rounded-full border py-3 pr-12 pl-6 text-sm border-instock-cloud md:py-2"
                 type="text"
                 placeholder="Search..."
          />
          <img className="absolute top-3 right-3 fill-instock-slate md:top-2 md:right-2"
               src={searchIcon}
               alt="search"
          />
        </div>
          <Link to="/new-warehouse"
                className="block h-10 w-full rounded-full px-6 py-3 text-center align-middle text-sm
                font-bold text-white bg-instock-indigo md:w-52 md:py-2">
            + Add New Warehouse
          </Link>
      </div>
      <WarehouseList warehouseList={warehouseList}/>
    </div>)
}

export default Warehouse
