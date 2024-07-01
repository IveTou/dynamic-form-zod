import { LegacyRef, forwardRef } from "react";
import { SelectOption } from "../types/FormField";

interface CustomSelectProps {
  options?: SelectOption[],
  disabled?: boolean
}

const CustomSelect = forwardRef(({ options, disabled, ...args }: CustomSelectProps, ref: LegacyRef<HTMLSelectElement>) => {
  return (
    <select {...args} ref={ref} style={{ width: '100%' }} disabled={disabled}>
      {options?.map(({ label, value }) => <option key={label} value={value}>{label}</option>)}
    </select>
  )
})

export default CustomSelect