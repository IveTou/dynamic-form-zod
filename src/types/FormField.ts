import { FieldType } from "./FieldType"

type FormField = {
  name: string,
  id: string,
  type: FieldType,
  options?: { label: string, value: string }[]
  span?: number,
  required?: boolean,
}

export default FormField