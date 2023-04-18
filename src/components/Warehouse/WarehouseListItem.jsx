import {Link} from 'react-router-dom'
import editIcon from '@/assets/icons/edit-24px.svg';
import deleteIcon from '@/assets/icons/delete_outline-24px.svg';
import chevron from '@/assets/icons/chevron_right-24px.svg';

function WarehouseListItem({item}) {
  const {id, warehouse_name, address, city, country, contact_name, contact_phone, contact_email} = item;

  return (
    <div key={id} className="border-instock-cloud shadow-md border-b md:last:border-b-0 bg-white py-8 px-6 grid grid-cols-2 last:rounded-b-md md:grid-cols-5 md:items-center"
    >
      <div className="mb-4 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">warehouse</p>
        <span className="flex items-center gap-1 py-1">
           <p className="cursor-pointer font-bold capitalize text-instock-indigo">{warehouse_name}</p>
           <img className="mt-1" src={chevron} alt="chevron-icon"/>
         </span>
      </div>
      <div className="mb-4 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">contact name</p>
        <p className="capitalize">{contact_name}</p>
      </div>
      <div className="mb-4 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">address</p>
        <p>{address}</p>
      </div>
      <div className="mb-4 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">contact information</p>
        <p>{contact_phone}</p>
        <p>{contact_email}</p>
      </div>
      <div className="col-span-2 md:mb-0 flex items-center justify-between md:col-span-1 md:justify-end md:gap-6">
        <img className="cursor-pointer md:w-7" src={deleteIcon} alt="delete-icon"/>
        <img className="cursor-pointer justify-self-end md:w-7" src={editIcon} alt="delete-icon"/>
      </div>
    </div>
  )
}

export default WarehouseListItem
