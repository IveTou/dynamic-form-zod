import { LegacyRef, forwardRef } from "react";
import { SelectOption } from "../types/FormField";

interface CustomSelectProps {
  options?: SelectOption[]
}

const CustomSelect = forwardRef((props: CustomSelectProps, ref: LegacyRef<HTMLSelectElement>) => {
  return (
    <select ref={ref}>
      {props.options?.map(({ label, value }) => <option key={label} value={value}>{label}</option>)}
    </select>
  )
})

export default CustomSelect