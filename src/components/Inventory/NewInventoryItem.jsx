import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import ArrowBackIcon from '@assets/icons/arrow_back-24px.svg'
import ArrowDropDown from '@assets/icons/arrow_drop_down-24px.svg'
import { ButtonPrimary } from '../Button/Button';

export default function NewInventoryItem() {

    const navigate = useNavigate();

    const [detailsFields, setDetailsFields] = useState({
        item_name: "",
        description: "",
        category: ""
    });

    const [availabilityFields, setAvailabilityFields] = useState({
        status: "",
        quantity: 0,
        warehouse: ""
    });

    const goBack = () => {
        navigate("/inventory")
      };

    return (
        <>
        <div className="mx-4 rounded-md bg-white shadow-md mt-[-4.2rem] md:mt-[-6rem] md:mx-8 xl:mx-auto xl:max-w-7xl">
            <div className="inline-flex w-full border-b pt-8 pb-6 pl-4 justify-left border-instock-cloud">
                <img className='cursor-pointer' src={ArrowBackIcon} alt="back-arrow" onClick={goBack}/>
                <h3 className="pl-2 page-header">Add New Inventory Item</h3>
            </div>
            <div className='md:flex'>
                <form className='mb-6 rounded-b-md border-b pt-4 md:mb-0'
                    // onSubmit={submitHandler}
                >
                    <div className="section md:mb-6 md:flex">
                        <div
                            className="border-b p-4 border-instock-cloud mx-[-1rem] md:mx-0 md:my-4 md:border-r md:border-b-0 md:px-6 md:py-0">
                            <h4 className="pb-5 subheader">Item Details</h4>
                            <label>
                                <span className='pb-1 capitalize label-btn'>Item Name</span>
                                <input type='text'
                                    className="input-text py-2 w-full mb-2 mt-1 border border-instock-cloud rounded-3xl
                                    placeholder:capitalize placeholder-text-instock-cloud px-4 active:border-instock-indigo"
                                    placeholder='Item Name'
                                />
                            </label>
                            <label>
                                <span className='pb-1 capitalize label-btn'>Description</span>
                                <textarea className="input-text py-2 w-full mb-2 mt-1 border border-instock-cloud rounded-3xl
                                    placeholder:capitalize placeholder-text-instock-cloud px-4 active:border-instock-indigo"
                                    placeholder='Please enter a brief item description...'
                                />
                            </label>
                            <label>
                                <span className='pb-1 capitalize label-btn'>Category</span>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                                        <img src={ArrowDropDown} />
                                    </div>
                                    <select className="input-text appearance-none py-2 w-full mb-2 mt-1 border border-instock-cloud rounded-3xl
                                        placeholder:capitalize placeholder-text-instock-cloud px-4 active:border-instock-indigo"
                                        placeholder='Please select'
                                    />
                                </div>
                            </label>
                            <div className="p-4 mx-[-1rem] md:mx-0 md:my-4 md:px-6 md:py-0">
                                <h4 className="pb-5 subheader">Contact Details</h4>
                                <label className='flex flex-wrap pb-2'>
                                    <span className='pb-1 capitalize label-btn w-full'>Status</span>
                                    <div className='w-2/4'>
                                        <input type='radio' value="in-stock" defaultChecked />
                                        <span className='input-text pl-2'>In Stock</span>
                                    </div>
                                    <div>
                                        <input type='radio' value="out-of-stock" />
                                        <span className='input-text pl-2'>Out of Stock</span>
                                    </div>
                                </label>
                                <label>
                                    <span className='pb-1 capitalize label-btn'>Quantity</span>
                                    <input className="input-text py-2 w-full mb-2 mt-1 border border-instock-cloud rounded-3xl
                                    placeholder:capitalize placeholder-text-instock-cloud px-4 active:border-instock-indigo"
                                        type='number'
                                        value="0"
                                    />
                                </label>
                                <label className='pt-4'>
                                    <span className='pb-1 capitalize label-btn'>Warehouse</span>
                                    <div className='relative'>
                                        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                                            <img src={ArrowDropDown} />
                                        </div>
                                        <select className="input-text appearance-none py-2 w-full mb-2 mt-1 border border-instock-cloud rounded-3xl
                                        placeholder:capitalize placeholder-text-instock-cloud px-4 active:border-instock-indigo"
                                        placeholder='Please select'
                                        />
                                        </div>
                                </label>
                            </div>
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
                        <ButtonPrimary
                            type="submit"
                            link=""
                            text="+ Add Item"
                        />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}