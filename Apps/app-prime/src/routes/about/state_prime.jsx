import { createFileRoute } from '@tanstack/react-router'

import PrimeStatePage from "@/pages/about/PrimeStatePage"

export const Route = createFileRoute('/about/state_prime')({
  component: PrimeStatePage,
})

