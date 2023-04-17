import React from "react";
import ArrowBackIcon from '../assets/icons/arrow_back-24px.svg'
import FormField from "../components/Form/FormField"
import CTA from "../components/Form/CTA"
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

export default function AddNewWarehouse() {
    return (
        <>
        <NavBar />
        <div className="section">
          <div className="inline-flex divide-y">
            <ArrowBackIcon />
            <h1 className="page-header">Add New Warehouse</h1>
          </div>
          <form className='divide-y'>
            <h2 className="subheader">Warehouse Details</h2>
            <label>
              <span className="mb-1 table-header">Warehouse Name</span>
              <FormField
                type="text"
                name="warehouse-name"
                placeholder="Warehouse Name"
              />
            </label>
            <label>
              <span className="mb-1 table-header">Street Address</span>
              <FormField
                type="text"
                name="address"
                placeholder="Street Address"
              />
            </label>
            <label>
              <span className="mb-1 table-header">City</span>
              <FormField
                type="text"
                name="city"
                placeholder="City"
              />
            </label>
            <label>
              <span className="mb-1 table-header">Country</span>
              <FormField
                type="text"
                name="country"
                placeholder="Country"
              />
            </label>
          </form>
          <form>
            <h2 className="subheader">Contact Details</h2>
            <label>
              <span className="mb-1 table-header">Contact Name</span>
              <FormField
                type="text"
                name="contact-name"
                placeholder="Contact Name"
              />
            </label>
            <label>
              <span className="mb-1 table-header">Position</span>
              <FormField
                type="text"
                name="position"
                placeholder="Position"
              />
            </label>
            <label>
              <span className="mb-1 table-header">Phone Number</span>
              <FormField
                type="text"
                name="phone"
                placeholder="Phone Number"
              />
            </label>
            <label>
              <span className="mb-1 table-header">Email</span>
              <FormField
                type="text"
                name="email"
                placeholder="Email"
              />
            </label>
          </form>
          <CTA />
        </div>
        <Footer />
        </>
      )
}