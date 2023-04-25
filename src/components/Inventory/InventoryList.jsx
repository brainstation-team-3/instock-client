import React from 'react'
import InventoryListItem from './InventoryListItem';
import sortIcon from '@assets/icons/sort-24px.svg'

export default function InventoryList({ inventoryList }) {

  const inventoryHeaders = ['inventory item', 'category', 'status', 'qty', 'warehouse', 'actions']

  return (
    <div className="bg-instock-light-grey">
    <div className="hidden px-6 md:grid md:grid-cols-6 md:justify-start md:px-8 md:py-2 md:text-sm md:shadow-md xl:px-10 ">
        {inventoryHeaders.map((column, index) => (
          <span key={index} className="flex items-center gap-[0.25rem] last:justify-end">
            <p className="text-xs lg:text-base min-w-fit font-bold uppercase text-instock-slate">{column}</p>
            <img className="w-4 cursor-pointer" src={sortIcon} alt="sort-icon"/>
          </span>
        ))}
      </div>
    {inventoryList.map((item, index) => (<InventoryListItem key={index} item={item}/>))}
  </div>
  )
}
