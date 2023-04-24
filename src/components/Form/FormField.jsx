const FormField = ({ field, value, onChange, id }) => {
  return (
    <input
      className="input-text py-2 w-full mb-2 mt-1 border border-instock-cloud rounded-3xl capitalize
      placeholder:capitalize placeholder-text-instock-cloud px-4 active:border-instock-indigo"
      type="text"
      placeholder={id ? value : field.replace("_", " ")}
      value={value}
      onChange={(e) => onChange(prevState => ({...prevState, [field]: e.target.value }))}
      required
    />
  )
}

export default FormField
