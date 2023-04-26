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
    <div
      className='border-b p-4 mx-[-1rem] border-instock-cloud md:mx-0 md:my-4 md:border-l md:border-b-0 md:px-6 md:py-0 md:w-1/2'>
      <h4 className='pb-5 capitalize subheader'>item availability</h4>
      <label className='flex flex-wrap pb-2'>
        <span className='w-full pb-1 capitalize label-btn'>status</span>
        <div className='w-2/4'>
          <input
            type='radio'
            name='stock'
            value='in stock'
            defaultChecked
            onClick={() => setStatus('in stock')}
          />
          <span className='pl-2 input-text'>In Stock</span>
        </div>
        <div>
          <input
            type='radio'
            name='stock'
            value='out of stock'
            onClick={() => setStatus('out of stock')}
          />
          <span className='pl-2 input-text'>Out of Stock</span>
        </div>
      </label>
      {status === 'in stock'
        ? (<label>
          <span className='pb-1 capitalize label-btn'>Quantity</span>
          <input
            className='input-text placeholder-text-status-cloud border-status-cloud active:border-status-indigo mb-2 mt-1 w-full rounded-3xl
                                    border px-4 py-2 placeholder:capitalize'
            name='quantity'
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>)
        : null}
      <label className='pt-4'>
        <span className='pb-1 capitalize label-btn'>Warehouse</span>
        <div className='relative'>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
            <img src={ArrowDropDown} alt='dropdown arrow' />
          </div>
          <select
            className='input-text placeholder-text-status-cloud border-status-cloud active:border-status-indigo mb-2 mt-1 w-full appearance-none rounded-3xl
                                border px-4 py-2 placeholder:capitalize'
            name='warehouse'
            value={warehouse}
            onChange={selectHandler}
          >
            <option hidden value>Please select</option>
            {warehouseNames.map((warehouse, index) => (
              <option
                key={index}
                value={warehouse}>
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
