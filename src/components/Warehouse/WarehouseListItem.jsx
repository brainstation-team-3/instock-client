import {useNavigate, Link} from 'react-router-dom'
import editIcon from '@/assets/icons/edit-24px.svg';
import deleteIcon from '@/assets/icons/delete_outline-24px.svg';
import chevron from '@/assets/icons/chevron_right-24px.svg';

function WarehouseListItem({item}) {
  const navigate = useNavigate();

  const {id, warehouse_name, address, city, country, contact_name, contact_phone, contact_email} = item;

  return (
    <div key={id} className="grid grid-cols-2 border-b bg-white px-6 py-8 shadow-md border-instock-cloud
    last:rounded-b-md md:grid-cols-5 md:items-center md:px-10 md:last:border-b-0"
    >
      <div className="mb-4 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">warehouse</p>
          <Link to={`/warehouse/${id}`}>
        <span className="flex items-center gap-1 py-1">
           <p className="cursor-pointer font-bold capitalize text-instock-indigo">{warehouse_name}</p>
           <img className="mt-1" src={chevron} alt="chevron-icon"/>
         </span>
          </Link>
      </div>
      <div className="col-start-1 mb-4 w-4/5 break-words md:col-start-2 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">address</p>
        <p className="capitalize">{address}, {city}, {country}</p>
      </div>
      <div className="col-start-2 row-start-1 mb-4 w-4/5 break-words md:col-start-3 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">contact name</p>
        <p className="capitalize">{contact_name}</p>
      </div>
      <div className="col-start-2 mb-4 break-words md:col-start-4 md:mb-0">
        <p className="text-sm font-bold uppercase text-instock-slate md:hidden">contact information</p>
        <p>{contact_phone}</p>
        <p>{contact_email}</p>
      </div>
      <div
        className="col-span-2 flex items-center justify-between md:col-span-1 md:mr-2 md:mb-0 md:justify-end md:gap-4">
        <img className="cursor-pointer md:w-7" src={deleteIcon} alt="delete-icon"/>
        <img onClick={() => navigate(`/warehouse/${id}/edit`)}
             className="cursor-pointer justify-self-end md:w-7"
             src={editIcon}
             alt="delete-icon"
        />
      </div>
    </div>
  )
}

export default WarehouseListItem
