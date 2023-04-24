import React, { useState, useEffect } from 'react'
import { getWarehouse } from '@utils/helpers'
import { useParams } from'react-router-dom'
import { Link } from 'react-router-dom'
import backArrow from '@assets/icons/arrow_back-24px.svg';
import edit from '@assets/icons/edit-24px.svg';
import axios from 'axios'

function WarehouseDetail() {

  const {id} =useParams();
  const [loading, setLoading] = useState(true)
  const [warehouseDetail, setWarehouseDetail] = useState([])

  useEffect(() => {
    getWarehouse(id).then((data) => {
      setWarehouseDetail(data)
      setLoading(false)

    })
  }, [])

  if (loading) {
    <div>Loading...</div>
  }

return (
      <section className=' -mt-14 md:-mt-20 mx-3 md:mx-6 bg-white xl:max-w-5xl xl:mx-auto'>
        <div className='px-6 py-7 md:px-9 xl:px-10 flex md:flex-row gap-y-4 items-center md:gap-y-0 md:gap-x-4'>
          <Link to='/'><img src={backArrow} alt="back_arrow" className='h-7 '/></Link> 
          <h1 className='text-mh1 md:text-h1 font-semibold mr-auto ml-2 '>Washington</h1>
          <div className='h-9 w-9  md:flex md:w-20 md:items-center md:justify-center rounded-full bg-instock-indigo'>
          <img src={edit} alt="edit icon " className='h-7 w-7 fill-white text-white' />
          <span className='max-md:hidden  text-white text-h3 text-center'>Edit</span>
          </div>
        </div>
        <div className='flex flex-wrap md:justify-between p-4 h-48 md:h-auto border-y-2 md:border-b-0 border-solid border-instock-cloud'>
        <div className= 'max-md:basis-5/6 md:basis-2/6   xl:grow box-border p-2 md:px-0 md:pr-20'>
              <p className='font-semibold text-mh4 pb-1 md:text-h4 text-instock-slate '>WAREHOUSE ADDRESS:</p>
              <p className='text-mp2 md:text-p2 md:break-normal'>{`${warehouseDetail.address}, ${warehouseDetail.city}, ${warehouseDetail.country}`}</p>
            </div>
            <div className=' max-md:basis-3/6 md:basis-2/6  md:border-l-2 md:border-solid md:border-instock-cloud box-border  max-md:p-2 md:pl-12'>
              <p className='font-semibold text-mh4 pb-1 md:text-h4 text-instock-slate '>CONTACT NAME:</p>
              <p className='text-mp2 md:text-p2'>{warehouseDetail.contact_name}</p>
              <p className='text-mp2 md:text-p2'>{warehouseDetail.contact_position}</p>
            </div>
            <div className=' max-md:basis-3/6 md:basis-1/6  box-border  p-2 md:p-0 xl:basis-4/12'>
              <p className='font-semibold text-mh4 pb-1 md:text-h4 text-instock-slate '>CONTACT INFORMATION:</p>
              <p className='text-mp2 md:text-p2'>{warehouseDetail.contact_phone}</p> 
              <p className='text-mp2 md:text-p2'>{warehouseDetail.contact_email}</p>
            </div>
        </div>
  </section>
)
}
export default WarehouseDetail