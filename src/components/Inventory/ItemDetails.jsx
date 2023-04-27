import ArrowDropDown from '@assets/icons/arrow_drop_down-24px.svg'

const ItemDetails = ({ categoryList, itemName, description, category, setItemName, setDescription, setCategory }) => {
  return (
    <div className='w-full border-b p-4 border-instock-cloud md:w-1/2 md:border-r md:border-b-0 md:px-6'>
      <h4 className='mb-5 subheader'>Item Details</h4>
      <label>
        <span className='pb-1 capitalize label-btn'>Item Name</span>
        <input
          type='text'
          name='item_name'
          className='input-text placeholder-text-status-cloud border-status-cloud active:border-status-indigo mb-2 mt-1 w-full rounded-3xl
                                    border px-4 py-2 placeholder:capitalize'
          placeholder='Item Name'
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
        />
      </label>
      <label>
        <span className='mb-1 capitalize label-btn'>Description</span>
        <textarea
          className='mt-1 mb-2 h-40 w-full resize-none rounded-3xl border px-4 py-3 placeholder:capitalize input-text placeholder-text-status-cloud border-status-cloud active:border-status-indigo'
          name='description'
          placeholder='Please enter a brief item description...'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </label>
      <label>
        <span className='mb-1 capitalize label-btn'>Category</span>
        <div className='relative'>
          <img className='pointer-events-none absolute top-1/2 right-0 flex -translate-y-1/2 items-center p-3'
               src={ArrowDropDown} alt='dropdown arrow' />
          <select
            className='input-text placeholder-text-status-cloud border-status-cloud active:border-status-indigo mb-2 mt-1 w-full appearance-none rounded-3xl
                                        border px-4 py-2 placeholder:capitalize'
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option hidden value>Please select</option>
            {categoryList.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </label>
    </div>
  )
}

export default ItemDetails
