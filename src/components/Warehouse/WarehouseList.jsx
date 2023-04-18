import React from 'react';
import WarehouseListItem from './WarehouseListItem';
import SearchBar from '@components/Searchbar/SearchBar';
import { ButtonPrimary } from '@components/Button/Button';
// import Table from '@components/Table/Table';

function WarehouseList({ warehouseList }) {

  return (
    <section className='divide-y divide-solid mx-3'> 
      <div className='p-4 flex flex-col gap-4'>
        <h1 className='text-mh1 font-semibold pt-2 '>Warehouses</h1>
        <SearchBar />
        <ButtonPrimary 
          type='button'
          link=''
          text='+ Add New Warehouse'  
        />
      </div>
      {/* <Table /> */}
      {warehouseList.map((item) => (
        <WarehouseListItem key={item.id} item={item} />
        ))}
    </section>
  )
}

export default WarehouseList