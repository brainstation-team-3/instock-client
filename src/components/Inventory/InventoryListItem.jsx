import React from 'react'
import editIcon from '@/assets/icons/edit-24px.svg'
import deleteIcon from '@/assets/icons/delete_outline-24px.svg'
import chevron from '@/assets/icons/chevron_right-24px.svg'

export default function InventoryListItem({ item }) {
  const { id, warehouse_name, status, item_name, quantity, category } = item

  return (
    <div
      key={id}
      className="grid row-start-1 border-b border-instock-cloud bg-white px-4 py-8 shadow-md
    last:rounded-b-md md:grid-cols-6 md:items-center md:px-8 md:last:border-b-0 md:hover:bg-instock-cloud hover:opacity-75"
    >
      <div className="mb-4 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">inventory item</p>
        <span className="flex items-center gap-[0.75rem] py-1">
          <p className="cursor-pointer font-bold capitalize text-instock-indigo">{item_name}</p>
          <img className="mt-1" src={chevron} alt="chevron-icon" />
        </span>
      </div>
      <div className="col-start-1 mb-4 w-4/5 break-words md:col-start-2 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">category</p>
        <p className="capitalize">{category}</p>
      </div>
      <div className="col-start-2 row-start-1 mb-4 w-4/5 break-words md:col-start-3 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">status</p>
        <p className={`${quantity !== 0 ? 'text-instock-green' : ''} text-xs rounded-3xl mt-2 text-instock-red bg-instock-light-grey text-center uppercase h-4 opacity-90  mb:h-6`}>{status}</p>
      </div>
      <div className="col-start-2 mb-4 w-4/5 break-words md:col-start-4 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">qty</p>
        <p>{quantity}</p>
      </div>
      <div className="col-start-2 mb-4 w-4/5 break-words md:col-start-5 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">warehouse</p>
        <p>{warehouse_name}</p>
      </div>
      <div className="col-span-2 flex items-center justify-between md:col-span-1 md:mb-0 md:mr-2 md:justify-end md:gap-4">
        <img className="cursor-pointer md:w-7" src={deleteIcon} alt="delete-icon" />
        <img className="cursor-pointer justify-self-end md:w-7" src={editIcon} alt="delete-icon" />
      </div>
    </div>
  )
}
