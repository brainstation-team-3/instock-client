import ArrowDropDown from '@assets/icons/arrow_drop_down-24px.svg'

const ItemAvailability = ({
  warehouseList,
  findWarehouseId,
  status,
  quantity,
  warehouse,
  setStatus,
  setQuantity,
  setWarehouse,
}) => {
  const warehouseNames = warehouseList.map((item) => item.warehouseName)

  const selectHandler = (e) => {
    findWarehouseId(e.target.value, warehouseList)
    setWarehouse(e.target.value)
  }

  return (
    <div className="mx-[-1rem] border-b border-instock-cloud p-4 md:mx-0 md:my-4 md:w-1/2 md:border-b-0 md:border-l md:px-6 md:py-0">
      <h4 className="subheader pb-5 capitalize">item availability</h4>
      <label className="flex flex-wrap pb-2">
        <span className="label-btn w-full pb-1 capitalize">status</span>
        <div className="w-2/4">
          <input type="radio" name="stock" value="in stock" defaultChecked onClick={() => setStatus('in stock')} />
          <span className="input-text pl-2">In Stock</span>
        </div>
        <div>
          <input type="radio" name="stock" value="out of stock" onClick={() => setStatus('out of stock')} />
          <span className="input-text pl-2">Out of Stock</span>
        </div>
      </label>
      {status === 'in stock' ? (
        <label>
          <span className="label-btn pb-1 capitalize">Quantity</span>
          <input
            className="input-text placeholder-text-status-cloud border-status-cloud active:border-status-indigo mb-2 mt-1 w-full rounded-3xl
                                    border px-4 py-2 placeholder:capitalize"
            name="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>
      ) : null}
      <label className="pt-4">
        <span className="label-btn pb-1 capitalize">Warehouse</span>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <img src={ArrowDropDown} alt="dropdown arrow" />
          </div>
          <select
            className="input-text placeholder-text-status-cloud border-status-cloud active:border-status-indigo mb-2 mt-1 w-full appearance-none rounded-3xl
                                border px-4 py-2 placeholder:capitalize"
            name="warehouse"
            value={warehouse}
            onChange={selectHandler}
          >
            <option hidden value>
              Please select
            </option>
            {warehouseNames.map((warehouse, index) => (
              <option key={index} value={warehouse}>
                {warehouse}
              </option>
            ))}
          </select>
        </div>
      </label>
    </div>
  )
}

export default ItemAvailability
