import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import withContraints from "../../templates/facades/with_constraints"
import styles from "./styles"
import fieldSelector from "../../utils/fieldSelector"
import FieldWrraper from "../../components/FieldWrapper"

type FormData = z.infer<typeof withContraints.schema>

function CrossValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(withContraints.schema),
    mode: "onChange"
  })
  const onSubmit = (data: any) => {
    console.log('submit', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={styles}>  
        {withContraints.facade.map(params => {
          const field = fieldSelector(params, register)
          return <FieldWrraper params={params} errors={errors}>{field}</FieldWrraper>
        })}
      </div>
      
      <input type="submit" />
    </form>
  )
}

export default CrossValidation
