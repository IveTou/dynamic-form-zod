import { FieldType } from "./FieldType"

export type SelectOption = { label: string, value: string }

type FormField = {
  name: string,
  id: string,
  type: FieldType,
  options?: SelectOption[]
  span?: number,
  required?: boolean,
  constraint?: {
    id: string,
    value: string | number,
  }
}

export default FormField

