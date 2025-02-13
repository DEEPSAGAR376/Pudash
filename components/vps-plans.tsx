import { NavigationBar } from '@/components/navigation-bar'
import { ParticleBackground } from '@/components/particle-background'
import { ContentCard } from '@/components/content-card'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'

const vpsPlans = [
  {
    name: "Basic VPS",
    cpu: "4 vCPUs",
    ram: "8GB RAM",
    storage: "100GB SSD Storage",
    transfer: "2TB Transfer",
    network: "1Gbps Network",
    price: 600
  },
  {
    name: "Pro VPS",
    cpu: "6 vCPUs",
    ram: "16GB RAM",
    storage: "300GB SSD Storage",
    transfer: "4TB Transfer",
    network: "1Gbps Network",
    price: 750
  },
  {
    name: "Enterprise VPS",
    cpu: "8 vCPUs",
    ram: "32GB RAM",
    storage: "300GB SSD Storage",
    transfer: "8TB Transfer",
    network: "1Gbps Network",
    price: 1400
  },
  {
    name: "Ultimate VPS",
    cpu: "12 vCPUs",
    ram: "64GB RAM",
    storage: "1000GB SSD Storage",
    transfer: "8TB Transfer",
    network: "1Gbps Network",
    price: 2500
  }
];

export function VPSPlans() {
  const { addToCart } = useCart()
  
  return (
    <main className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavigationBar />
      <div className="min-h-screen container mx-auto px-4 py-20 sm:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-4 sm:mb-6 text-center">
          VPS Plans
        </h1>
        <p className="text-pink-200 text-lg sm:text-xl mb-8 sm:mb-12 text-center px-4">
          High-performance VPS solutions for your hosting needs
        </p>
        <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {vpsPlans.map((plan) => (
            <ContentCard key={plan.name}>
              <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-4 sm:mb-6">{plan.name}</h2>
              <ul className="space-y-3 sm:space-y-4 text-pink-200 mb-6 sm:mb-8">
                <li>• {plan.cpu}</li>
                <li>• {plan.ram}</li>
                <li>• {plan.storage}</li>
                <li>• {plan.transfer}</li>
                <li>• {plan.network}</li>
              </ul>
              <div className="space-y-2 mb-6 sm:mb-8">
                <div className="flex justify-between text-pink-200">
                  <span>INR</span>
                  <span>₹{plan.price}/month</span>
                </div>
              </div>
              <Button 
                className="w-full bg-red-500 hover:bg-red-600 h-12 text-base"
                onClick={() => addToCart({
                  id: `vps-${plan.name.toLowerCase().replace(' ', '-')}`,
                  name: `${plan.name}`,
                  price: plan.price,
                  quantity: 1
                })}
              >
                Add to Cart
              </Button>
            </ContentCard>
          ))}
        </div>
      </div>
    </main>
  )
}

