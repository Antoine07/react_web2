import { createFileRoute } from '@tanstack/react-router'

import FibonacciPage from "@/pages/FibonacciPage"

export const Route = createFileRoute('/fibonacci')({
  component: FibonacciPage,
})
