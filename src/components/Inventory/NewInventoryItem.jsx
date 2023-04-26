import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemDetails from '@components/Inventory/ItemDetails'
import ItemAvailability from '@components/Inventory/ItemAvailability.jsx'
import { createInventoryItem, getCategoryNames, getWarehouseNames } from '@utils/helpers'
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'

export default function NewInventoryItem() {
  const navigate = useNavigate()

  const [warehouseList, setWarehouseList] = useState([])
  const [categoryList, setCategoryList] = useState([])

  const [warehouseId, setWarehouseId] = useState('')

  const [itemName, setItemName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const [status, setStatus] = useState('in stock')
  const [quantity, setQuantity] = useState(0)
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
      "warehouse_id": warehouseId,
      "item_name": itemName,
      "description": description,
      "category": category,
      "status": status,
      "quantity": quantity
    }

    createInventoryItem(data).then(() => resetForm())
  }

  useEffect(() => {

    getCategoryNames().then((data) => {
      setCategoryList(data)
    })

    getWarehouseNames().then((data) => {
      setWarehouseList(data)
    })

  }, [])

  return (
    <>
      <div className="mx-4 rounded-md bg-white shadow-md mt-[-4.2rem] md:mt-[-6rem] md:mx-8 xl:mx-auto xl:max-w-7xl">
        <div className="inline-flex w-full border-b pt-8 pb-6 pl-4 justify-left border-status-cloud">
          <img className="cursor-pointer" src={ArrowBackIcon} alt="back-arrow" onClick={() => navigate('/inventory')} />
          <h3 className="pl-2 page-header">Add New Inventory Item</h3>
        </div>
        <div className="md:flex">
          <form className="mb-6 rounded-b-md border-b pt-4 md:mb-0" onSubmit={submitHandler}>
            <div className="section md:mb-6 md:flex">
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
            <div className="flex w-full items-center gap-4 px-6 py-4 bg-status-light-grey md:justify-end">
              <button
                type="reset"
                onClick={resetForm}
                // classname can be btn-alternate
                className="label-btn text-status-cloud hover:border-status-indigo hover:text-status-indigo
                            w-1/2 rounded-full border py-2 duration-300 ease-in-out
                            md:w-28 md:px-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                // classname can be btn-primary
                className="label-btn text-status-cloud hover:border-status-indigo hover:text-status-indigo
                            w-1/2 rounded-full border py-2 duration-300 ease-in-out
                            md:w-28 md:px-4"
              >
                + Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
