import WarehouseListItem from './WarehouseListItem'
import TableHeader from '@components/Table/TableHeader'

function WarehouseList({ warehouseList, onDelete, setCurrentWarehouse }) {

  const tableHeaders = ['warehouse', 'address', 'contact name', 'contact information', 'actions']

  return (
    <div className='drop-shadow-lg bg-instock-light-grey'>
      <TableHeader columns={tableHeaders} />
      {warehouseList.map((item) => (
        <WarehouseListItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          setCurrentWarehouse={setCurrentWarehouse}
        />
      ))}
    </div>
  )
}

export default WarehouseList
