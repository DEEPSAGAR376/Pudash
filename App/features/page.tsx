import { NavigationBar } from '@/components/navigation-bar'
import { ParticleBackground } from '@/components/particle-background'
import { ContentCard } from '@/components/content-card'

export default function Features() {
  return (
    <main className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavigationBar />
      <div className="min-h-screen container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6 text-center">
          Features
        </h1>
        <p className="text-pink-200 text-xl mb-12 text-center">
          Discover the powerful features of our VPS and Minecraft server hosting
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ContentCard>
            <h2 className="text-2xl font-bold text-red-500 mb-4">High Performance</h2>
            <ul className="space-y-4 text-pink-200">
              <li>• Premium Hardware</li>
              <li>• DDoS Protection</li>
              <li>• 99.9% Uptime</li>
              <li>• SSD Storage</li>
            </ul>
          </ContentCard>
          <ContentCard>
            <h2 className="text-2xl font-bold text-red-500 mb-4">Easy Management</h2>
            <ul className="space-y-4 text-pink-200">
              <li>• One-Click Installation</li>
              <li>• Automated Backups</li>
              <li>• Web-based Control Panel</li>
              <li>• 24/7 Support</li>
            </ul>
          </ContentCard>
        </div>
      </div>
    </main>
  )
}

