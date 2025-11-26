import { z } from "zod"

const maxNumber = 1000

export const numberSchema = z.object({
  number: z
    .number({
      required_error: "Un nombre est requis",
      invalid_type_error: "Veuillez saisir un nombre",
    })
    .min(0, "Doit être supérieur à 0")
    .max(maxNumber, "Doit être inférieur à 1000"),
})
