import { ZodTypeAny, z } from "zod"
import FormField from "../../types/FormField";
import schema, { ShemaDMKey } from "../schema";

const facade: FormField[] = [
  {
    name: 'Name',
    id: 'username',
    type: 'INPUT',
    required: true,
    span: 2,
  },
  {
    name: 'Area',
    id: 'area',
    type: 'SELECT',
    options: [
      { label: 'Volvo', value: 'volvo'},
      { label: 'Fiat', value: 'fiat'}
    ]
  },
  {
    name: 'Password',
    id: 'password',
    type: 'INPUT'
  },
  {
    name: 'Confirm password',
    id: 'confirmPassword',
    type: 'INPUT'
  }
]

const facadeIds =  facade.map(({ id }) => id);
const facadeSchema = Object.keys(schema)
  .filter(key => facadeIds.includes(key))
  .reduce((acc, curr) => ({ ...acc, [curr]: schema[curr as ShemaDMKey]}), {} as { [k in ShemaDMKey]: ZodTypeAny})

export default {
  facade,
  schema: z.object(facadeSchema)
    .refine(({ password, confirmPassword}) => 
      password === confirmPassword,
      {
        message: `password doesn't match`,
        path: ["password"]
      }
    )
}