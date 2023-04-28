import InventoryListItem from './InventoryListItem'
import sortIcon from '@assets/icons/sort-24px.svg'

export default function InventoryList({ inventoryList, onDelete, setCurrentInventoryItem }) {

  const inventoryHeaders = ['inventory item', 'category', 'status', 'qty', 'warehouse', 'actions']

  return (
    <div className='bg-instock-light-grey'>
      <div className='hidden px-6 md:grid md:grid-cols-6 md:justify-start md:px-10 md:py-2 md:text-sm md:shadow-md
    [&>*:nth-child(3)]:ml-2.5 [&>*:nth-child(4)]:ml-2.5 [&>*:nth-child(5)]:ml-2.5'>
        {inventoryHeaders.map((column, index) => (
          <span key={index} className='flex justify-start items-center gap-1 last:justify-end'>
            <p className='text-sm md:text-base min-w-fit font-bold uppercase text-instock-slate'>{column}</p>
            <img className='w-4 cursor-pointer' src={sortIcon} alt='sort-icon' />
          </span>
        ))}
      </div>
      {inventoryList.map((item) => (
        <InventoryListItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          setCurrentInventoryItem={setCurrentInventoryItem}
        />
      ))}
    </div>
  )
}
