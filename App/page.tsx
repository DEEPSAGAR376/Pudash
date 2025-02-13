import { NavigationBar } from '@/components/navigation-bar'
import { Hero } from '@/components/hero'
import { ParticleBackground } from '@/components/particle-background'
import { Team } from '@/components/team'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavigationBar />
      <Hero />
      <Team />
    </main>
  )
}

