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
      className='w-full p-4 border-instock-cloud md:w-1/2 md:border-b-0 md:px-6'>
      <h4 className='pb-5 capitalize subheader'>item availability</h4>
      <label className='flex w-full flex-wrap pb-2'>
        <span className='w-full pb-1 capitalize label-btn'>status</span>
        <div className='flex w-1/2 items-center justify-start'>
          <input
            className='h-4 w-4 duration-500 ease-in-out'
            type='radio'
            name='stock'
            value='in stock'
            defaultChecked
            onClick={() => setStatus('in stock')}
          />
          <span className='ml-2 input-text'>In Stock</span>
        </div>
        <div className='flex w-1/2 items-center justify-start'>
          <input className='h-4 w-4 duration-500 ease-in-out'
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
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>)
        : null}
      <label className='pt-4'>
        <span className='pb-1 capitalize label-btn'>Warehouse</span>
        <div className='relative'>
          <img className='pointer-events-none absolute top-1/2 right-0 flex -translate-y-1/2 items-center p-3'
               src={ArrowDropDown} alt='dropdown arrow' />
          <select className='input-text placeholder-text-status-cloud border-status-cloud active:border-status-indigo
                  mb-2 mt-1 w-full appearance-none rounded-3xl border px-4 py-2 placeholder:capitalize'
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
