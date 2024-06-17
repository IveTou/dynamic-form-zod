import { z } from "zod"

const schema = {
  username: z.string().min(2).regex(/^[A-Za-z]+$/i, "Only letters are allowed"),
  email: z.string(),
  area: z.string().min(22),
  password: z.string(),
  confirmPassword: z.string(),
}

export default schema