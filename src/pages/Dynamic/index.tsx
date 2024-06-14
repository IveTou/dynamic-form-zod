import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { get } from "lodash"
import simple from "../../templates/facades/simple"
import styles from "./styles"
import fieldSelector from "../../utils/fieldSelector"

type FormData = z.infer<typeof simple.schema>

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
      <div style={styles}>  
        {simple.facade.map(params => {
          const field = fieldSelector(params, register)
          return (
            <div key={params.id} style={{ gridColumn: `span ${params.span || 1}`}}>
              <label>
                {params.name}
                {field}
              </label>
              <p>{get(errors, params.id, { message: undefined })?.message}</p>
            </div>
          )
        })}
      </div>
      
      <input type="submit" />
    </form>
  )
}

export default Dynamic
