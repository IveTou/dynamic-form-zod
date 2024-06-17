import { ZodTypeAny } from "zod";
import FormField from "../../types/FormField";

export default function(schema: Record<string, ZodTypeAny>, facade: FormField[]) {
  type ShemaDMKey = keyof typeof schema;
  
  const facadeIds =  facade.map(({ id }) => id);
  const facadeSchema = Object.keys(schema)
    .filter(key => facadeIds.includes(key))
    .reduce((acc, curr) => ({ ...acc, [curr]: schema[curr as ShemaDMKey]}), {} as { [k in ShemaDMKey]: ZodTypeAny})

  return facadeSchema
}