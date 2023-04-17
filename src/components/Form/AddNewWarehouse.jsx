import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'
import FormField from '@components/Form/FormField'
import CTA from '@components/Form/CTA'

export default function AddNewWarehouse() {

  const [newWarehouse, setNewWarehouse] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    position: "",
    contact_phone: "",
    contact_email: ""
  });

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/warehouse")
  };

  const onChangeHandler = (event) => {
    setNewWarehouse({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const submitHandler = () => {
    useEffect(() => {
      postData(newWarehouse)
    })
  }

  return (
    <>
      <div className="section bg-instock-light-grey shadow-md">
        <div className="inline-flex justify-left pl-4 pt-9 pb-7 border-b w-full">
          <img className='cursor-pointer' src={ArrowBackIcon} alt="back-arrow" onClick={goBack} />
          <h1 className="page-header pl-4">Add New Warehouse</h1>
        </div>
        <div className='md:inline-flex md:pb-4'>
          <form className='py-4 px-4 border-b md:border-r md:border-b-0'>
            <h2 className="subheader pb-5">Warehouse Details</h2>
            <label>
              <span className="label-btn pb-1">Warehouse Name</span>
              <FormField name="warehouse_name" placeholder="Warehouse Name" onChange={onChangeHandler} />
            </label>
            <label>
              <span className="label-btn pb-1">Street Address</span>
              <FormField name="address" placeholder="Street Address" onChange={onChangeHandler} />
            </label>
            <label>
              <span className="label-btn pb-1">City</span>
              <FormField name="city" placeholder="City" onChange={onChangeHandler} />
            </label>
            <label>
              <span className="label-btn pb-1">Country</span>
              <FormField name="country" placeholder="Country" onChange={onChangeHandler} />
            </label>
          </form>
          <form className='py-4 px-4'>
            <h2 className="subheader pb-5">Contact Details</h2>
            <label>
              <span className="label-btn pb-1">Contact Name</span>
              <FormField name="contact_name" placeholder="Contact Name" onChange={onChangeHandler} />
            </label>
            <label>
              <span className="label-btn pb-1">Position</span>
              <FormField name="position" placeholder="Position" onChange={onChangeHandler} />
            </label>
            <label>
              <span className="label-btn pb-1">Phone Number</span>
              <FormField name="contact_phone" placeholder="Phone Number" onChange={onChangeHandler} />
            </label>
            <label>
              <span className="label-btn pb-1">Email</span>
              <FormField name="contact_email" placeholder="Email" onChange={onChangeHandler} />
            </label>
          </form>
        </div>
        <CTA submitHandler={submitHandler} />
      </div>
    </>
  )
}
