import { z } from 'zod' // module de validation

// Schéma Zod pour typer et valider les paramètres de recherche
export const searchSchema = z.object({
  page: z.number().default(1),
  sortBy: z.string().default('price'),
  desc: z.boolean().default(false),
  categories: z.array(z.string()).default([]),
})