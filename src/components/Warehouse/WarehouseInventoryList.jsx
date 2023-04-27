import { useNavigate, useParams } from "react-router"
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'
import TableHeader from '@components/Table/TableHeader'
import { useEffect, useState } from "react"
import { getWarehouse, getWarehouseInventory } from "@utils/helpers"
import WarehouseInventoryItem from "./WarehouseInventoryItem"

export default function WarehouseInventoryList() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [warehouse, setWarehouse] = useState({})
    const [warehouseInventory, setWarehouseInventory] = useState([])

    const tableHeaders = ['inventory item', 'category', 'status', 'quantity']

    useEffect(() => {
        getWarehouse(id).then((data) => {
            setWarehouse(data)
        })

        getWarehouseInventory(id).then((inventoryData) => {
            setWarehouseInventory(inventoryData)
        })
    })

    return (
        <>
        <div className="mx-4 rounded-md bg-white shadow-md mt-[-4.2rem] md:mt-[-6rem] md:mx-8 xl:mx-auto xl:max-w-7xl">
            <div className="inline-flex w-full border-b pt-8 pb-6 pl-4 justify-left border-status-cloud">
                <img className="cursor-pointer" src={ArrowBackIcon} alt="back-arrow" onClick={() => navigate(`/warehouse/${id}`)} />
                <h3 className="pl-2 page-header">{warehouse.warehouse_name}</h3>
            </div>
            <div>
                <p className="table-header">warehouse address:</p>
                <p className='md:break-normal capitalize'>
                    {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
                </p>
                <p className="table-header">contact name:</p>
                <p className='capitalize'>{warehouse.contact_name}</p>
                <p className='capitalize'>{warehouse.contact_position || 'Warehouse Manager'}</p>
                <p className="table-header">contact information:</p>
                <p className='md:break-normal capitalize'>{`${warehouse.contact_phone}, ${warehouse.contact_email}`}</p>
            </div>
            <div>
                <TableHeader columns={tableHeaders} />
                {warehouseInventory.map((item, index) => (
                    <WarehouseInventoryItem key={index} item={item} />
                ))}
            </div>
        </div>
        </>
    )
}