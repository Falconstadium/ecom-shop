import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/chekout')({
  component: () => <div>Hello /chekout!</div>,
})
