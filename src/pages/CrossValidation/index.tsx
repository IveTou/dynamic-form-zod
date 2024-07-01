import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import withContraints from "../../templates/facades/with_constraints"
import fieldSelector from "../../utils/fieldSelector"
import FieldWrraper from "../../components/FieldWrapper"
import styles from "./styles"

type FormData = z.infer<typeof withContraints.schema>

function CrossValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(withContraints.schema),
    mode: "onChange"
  })
  const onSubmit = (data: any) => {
    console.log('submit', data)
  }

  const watchFields = watch()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={styles}>  
        {withContraints.facade.map(params => {
          const field = fieldSelector(params, register, watchFields)
          return <FieldWrraper key={params.name} params={params} errors={errors}>{field}</FieldWrraper>
        })}
      </div>  
      <input type="submit" />
    </form>
  )
}

export default CrossValidation
