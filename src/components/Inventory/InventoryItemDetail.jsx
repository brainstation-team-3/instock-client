import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getInventoryItem } from '@utils/helpers'
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'
import editIcon from '@assets/icons/edit-alt-24px.svg'

export default function InventoryItemDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [inventoryDetail, setInventoryDetail] = useState({})

  useEffect(() => {
    getInventoryItem(id).then((data) => {
      setInventoryDetail(data)
      setLoading(false)
    })
  }, [id])

  return (
    !loading && (
      <div className="mx-4 mt-[-4.2rem] rounded-t-md bg-white drop-shadow-lg md:mx-8 md:mt-[-6rem] xl:mx-auto xl:max-w-7xl">
        <div className="flex w-full items-center justify-start border-b border-instock-cloud px-4 pb-6 pt-8 md:px-10">
          <img className="cursor-pointer" src={ArrowBackIcon} alt="back-arrow" onClick={() => navigate('/inventory')} />
          <h3 className="page-header pl-2 capitalize">{inventoryDetail.item_name}</h3>
          <div
            onClick={() => navigate(`/inventory/${id}/edit`)}
            className="ml-auto cursor-pointer rounded-full bg-instock-indigo p-3 px-3.5 text-white md:flex
                 md:items-center md:justify-center md:gap-2 md:py-1.5"
          >
            <img className="w-5 rounded-full" src={editIcon} alt="edit-icon" />
            <p className="hidden capitalize md:block">edit</p>
          </div>
        </div>
        <div className='md:flex md:justify-center'>
            <div className='border-status-cloud mx-[-1rem] pt-4 px-8 md:mx-0 md:my-4 md:w-1/2 md:border-b-0 md:border-r md:px-6 md:py-0'>
                <p className='table-header pb-1'>item description:</p>
                <p className='body-med pb-4'>{inventoryDetail.description}</p>
                <p className='table-header pb-1'>category:</p>
                <p className='body-med capitalize'>{inventoryDetail.category}</p>
            </div>
            <div className='flex flex-wrap border-status-cloud mx-[-1rem] p-4 px-8 md:mx-0 md:my-4 md:w-1/2 md:border-b-0 md:border-l md:px-6 md:py-0'>
                <div className='w-1/2'>
                    <p className='table-header pb-1'>status:</p>
                    <p className={`${inventoryDetail.quantity ? 'text-instock-green bg-instock-green-o' : 'text-instock-red bg-instock-red-o'} 
                        body-sm py-1 px-2 w-fit rounded-3xl text-center uppercase whitespace-nowrap`}>
                            {inventoryDetail.status}
                    </p>
                </div>
                <div className='w-1/2'>
                    <p className='table-header pb-1'>quantity:</p>
                    <p className='body-med capitalize pb-4'>{inventoryDetail.quantity}</p>
                </div>
                <div>
                    <p className='table-header pb-1'>warehouse:</p>
                    <p className='body-med capitalize'>{inventoryDetail.warehouse_name}</p>
                </div>
            </div>
        </div>
      </div>
    )
  )
}