import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import WarehouseList from '@components/Warehouse/WarehouseList'
import SearchBar from '@components/Searchbar/SearchBar'
import { getWarehouses } from '@utils/helpers'
import Modal from '@components/Modal/Modal'

function Warehouse() {

  const [loading, setLoading] = useState(true)
  const [warehouseList, setWarehouseList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [currentWarehouse, setCurrentWarehouse] = useState({})

  useEffect(() => {

    getWarehouses().then((data) => {
      setWarehouseList(data)
      setLoading(false)
    })

  }, [warehouseList])

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflowY = 'visible'
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='md:relative'>
      <Modal
        type='warehouse'
        id={currentWarehouse.id}
        name={currentWarehouse.warehouse_name}
        open={isOpen}
        onClose={closeModal}
        setCurrentList={setWarehouseList}
      />
      <div className='flex flex-col pb-10 bg-instock-light-grey section'>
        <div className='w-full rounded-t-md border-b px-6 md:px-10 py-8 drop-shadow-lg bg-instock-white mt-[-4.2rem] md:mt-[-6.4rem]
                        border-instock-cloud md:border-b-0 md:flex md:gap-4 md:justify-end md:items-start'>
          <h3 className='mb-6 text-3xl font-bold md:mr-auto md:mb-0'>Warehouses</h3>
          <SearchBar />
          <Link to='/new-warehouse'
                className='block w-full rounded-full px-6 py-3 text-center text-sm font-bold text-white bg-instock-indigo
                           hover:bg-instock-black duration-300 ease-in-out md:w-52 md:py-2'>
            + Add New Warehouse
          </Link>
        </div>
        <WarehouseList warehouseList={warehouseList} onDelete={setIsOpen} setCurrentWarehouse={setCurrentWarehouse}/>
      </div>
    </div>
  )
}

export default Warehouse
