import { ReactElement } from "react";
import { get } from "lodash"
import { FieldErrors } from "react-hook-form";
import FormField from "../types/FormField";


interface FieldWrapperProps {
  params: FormField,
  errors: FieldErrors<{[x: string]: unknown;}>
  children: ReactElement
}

const FieldWrraper = ({ params, errors, children }: FieldWrapperProps) => {
  return (
    <div key={params.id} style={{ gridColumn: `span ${params.span || 1}`}}>
        <label>
        {params.name}
        {children}
        </label>
        <p>{get(errors, params.id, { message: undefined })?.message?.toString()}</p>
    </div>
  )
}

export default FieldWrraper