import { LegacyRef, forwardRef } from "react";
import { SelectOption } from "../types/FormField";

interface CustomSelectProps {
  options?: SelectOption[]
}

const CustomSelect = forwardRef(({ options, ...args }: CustomSelectProps, ref: LegacyRef<HTMLSelectElement>) => {
  return (
    <select {...args} ref={ref} style={{ width: '100%' }}>
      {options?.map(({ label, value }) => <option key={label} value={value}>{label}</option>)}
    </select>
  )
})

export default CustomSelect