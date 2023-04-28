import { Link, useNavigate } from 'react-router-dom'
import { format } from '@utils/helpers.js'
import editIcon from '@/assets/icons/edit-24px.svg'
import deleteIcon from '@/assets/icons/delete_outline-24px.svg'
import chevron from '@/assets/icons/chevron_right-24px.svg'

export default function InventoryListItem({ item, onDelete, setCurrentInventoryItem, warehouse }) {
  const navigate = useNavigate()

  const { id, warehouse_name, status, item_name, quantity, category } = item

  const deleteHandler = () => {
    setCurrentInventoryItem(item)
    onDelete(true)
  }
  return (
    <div key={id} className={`grid grid-cols-2 border-b bg-white px-6 py-8 shadow-md border-instock-cloud md:grid-cols-6
    last:rounded-b-md md:items-center md:gap-4 md:px-10 md:last:border-b-0`}
    >
      <div className='mb-4 md:mb-0 md:col-start-1'>
        <p className='text-sm font-bold uppercase text-instock-slate md:hidden'>inventory item</p>
        <Link to={`/inventory/${id}`}>
          <span className='flex justify-start items-center gap-0.5 py-1 group'>
             <p
               className='cursor-pointer font-bold capitalize text-instock-indigo min-w-fit whitespace-nowrap'>{item_name}</p>
             <img className='mt-1 group-hover:translate-x-0.5' src={chevron} alt='chevron-icon' />
           </span>
        </Link>
      </div>
      <div className='col-start-1 row-start-2 mb-4 break-words md:mb-0 md:col-start-2 md:row-start-1'>
        <p className='text-sm font-bold uppercase text-instock-slate md:hidden'>category</p>
        <p>{category}</p>
      </div>
      <div className='col-start-2 row-start-1 mb-4 md:mb-0 md:col-start-3'>
        <p className='text-sm font-bold uppercase text-instock-slate md:hidden'>status</p>
        <p className={`${quantity ? 'text-instock-green bg-instock-green-o' : 'text-instock-red bg-instock-red-o'} 
                      text-sm py-1.5 mt-1 px-3 w-fit rounded-3xl text-center uppercase min-w-fit whitespace-nowrap`}>
          {status}
        </p>
      </div>
      <div className='mb-4 w-4/5 break-words md:mb-0 md:col-start-1-4 md:col-start-4'>
        <p className='text-sm font-bold uppercase text-instock-slate md:hidden'>qty</p>
        <p className='capitalize'>{format(quantity)}</p>
      </div>
      <div className='col-start-2 mb-4 break-words md:mb-0 md:col-start-5'>
        <p className='text-sm font-bold uppercase text-instock-slate md:hidden'>warehouse</p>
        <p>{warehouse_name || warehouse}</p>
      </div>
      <div
        className='col-span-2 flex items-center justify-between md:col-span-1 md:mr-2 md:mb-0 md:justify-end md:gap-4 md:col-start-6'>
        <img onClick={deleteHandler}
             className='cursor-pointer md:w-7'
             src={deleteIcon}
             alt='delete-icon'
        />
        <img onClick={() => navigate(`/inventory/${id}/edit`)}
             className='cursor-pointer justify-self-end md:w-7'
             src={editIcon}
             alt='delete-icon'
        />
      </div>
    </div>
  )
}
