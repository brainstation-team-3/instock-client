import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetails from '@components/Inventory/ItemDetails'
import ItemAvailability from '@components/Inventory/ItemAvailability.jsx'
import {
  createInventoryItem,
  getCategoryNames,
  getWarehouseNames,
  getInventoryItem,
} from '@utils/helpers'
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'

export default function AddEditInventoryItem() {

  const { inventoryId } = useParams()
  const navigate = useNavigate()

  const [warehouseList, setWarehouseList] = useState([])
  const [categoryList, setCategoryList] = useState([])

  const [warehouseId, setWarehouseId] = useState('')

  const [itemName, setItemName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const [status, setStatus] = useState('in stock')
  const [quantity, setQuantity] = useState('0')
  const [warehouse, setWarehouse] = useState('')

  const findWarehouseId = (name, warehouseList) => {
    const clickedWarehouse = warehouseList.find((item) => item.warehouseName === name)
    setWarehouseId(clickedWarehouse.id)
    return clickedWarehouse.id
  }

  const resetForm = () => {
    setItemName('')
    setDescription('')
    setCategory('Please select')

    setStatus('in stock')
    setQuantity(0)
    setWarehouse('Please select')
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const data = {
      'warehouse_id': warehouseId,
      'item_name': itemName,
      'description': description,
      'category': category,
      'status': status,
      'quantity': Number(quantity),
    }

    createInventoryItem(data)
      .then((res) => {
        if (res.status === 200) resetForm()
      })
      .catch(err => console.log(err.message))
  }

  useEffect(() => {

    if (inventoryId) {
      async function updateFields() {
        const data = await getInventoryItem(inventoryId)
        setItemName(data.item_name)
        setDescription(data.description)
        setCategory(data.category)
        setStatus(data.status.toLowerCase())
        setQuantity(data.quantity)
        setWarehouse(data.warehouse_name)
      }

      updateFields()
    }

    getCategoryNames().then((data) => {
      setCategoryList(data)
    })

    getWarehouseNames().then((data) => {
      setWarehouseList(data)
    })

  }, [])

  return (
    <>
      <div className='mx-4 rounded-md bg-white shadow-md mt-[-4.2rem] md:mt-[-6rem] md:mx-8 xl:mx-auto xl:max-w-7xl'>
        <div className='flex w-full border-b pt-8 pb-6 pl-4 justify-left border-status-cloud md:pl-10'>
          <img className='cursor-pointer' src={ArrowBackIcon} alt='back-arrow' onClick={() => navigate(-1)} />
          <h3 className='pl-2 page-header capitalize'>
            {inventoryId ? 'edit inventory item' : 'add new inventory item'}
          </h3>
        </div>
        <div className='md:flex'>
          <form className='mb-6 w-full rounded-b-md border-b pt-4 md:mb-0' onSubmit={submitHandler}>
            <div className='md:mb-6 md:flex md:w-full md:px-6'>
              <ItemDetails
                categoryList={categoryList}
                itemName={itemName}
                description={description}
                category={category}
                setItemName={setItemName}
                setDescription={setDescription}
                setCategory={setCategory}
              />
              <ItemAvailability
                warehouseList={warehouseList}
                findWarehouseId={findWarehouseId}
                status={status}
                quantity={quantity}
                warehouse={warehouse}
                setStatus={setStatus}
                setQuantity={setQuantity}
                setWarehouse={setWarehouse}
              />
            </div>
            <div className='flex w-full items-center gap-4 px-4 py-4 bg-instock-light-grey md:justify-end'>
              <button
                type='reset'
                onClick={() => navigate('/inventory')}
                className='btn-alternate'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='btn-primary'
              >
                {inventoryId ? 'save' : '+ add item'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
