import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { format, getInventoryItem } from '@utils/helpers'
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
      <div
        className='mx-4 rounded-t-md bg-white drop-shadow-lg mt-[-4.2rem] md:mt-[-6rem] md:mx-8 xl:mx-auto xl:max-w-7xl'>
        <div className='flex w-full items-center justify-start border-b px-4 pt-8 pb-6 border-instock-cloud md:px-10'>
          <img className='cursor-pointer' src={ArrowBackIcon} alt='back-arrow' onClick={() => navigate(-1)} />
          <h3 className='pl-2 capitalize page-header'>{inventoryDetail.item_name}</h3>
          <div
            onClick={() => navigate(`/inventory/${id}/edit`)}
            className='ml-auto cursor-pointer rounded-full bg-instock-indigo p-3 px-3.5 text-white md:flex
            md:items-center md:justify-center md:gap-2 md:py-1.5'
          >
            <img className='w-5 rounded-full' src={editIcon} alt='edit-icon' />
            <p className='hidden capitalize md:block'>edit</p>
          </div>
        </div>
        <div className='md:flex md:justify-center md:px-6'>
          <div
            className='px-8 pt-4 border-instock-cloud mx-[-1rem] md:mx-0 md:my-4 md:w-1/2 md:border-r md:border-b-0 md:px-6 md:py-0'>
            <p className='pb-1 table-header font-bold'>item description:</p>
            <p className='pb-4 body-med'>{inventoryDetail.description}</p>
            <p className='pb-1 table-header font-bold'>category:</p>
            <p className='capitalize body-med'>{inventoryDetail.category}</p>
          </div>
          <div
            className='flex flex-wrap p-4 px-8 border-instock-cloud mx-[-1rem] md:mx-0 md:my-4 md:w-1/2 md:border-b-0 md:border-l md:px-6 md:py-0'>
            <div className='w-1/2'>
              <p className='pb-1 table-header font-bold'>status:</p>
              <p
                className={`${inventoryDetail.quantity ? 'text-instock-green bg-instock-green-o' : 'text-instock-red bg-instock-red-o'} 
                        body-sm py-1 px-2 w-fit rounded-3xl text-center uppercase whitespace-nowrap`}>
                {inventoryDetail.status}
              </p>
            </div>
            <div className='w-1/2'>
              <p className='pb-1 table-header font-bold'>quantity:</p>
              <p className='pb-4 capitalize body-med'>{format(inventoryDetail.quantity)}</p>
            </div>
            <div>
              <p className='pb-1 table-header font-bold'>warehouse:</p>
              <p className='capitalize body-med'>{inventoryDetail.warehouse_name}</p>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
