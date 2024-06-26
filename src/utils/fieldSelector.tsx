import { UseFormRegister } from "react-hook-form";
import CustomSelect from "../components/CustomSelect";
import FormField from "../types/FormField";
import { ReactElement } from "react";
import { FieldType } from "../types/FieldType";

function fieldSelector(fields: FormField ,register: UseFormRegister<any>, isConstrained?: boolean) {
  const componentMap: Record<FieldType, ReactElement> = {
    INPUT: <input style={{ width: '100%' }} {...register(fields.id as string)} disabled={isConstrained} />,
    SELECT: <CustomSelect {...fields} {...register(fields.id as string)} disabled={isConstrained} />,
  }
  
  return componentMap[fields.type]
}

export default fieldSelector