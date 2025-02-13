import { NavigationBar } from '@/components/navigation-bar'
import { ParticleBackground } from '@/components/particle-background'
import { ContentCard } from '@/components/content-card'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'

const plans = [
  {
    name: "DIRT",
    ram: "2gb",
    cpu: "100%",
    disk: "10gb",
    backup: "1",
    location: "INDIA",
    price: { INR: 80, PKR: 240, USD: 0.98 }
  },
  {
    name: "WOOD",
    ram: "4gb",
    cpu: "150%",
    disk: "20gb",
    backup: "2",
    location: "INDIA",
    price: { INR: 160, PKR: 480, USD: 1.86 }
  },
  {
    name: "STONE",
    ram: "8gb",
    cpu: "300%",
    disk: "35gb",
    backup: "2",
    location: "INDIA",
    price: { INR: 320, PKR: 960, USD: 3.71 }
  },
  {
    name: "IRON",
    ram: "12gb",
    cpu: "350%",
    disk: "40gb",
    backup: "3",
    location: "INDIA",
    price: { INR: 480, PKR: 1440, USD: 5.57 }
  },
  {
    name: "DIAMOND",
    ram: "16gb",
    cpu: "400%",
    disk: "50gb",
    backup: "3",
    location: "INDIA",
    price: { INR: 640, PKR: 1920, USD: 7.43 }
  },
  {
    name: "NETHRITE",
    ram: "32gb",
    cpu: "600%",
    disk: "50gb",
    backup: "3",
    location: "INDIA",
    price: { INR: 1280, PKR: 3840, USD: 14.86 }
  }
];

export default function Plans() {
  const { addToCart } = useCart()
  return (
    <main className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavigationBar />
      <div className="min-h-screen container mx-auto px-4 py-20 sm:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-4 sm:mb-6 text-center">
          Budget Plans
        </h1>
        <p className="text-pink-200 text-lg sm:text-xl mb-8 sm:mb-12 text-center px-4">
          Choose the perfect hosting plan for your VPS or Minecraft server needs
        </p>
        <div className="grid gap-4 sm:gap-8 max-w-md mx-auto">
          {plans.map((plan) => (
            <ContentCard key={plan.name}>
              <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-4 sm:mb-6">{plan.name} PLAN</h2>
              <ul className="space-y-3 sm:space-y-4 text-pink-200 mb-6 sm:mb-8">
                <li>• RAM - {plan.ram}</li>
                <li>• CPU - {plan.cpu}</li>
                <li>• DISK - {plan.disk}</li>
                <li>• BACKUP - {plan.backup}</li>
                <li>• LOCATION: {plan.location}</li>
              </ul>
              <div className="space-y-2 mb-6 sm:mb-8">
                <div className="flex justify-between text-pink-200">
                  <span>INR</span>
                  <span>₹{plan.price.INR.toFixed(2)}/m</span>
                </div>
                <div className="flex justify-between text-pink-200">
                  <span>PKR</span>
                  <span>₹{plan.price.PKR.toFixed(2)}/m</span>
                </div>
                <div className="flex justify-between text-pink-200">
                  <span>USD</span>
                  <span>₹{plan.price.USD.toFixed(2)}/m</span>
                </div>
              </div>
              <Button 
                className="w-full bg-red-500 hover:bg-red-600 h-12 text-base"
                onClick={() => addToCart({
                  id: `minecraft-${plan.name.toLowerCase()}`,
                  name: `${plan.name} Minecraft Plan`,
                  price: plan.price.INR,
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

