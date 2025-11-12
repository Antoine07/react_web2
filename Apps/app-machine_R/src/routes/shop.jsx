import { createFileRoute } from '@tanstack/react-router'
import { searchSchema } from '@/schemas/searchSchema'
import ShopPage from '@/pages/ShopPage'

// Définition de la route avec validation
export const Route = createFileRoute('/shop')({
  validateSearch: searchSchema.parse, // Validation automatique via Zod
  component: ShopPage,
  errorComponent: ({ error }) => (
    <div className="p-6 text-red-500">
      <h2>Erreur de validation des paramètres</h2>
      <pre>{error.message}</pre>
    </div>
  ),
})