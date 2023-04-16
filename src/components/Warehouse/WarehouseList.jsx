import React from 'react';
import WarehouseListItem from './WarehouseListItem';
// import Table from '@components/Table/Table';

function WarehouseList({ warehouseList }) {

  return (
    <div className='divide-y divide-solid'> 
      <h1 className='text-2xl font-bold'>Warehouses</h1>
      <div>SEARCH BAR</div>
      {/* <Table /> */}
      {warehouseList.map((item) => (
        <WarehouseListItem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default WarehouseList