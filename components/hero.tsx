import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Cart } from '@/components/cart'

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-red-500 mb-4">Welcome to</p>
      <h1 className="text-5xl md:text-7xl font-bold text-red-500 mb-6">
        Melon Nodes
      </h1>
      <p className="text-gray-400 text-lg mb-8 max-w-2xl">
        Your trusted partner for high-performance hosting solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="https://discord.gg/gwDPnKqrWB">
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8"
          >
            Join Our Community
          </Button>
        </Link>
        <Link href="/plans">
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8"
          >
            Minecraft Plans
          </Button>
        </Link>
        <Link href="/plans/vps">
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8"
          >
            VPS Plans
          </Button>
        </Link>
        <Cart />
      </div>
    </div>
  )
}

