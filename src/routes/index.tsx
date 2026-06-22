import { createFileRoute } from '@tanstack/react-router'
import DoomLessHero from '@/components/DoomLessHero'

export const Route = createFileRoute('/')({ component: App, ssr: false, })

function App() {
  return (
    <div className="min-h-screen">
      <DoomLessHero />
    </div>
  )
}
