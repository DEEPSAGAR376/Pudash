import { NavigationBar } from '@/components/navigation-bar'
import { ParticleBackground } from '@/components/particle-background'
import { ContentCard } from '@/components/content-card'

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavigationBar />
      <div className="flex-grow container mx-auto px-4 py-20 sm:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-8 text-center">
          About Melon Nodes
        </h1>
        <ContentCard>
          <div className="prose prose-invert max-w-none">
            <p className="text-pink-200 mb-6">
              Melon Nodes is a leading provider of high-performance hosting solutions, specializing in Minecraft server hosting and VPS services. Founded in 2023, we've quickly grown to become a trusted partner for gamers and businesses alike.
            </p>
            <p className="text-pink-200 mb-6">
              Our mission is to deliver reliable, scalable, and affordable hosting solutions that empower our clients to focus on what matters most - their games, applications, and businesses. With state-of-the-art infrastructure and a team of dedicated professionals, we ensure that your online presence is always at its best.
            </p>
            <p className="text-pink-200 mb-6">
              At Melon Nodes, we pride ourselves on:
            </p>
            <ul className="text-pink-200 mb-6 list-disc pl-6">
              <li>Cutting-edge technology and hardware</li>
              <li>24/7 expert support</li>
              <li>Flexible and scalable solutions</li>
              <li>Competitive pricing</li>
              <li>Commitment to customer satisfaction</li>
            </ul>
            <p className="text-pink-200">
              Whether you're looking to host a small Minecraft server for friends or need a powerful VPS for your growing business, Melon Nodes has the perfect solution for you. Join us today and experience the difference of premium hosting backed by passionate experts.
            </p>
          </div>
        </ContentCard>
      </div>
    </main>
  )
}

