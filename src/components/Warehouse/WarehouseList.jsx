import WarehouseListItem from './WarehouseListItem';
import WarehouseTableHeader from "./WarehouseTableHeader";

function WarehouseList({warehouseList}) {

  const tableHeaders = ['warehouse', 'address', 'contact name', 'contact information', 'actions']

  return (
    <div className="bg-instock-light-grey">
      <WarehouseTableHeader columns={tableHeaders}/>
      {warehouseList.map((item) => (<WarehouseListItem key={item.id} item={item}/>))}
    </div>
  )
}

export default WarehouseList
