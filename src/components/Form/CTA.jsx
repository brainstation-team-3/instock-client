const CTA = ({ submitHandler }) => {
    return (
      <div className="inline-flex w-full my-4 px-4 md:justify-end md:mb-4">
        <button className="label-btn h-9 w-full border border-solid rounded-[1.25rem] border-instock-cloud bg-instock-white text-instock-cloud hover:border-instock-indigo hover:text-instock-indigo md:h-[2.375rem] md:w-fit md:px-4">
          Cancel
        </button>
        <button onClick={submitHandler} className="label-btn ml-4 h-9 w-full rounded-[1.25rem] bg-instock-indigo text-instock-white hover:bg-instock-graphite md:h-[2.375rem] md:w-fit md:px-4">
          + Add Warehouse
        </button>
      </div>
    )
  }
  
  export default CTA
