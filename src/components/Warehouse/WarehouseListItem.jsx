import React from 'react'

function WarehouseListItem({ item }) {
  const { id, warehouse_name, address, city, country, contact_name, contact_phone, contact_email } = item;
  return (
      <div className='py-4 flex flex-col flex-wrap h-52 w-full'>
        <div className=' w-2/5 p-2'>
          <p>WAREHOUSE</p>
          <p>{warehouse_name}</p>
        </div>
        <div className=' w-2/5 p-2'>
          <p>ADDRESS</p>
          <p>{address}</p>
        </div>
        <div className=' w-2/5 p-2'>
          <p>CONTACT NAME</p>
          <p>{contact_name}</p>
        </div>
        <div className=' w-2/5 p-2'>
          <p>CONTACT INFORMATION</p>
          <p>{contact_phone}</p>
        </div>
        <div className=''>
          <p></p>
          <p></p>
        </div>
      </div>
  )
}

export default WarehouseListItem