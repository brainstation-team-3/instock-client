import React from 'react';
import { Link } from 'react-router-dom';
import editIcon from '@/assets/icons/edit-24px.svg';
import deleteIcon from '@/assets/icons/delete_outline-24px.svg';
import chevron  from '@/assets/icons/chevron_right-24px.svg';


//to do: move the item map up a level and passdown the values as props. change header name, classes, and values to props

function WarehouseListItem({ item }) {
  const { id, warehouse_name, address, city, country, contact_name, contact_phone, contact_email } = item;
  return (
  <div className='border-b-2 border-solid border-instock-cloud'>  
        <div className=' box-border p-4 md:px-9 flex  flex-wrap md:flex-nowrap md:gap-4 md:items-center md:justify-between w-full'>
          <div className='order-1 max-md:basis-1/2 md:basis-1/6 md:flex-none box-border p-2  md:px-0'>
            <p className='font-semibold text-mh4 md:text-h4 text-instock-slate md:hidden'>WAREHOUSE</p>
            <Link className='text-instock-indigo' to={`/warehouse/${id}`}>
              <p className='text-mh3 md:text-h3 font-semibold inline hover:underline '>{warehouse_name}</p>
              <img src={chevron} alt='chevron' className='inline' />
              </Link>
          </div>
          <div className='order-3 md:order-2 max-md:basis-1/2 md:basis-1/6 md:flex-none xl:grow box-border p-2 md:px-0'>
            <p className='font-semibold text-mh4 md:text-h4 text-instock-slate md:hidden'>ADDRESS</p>
            <p className='text-mp2 md:text-p2 md:break-normal'> {address}, {city}, {country}</p>
          </div>
          <div className=' order-2 md:order-3 max-md:basis-1/2 md:basis-1/6  box-border  p-2 md:p-0'>
            <p className='font-semibold text-mh4 md:text-h4 text-instock-slate md:hidden'>CONTACT NAME</p>
            <p className='text-mp2 md:text-p2'>{contact_name}</p>
          </div>
          <div className='order-4 max-md:basis-1/2 md:basis-3/12  box-border  p-2 md:p-0'>
            <p className='font-semibold text-mh4 md:text-h4 text-instock-slate md:hidden'>CONTACT INFORMATION</p>
            <p className='text-mp2 md:text-p2'>{contact_phone}</p>
            <p className='text-mp2 md:text-p2'>{contact_email}</p>
          </div>
          <div className='order-5 flex justify-between md:justify-end md:gap-5 w-full md:w-auto md:basis-1/12 md:grow-0 p-2 md:p-0 '>
            <img src={deleteIcon} alt='delete' className='w-6' />
            <img src={editIcon} alt='edit' className='w-6' />
          </div>
        </div>
  </div>
  )
}

export default WarehouseListItem