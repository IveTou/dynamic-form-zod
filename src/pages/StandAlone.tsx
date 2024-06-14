import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
  username: z.string().min(2).regex(/^[A-Za-z]+$/i, "Only letters are allowed"),
  area: z.string(),
  password: z.string(),
})
.refine((data) => console.log('data', data))

type FormData = z.infer<typeof schema>

function StandAlone() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  const onSubmit = (data: any) => {

  }

  console.log('errors', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      <p>{errors.username?.message?.toString()}</p>

      <input {...register("password")} />
      <p>{errors.password?.message?.toString()}</p>


      <select {...register("area")}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <p>{errors.area?.message?.toString()}</p>
      
      <input type="submit" />
    </form>
  )
}

export default StandAlone
