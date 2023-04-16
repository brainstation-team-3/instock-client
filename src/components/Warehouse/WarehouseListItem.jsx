import React from 'react'
import editIcon from '@/assets/icons/edit-24px.svg';
import deleteIcon from '@/assets/icons/delete_outline-24px.svg';
import chevron  from '@/assets/icons/chevron_right-24px.svg';

function WarehouseListItem({ item }) {
  const { id, warehouse_name, address, city, country, contact_name, contact_phone, contact_email } = item;
  return (
      <div className=' box-border py-2 flex  flex-wrap w-full'>
        <div className='order-1 basis-1/2 box-border p-2'>
          <p className='font-semibold text-mh4 text-instock-slate'>WAREHOUSE</p>
          <a href="" className='text-instock-indigo'>
            <p className='text-mh3 font-semibold inline'>{warehouse_name}</p>
            <img src={chevron} alt='chevron' class='inline' />
            </a>
        </div>
        <div className='order-3 basis-1/2 box-border p-2'>
          <p className='font-semibold text-mh4 text-instock-slate'>ADDRESS</p>
          <p className='text-mp2'> {address}, {city}, {country}</p>
        </div>
        <div className=' order-2 basis-1/2 box-border  p-2'>
          <p className='font-semibold text-mh4 text-instock-slate'>CONTACT NAME</p>
          <p className='text-mp2'>{contact_name}</p>
        </div>
        <div className='order-4 basis-1/2 box-border  p-2'>
          <p className='font-semibold text-mh4 text-instock-slate'>CONTACT INFORMATION</p>
          <p className='text-mp2'>{contact_phone}</p>
          <p className='text-mp2'>{contact_email}</p>
        </div>
        <div className='order-5 flex justify-between w-full p-2 '>
          <img src={deleteIcon} alt='delete' className='' />
          <img src={editIcon} alt='edit' className='' />
        </div>
      </div>
  )
}

export default WarehouseListItem