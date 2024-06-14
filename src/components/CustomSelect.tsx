import FormField from "../types/FormField";

function CustomSelect(props: FormField) {
  return (
    <select {...props}>
      {props?.options?.map(({ label, value }) => <option key={label} value={value}>{label}</option>)}
    </select>
  )
}

export default CustomSelect