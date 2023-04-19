import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import FormField from '@components/Form/FormField'
import {createWarehouse} from "@utils/helpers";
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'

export default function NewWarehouse() {

  const navigate = useNavigate();

  const [warehouseFields, setWarehouseFields] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: ""
  })

  const [contactFields, setContactFields] = useState({
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: ""
  })

  const goBack = () => {
    navigate("/warehouse")
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      newWarehouse: {
        ...warehouseFields,
        ...contactFields
      }
    }
    createWarehouse(data).then((res) => {
      e.target.reset();
    })
  }

  return (
    <>
      <div className="mx-4 rounded-md bg-white shadow-md mt-[-4.2rem] md:mt-[-6rem] md:mx-8 xl:mx-auto xl:max-w-7xl">
        <div className="inline-flex w-full border-b pt-8 pb-6 pl-4 justify-left border-instock-cloud">
          <img className='cursor-pointer' src={ArrowBackIcon} alt="back-arrow" onClick={goBack}/>
          <h3 className="pl-2 page-header">Add New Warehouse</h3>
        </div>
        <div className='md:flex'>
          <form className='mb-6 rounded-b-md border-b pt-4 md:mb-0'
                onSubmit={submitHandler}
          >
            <div className="section md:mb-6 md:flex">
              <div
                className="border-b p-4 border-instock-cloud mx-[-1rem] md:mx-0 md:my-4 md:border-r md:border-b-0 md:px-6 md:py-0">
                <h4 className="pb-5 subheader">Warehouse Details</h4>
                {Object.keys(warehouseFields).map((field, index) => (
                  <label key={index}>
                    <span className="pb-1 capitalize label-btn">{field.replace("_", " ")}</span>
                    <FormField field={field}
                               onChange={setWarehouseFields}
                               value={warehouseFields.field}
                    />
                  </label>
                ))}
              </div>
              <div className="p-4 mx-[-1rem] md:mx-0 md:my-4 md:px-6 md:py-0">
                <h4 className="pb-5 subheader">Contact Details</h4>
                {Object.keys(contactFields).map((field, index) => (
                  <label key={index}>
                    <span className="pb-1 capitalize label-btn">{field.replace("_", " ")}</span>
                    <FormField field={field}
                               onChange={setContactFields}
                               value={contactFields.field}
                    />
                  </label>
                ))}
              </div>
            </div>
            <div className="flex w-full items-center gap-4 px-6 py-4 bg-instock-light-grey md:justify-end">
              <button type="reset"
                      className="label-btn w-1/2 border rounded-full
                      text-instock-cloud hover:border-instock-indigo py-2 hover:text-instock-indigo md:w-28 md:px-4
                      duration-300 ease-in-out"
              >
                Cancel
              </button>
              <button type="submit"
                      className="label-btn w-1/2 py-2 rounded-full bg-instock-indigo text-instock-white
                      hover:bg-instock-black md:w-36 md:px-4 md:mr-8 duration-300 ease-in-out"
              >
                + Add Warehouse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
