import { createFileRoute } from '@tanstack/react-router'
import PrimePage from '@/pages/PrimePage'

export const Route = createFileRoute('/prime')({
  component: PrimePage,
})
