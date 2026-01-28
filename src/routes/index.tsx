import { createFileRoute } from '@tanstack/react-router'
import RottenMochiHero from '@/components/RottenMochiHero'

export const Route = createFileRoute('/')({ component: App, ssr: false, })

function App() {
  return (
    <div className="min-h-screen">
      <RottenMochiHero />
    </div>
  )
}
