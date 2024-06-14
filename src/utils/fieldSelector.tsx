import { UseFormRegister } from "react-hook-form";
import CustomSelect from "../components/CustomSelect";
import FormField from "../types/FormField";
import { ReactElement } from "react";
import { FieldType } from "../types/FieldType";

function fieldSelector(params: FormField, register: UseFormRegister<any>) {
  const componentMap: Record<FieldType, ReactElement> = {
    INPUT: <input style={{ width: '100%' }} {...register(params.id as string)}/>,
    SELECT: <CustomSelect {...params} {...register(params.id as string)}/>,
  }
  
  return componentMap[params.type]
}

export default fieldSelector