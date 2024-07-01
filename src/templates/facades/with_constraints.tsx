import { z } from "zod"
import FormField from "../../types/FormField";
import schema from "../schema";
import generateSchema from "../utils/generateSchema";

const facade: FormField[] = [
  {
    name: 'Name',
    id: 'username',
    type: 'INPUT',
    required: true,
    span: 4,
  },
  {
    name: 'Area',
    id: 'area',
    type: 'SELECT',
    options: [
      { label: 'Volvo', value: 'volvo'},
      { label: 'Fiat', value: 'fiat'}
    ],
    span: 4,
  },
  {
    name: 'Password',
    id: 'password',
    type: 'INPUT',
    span: 2,
    constraint: {
      id: 'area',
      value: 'fiat'
    }
  },
  {
    name: 'Confirm password',
    id: 'confirmPassword',
    type: 'INPUT',
    span: 2,
  }
]

const facadeSchema = generateSchema(schema, facade)

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