import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import FormField from '@components/Form/FormField'
import {createWarehouse, editWarehouse, getWarehouse} from "@utils/helpers";
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'

export default function AddEditWarehouse() {

  const {warehouseId} = useParams()
  const navigate = useNavigate();

  const warehouseData = {
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: ""
  }

  const [fields, setFields] = useState(warehouseData)
  const contactFields = Object.keys(fields).filter(field => field.startsWith('contact'))
  const warehouseFields = Object.keys(fields).filter(field => !contactFields.includes(field))

  useEffect(() => {

    if (warehouseId) {
      async function updateFields() {
        const data = await getWarehouse(warehouseId)
        delete data.id
        setFields(data)
      }
      updateFields()
    }

  }, [warehouseId]);

  const submitHandler = async (e) => {
    e.preventDefault();

    warehouseId
      ? await editWarehouse(warehouseId, fields)
      : await createWarehouse(fields)

    setFields(warehouseData)
    navigate('/warehouse')
  }

    return (
      <>
        <div className="mx-4 rounded-md bg-white shadow-md mt-[-4.2rem] md:mt-[-6rem] md:mx-8 xl:mx-auto xl:max-w-7xl">
          <div className="inline-flex w-full border-b pt-8 pb-6 pl-4 justify-left border-instock-cloud">
            <img className='cursor-pointer' src={ArrowBackIcon} alt="back-arrow" onClick={() => navigate('/warehouse')}/>
            <h3 className="pl-2 page-header capitalize">
              {warehouseId ? 'edit warehouse' : 'add new warehouse'}
            </h3>
          </div>
          <div className='md:flex'>
            <form className='mb-6 rounded-b-md border-b pt-4 md:mb-0'
                  onSubmit={submitHandler}
            >
              <div className="section md:mb-6 md:flex">
                <div
                  className="border-b p-4 border-instock-cloud mx-[-1rem] md:mx-0 md:my-4 md:border-r md:border-b-0 md:px-6 md:py-0">
                  <h4 className="pb-5 subheader">Warehouse Details</h4>
                  {warehouseFields
                    .map((field, index) => (
                      <label key={index}>
                        <span className="pb-1 capitalize label-btn">{field.replace("_", " ")}</span>
                        <FormField field={field}
                                   onChange={setFields}
                                   value={fields[field]}
                                   id={warehouseId}
                        />
                      </label>
                    ))}
                </div>
                <div className="p-4 mx-[-1rem] md:mx-0 md:my-4 md:px-6 md:py-0">
                  <h4 className="pb-5 subheader">Contact Details</h4>
                  {contactFields
                    .map((field, index) => (
                      <div key={index}>
                        <label>
                          <span className="pb-1 capitalize label-btn">{field.replace("_", " ")}</span>
                          <FormField field={field}
                                     onChange={setFields}
                                     value={fields[field]}
                                     id={warehouseId}
                          />
                        </label>
                      </div>
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
                        className="label-btn w-1/2 py-2 rounded-full bg-instock-indigo capitalize text-instock-white
                      hover:bg-instock-black md:w-36 md:px-4 md:mr-8 duration-300 ease-in-out"
                >
                  {warehouseId ? 'save' : '+ add warehouse'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}
