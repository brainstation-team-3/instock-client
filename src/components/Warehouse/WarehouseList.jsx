import React from 'react';
import WarehouseListItem from './WarehouseListItem';
import SearchBar from '@components/Searchbar/SearchBar';
import { ButtonPrimary } from '@components/Button/Button';
import sort from '@/assets/icons/sort-24px.svg';


function WarehouseList({ warehouseList }) {

  return (
    <section className=' mx-3 md:mx-6'>
      <div className='p-4 md:px-9 flex flex-col md:flex-row gap-y-4 md:items-center md:gap-y-0 md:gap-x-4'>
        <h1 className='text-mh1 md:text-h1 font-semibold pt-2 md:mr-auto '>Warehouses</h1>
        <SearchBar />
        <ButtonPrimary
          type='button'
          link=''
          text='+ Add New Warehouse'
        />
      </div>
      <div className=''>
        <div className='hidden md:block md:box-border md:px-9 md:flex md:gap-4 md:items-center md:justify-between w-full'>
          <div className='hidden md:block md:basis-2/12 md:py-2 md:text-h4'>
            <span>WAREHOUSE</span>
            <img src={sort} alt='sort' className='inline h-4 pl-1' />
          </div>
          <div className='hidden md:block md:basis-2/12 md:py-2 md:text-h4'>
            <span>ADDRESS</span>
            <img src={sort} alt='sort' className='inline h-4 pl-1' />
          </div>
          <div className='hidden md:block md:basis-2/12 md:py-2 md:text-h4'>
            <span>CONTACT NAME</span>
            <img src={sort} alt='sort' className='inline h-4 pl-1' />
          </div>
          <div className='hidden md:block md:basis-3/12 md:py-2 md:text-h4'>
            <span>CONTACT INFORMATION</span>
            <img src={sort} alt='sort' className='inline h-4 pl-1' />
          </div>
          <div className='hidden md:block md:basis-1/12 md:py-2 md:text-h4'>
            <span>ACTIONS</span>
          </div>
        </div>
        {warehouseList.map((item) => (
          <WarehouseListItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default WarehouseList