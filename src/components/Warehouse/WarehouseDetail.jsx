import React, { useState, useEffect } from 'react'
import { getInventoryItemsByWarehouse, getWarehouse } from '@utils/helpers'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'
import editIcon from '@assets/icons/edit-alt-24px.svg'
import InventoryListItem from '@components/Inventory/InventoryListItem'
import Modal from '@components/Modal/Modal'
import TableHeader from '@components/Table/TableHeader'

function WarehouseDetail() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [warehouseDetail, setWarehouseDetail] = useState([])
  const [inventoryList, setInventoryList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [currentInventoryItem, setCurrentInventoryItem] = useState({})

  const inventoryHeaders = ['inventory item', 'category', 'status', 'qty', 'warehouse', 'actions']

  useEffect(() => {
    getWarehouse(id).then((data) => {
      setWarehouseDetail(data)
    })

    getInventoryItemsByWarehouse(id).then((data) => {
      setInventoryList(data)
      setLoading(false)
    })
  }, [id])

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflowY = 'visible'
  }

  return (!loading &&
    <div
      className='mx-4 rounded-t-md bg-white drop-shadow-lg mt-[-4.2rem] md:mt-[-6rem] md:mx-8 xl:mx-auto xl:max-w-7xl'>
      <Modal
        type='inventory'
        id={currentInventoryItem.id}
        name={currentInventoryItem.item_name}
        open={isOpen}
        onClose={closeModal}
        setCurrentList={setInventoryList}
      />
      <div className='flex w-full border-b px-4 pt-8 pb-6 justify-start items-center border-instock-cloud md:px-10'>
        <img className='cursor-pointer' src={ArrowBackIcon} alt='back-arrow' onClick={() => navigate(-1)} />
        <h3 className='pl-2 capitalize page-header'>
          {warehouseDetail.warehouse_name}
        </h3>
        <div onClick={() => navigate(`/warehouse/${id}/edit`)}
             className='ml-auto cursor-pointer rounded-full p-3 md:py-1.5 px-3.5 text-white bg-instock-indigo
             md:flex md:items-center md:gap-2 md:justify-center'>
          <img className='w-5 rounded-full' src={editIcon} alt='edit-icon' />
          <p className='hidden capitalize md:block'>
            edit
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-6 p-5 md:px-10'>
        <div className='break-words text-sm md:text-base md:w-2/5 md:border-r md:border-instock-cloud'>
          <p className='font-bold uppercase table-header text-instock-slate mb-0.5'>warehouse address:</p>
          <p className='md:break-normal capitalize'>
            {`${warehouseDetail.address}, ${warehouseDetail.city}, ${warehouseDetail.country}`}
          </p>
        </div>
        <div className='flex md:w-3/5 justify-between gap-3 md:ml-7'>
          <div className='w-1/2 break-words text-sm md:text-base '>
            <p className='font-bold uppercase table-header text-instock-slate mb-0.5'>contact name:</p>
            <p className='capitalize'>{warehouseDetail.contact_name}</p>
            <p className='capitalize'>{warehouseDetail.contact_position || 'Warehouse Manager'}</p>
          </div>
          <div className='w-1/2 break-words text-sm md:text-base'>
            <p className='font-bold uppercase table-header text-instock-slate mb-0.5'>contact information:</p>
            <p>{warehouseDetail.contact_phone}</p>
            <p>{warehouseDetail.contact_email}</p>
          </div>
        </div>
      </div>
      <TableHeader columns={inventoryHeaders} type='inventory'/>
      {inventoryList.map((item) => (
        <InventoryListItem
          key={item.id}
          item={item}
          onDelete={setIsOpen}
          setCurrentInventoryItem={setCurrentInventoryItem}
          warehouse={warehouseDetail.warehouse_name}
        />
      ))}
    </div>
  )
}

export default WarehouseDetail
