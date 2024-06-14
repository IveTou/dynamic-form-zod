import { z } from "zod"

const schema = {
  username: z.string().min(2).regex(/^[A-Za-z]+$/i, "Only letters are allowed"),
  email: z.string(),
  area: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
}

export type ShemaDMKey = keyof typeof schema;

export default schema