const FormField = ({ field, value, onChange }) => {
  return (
    <input
      className="input-text h-9 w-full mb-2 mt-1 border border-solid border-instock-cloud
      placeholder:capitalize rounded-[1.25rem] placeholder-text-instock-cloud px-4
      active:border-instock-indigo md:h-[2.375rem]"
      type="text"
      placeholder={field.replace("_", " ")}
      value={value}
      onChange={(e) => onChange(prevState => ({...prevState, [field]: e.target.value }))}
      required
    />
  )
}

export default FormField
