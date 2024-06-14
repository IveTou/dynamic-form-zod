import { UseFormRegister, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { get } from "lodash"
import simple from "../templates/facades/simple"
import FormField from "../types/FormField"
import CustomSelect from "../components/CustomSelect"

type FormData = z.infer<typeof simple.schema>

function fieldSelector(params: FormField, register: UseFormRegister<any>) {
  return {
    INPUT: <input {...register(params.id as string)}/>,
    SELECT: <CustomSelect {...params} {...register(params.id as string)}/>,
  }[params.type]
}

function Dynamic() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(simple.schema),
  })
  const onSubmit = (data: any) => {
    console.log('submit', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {simple.facade.map(params => {
        const field = fieldSelector(params, register)
        return (
          <div key={params.id}>
            <label>
              {params.name}
              {field}
            </label>
            <p>{get(errors, params.id, { message: undefined })?.message}</p>
          </div>
        )
      })}
      
      <input type="submit" />
    </form>
  )
}

export default Dynamic
