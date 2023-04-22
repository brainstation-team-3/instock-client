import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'
import ArrowDropDown from '@assets/icons/arrow_drop_down-24px.svg'
import { ButtonPrimary } from '../Button/Button'
import { createInventoryItem, getInventory, getWarehouses } from '@utils/helpers'

export default function NewInventoryItem() {
  const navigate = useNavigate()

  const [detailsFields, setDetailsFields] = useState({
    item_name: '',
    description: '',
    category: '',
  })

  // check this
  const [availabilityFields, setAvailabilityFields] = useState({
    status: true,
    quantity: 1,
    warehouse: '',
  })

  const [category, setCategory] = useState("")
  const [categoryList, setCategoryList] = useState([])
  const [warehouseList, setWarehouseList] = useState([])

  const goBack = () => {
    navigate('/inventory')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      newInventoryItem: {
        ...detailsFields,
        ...availabilityFields,
      },
    }
    createInventoryItem(data).then(e.target.reset())
  }

  useEffect(() => {
    getInventory().then((data) => {
      const myCategoryList = new Set(data.map((item) => {
        return item.category
      }))
      setCategoryList([...myCategoryList])
    })

    getWarehouses().then((data) => {
      setWarehouseList(data.warehouse_name) // might be an issue here
    })
  }, [categoryList, warehouseList])

  return (
    <>
      <div className="mx-4 mt-[-4.2rem] rounded-md bg-white shadow-md md:mx-8 md:mt-[-6rem] xl:mx-auto xl:max-w-7xl">
        <div className="justify-left inline-flex w-full border-b border-instock-cloud pb-6 pl-4 pt-8">
          <img className="cursor-pointer" src={ArrowBackIcon} alt="back-arrow" onClick={goBack} />
          <h3 className="page-header pl-2">Add New Inventory Item</h3>
        </div>
        <div className="md:flex">
          <form className="mb-6 rounded-b-md border-b pt-4 md:mb-0" onSubmit={submitHandler}>
            <div className="section md:mb-6 md:flex">
              <div className="mx-[-1rem] border-b border-instock-cloud p-4 md:mx-0 md:my-4 md:border-b-0 md:border-r md:px-6 md:py-0">
                <h4 className="subheader pb-5">Item Details</h4>
                <label>
                  <span className="label-btn pb-1 capitalize">Item Name</span>
                  <input
                    type="text"
                    className="input-text placeholder-text-instock-cloud mb-2 mt-1 w-full rounded-3xl border border-instock-cloud
                                    px-4 py-2 placeholder:capitalize active:border-instock-indigo"
                    placeholder="Item Name"
                    // onChange={setDetailsFields}
                    // value={detailsFields.item_name}
                  />
                </label>
                <label>
                  <span className="label-btn pb-1 capitalize">Description</span>
                  <textarea
                    className="input-text placeholder-text-instock-cloud mb-2 mt-1 w-full rounded-3xl border border-instock-cloud
                                    px-4 py-2 placeholder:capitalize active:border-instock-indigo"
                    placeholder="Please enter a brief item description..."
                    // onChange={setDetailsFields}
                    // value={detailsFields.description}
                  />
                </label>
                <label>
                  <span className="label-btn pb-1 capitalize">Category</span>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <img src={ArrowDropDown} alt="dropdown arrow" />
                    </div>
                    <select
                      className="input-text placeholder-text-instock-cloud mb-2 mt-1 w-full appearance-none rounded-3xl border border-instock-cloud
                                        px-4 py-2 placeholder:capitalize active:border-instock-indigo"
                      placeholder="Please select"
                      defaultValue={category}
                      onChange={() => setCategory(category)}
                    >
                      {categoryList.map((category, index) => (
                          <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </label>
                <div className="mx-[-1rem] p-4 md:mx-0 md:my-4 md:px-6 md:py-0">
                  <h4 className="subheader pb-5">Contact Details</h4>
                  <label className="flex flex-wrap pb-2">
                    <span className="label-btn w-full pb-1 capitalize">Status</span>
                    <div className="w-2/4">
                      <input
                        type="radio"
                        onChange={setAvailabilityFields}
                        value={availabilityFields.status}
                        disabled={availabilityFields.quantity === 0 ? true : false}
                        defaultChecked
                      />
                      <span className="input-text pl-2">In Stock</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        onChange={setAvailabilityFields}
                        value={availabilityFields.status}
                        disabled={availabilityFields.quantity > 0 ? true : false}
                      />
                      <span className="input-text pl-2">Out of Stock</span>
                    </div>
                  </label>
                  <label>
                    <span className="label-btn pb-1 capitalize">Quantity</span>
                    <input
                      className="input-text placeholder-text-instock-cloud mb-2 mt-1 w-full rounded-3xl border border-instock-cloud
                                    px-4 py-2 placeholder:capitalize active:border-instock-indigo"
                      type="number"
                      onChange={setAvailabilityFields}
                      value={availabilityFields.quantity}
                    />
                  </label>
                  <label className="pt-4">
                    <span className="label-btn pb-1 capitalize">Warehouse</span>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <img src={ArrowDropDown} alt="dropdown arrow" />
                      </div>
                      <select
                        className="input-text placeholder-text-instock-cloud mb-2 mt-1 w-full appearance-none rounded-3xl border border-instock-cloud
                                            px-4 py-2 placeholder:capitalize active:border-instock-indigo"
                        placeholder="Please select"
                        onChange={setAvailabilityFields}
                        value={availabilityFields.warehouse}
                      >
                        <option value={warehouseList} />
                      </select>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-4 bg-instock-light-grey px-6 py-4 md:justify-end">
              <button
                type="reset"
                className="label-btn w-1/2 rounded-full border
                        py-2 text-instock-cloud duration-300 ease-in-out hover:border-instock-indigo hover:text-instock-indigo
                        md:w-28 md:px-4"
              >
                Cancel
              </button>
              <ButtonPrimary type="submit" link="" text="+ Add Item" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
