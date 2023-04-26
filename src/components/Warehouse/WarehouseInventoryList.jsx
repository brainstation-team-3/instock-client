import { useNavigate } from "react-router"
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'
import TableHeader from '@components/Table/TableHeader'
import { useEffect, useState } from "react"
import { getWarehouseInventory } from "../../utils/helpers"

export default function WarehouseInventoryList() {

    const [warehouseInventory, setWarehouseInventory] = useState([])

    const navigate = useNavigate()

    const tableHeaders = ['inventory item', 'category', 'status', 'quantity']

    useEffect(() => {
        getWarehouseInventory({warehouse_id}).then((data) => {
            setWarehouseInventory(data)
        })
    })

    return (
        <>
        <div className="mx-4 rounded-md bg-white shadow-md mt-[-4.2rem] md:mt-[-6rem] md:mx-8 xl:mx-auto xl:max-w-7xl">
            <div className="inline-flex w-full border-b pt-8 pb-6 pl-4 justify-left border-status-cloud">
                <img className="cursor-pointer" src={ArrowBackIcon} alt="back-arrow" onClick={() => navigate('/warehouse')} />
                <h3 className="pl-2 page-header">{warehouse_name}</h3>
            </div>
            <div>
                <p className="table-header">warehouse address:</p>
                <p className='capitalize'>{warehouse_address}</p>
                <p className="table-header">contact name:</p>
                <p className='capitalize'>{contact_name}</p>
                <p className="table-header">contact information:</p>
                <p className='capitalize'>{address}, {city}, {country}</p>
            </div>
            <div>
                <TableHeader columns={tableHeaders} />
                {warehouseInventory.map((item, index) => (
                    <InventoryListItem  />
                ))}
            </div>
        </div>
        </>
    )
}