import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/primes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/primes"!</div>
}
