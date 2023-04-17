const FormField = ({ name, placeholder }) => {
  return (
    <input
      className="input-text h-9 w-full mb-2 mt-1 border border-solid border-instock-cloud rounded-[1.25rem] placeholder-text-instock-cloud px-4 active:border-instock-indigo md:h-[2.375rem]"
      type="text"
      name={name}
      placeholder={placeholder}
    />
  )
}

export default FormField
