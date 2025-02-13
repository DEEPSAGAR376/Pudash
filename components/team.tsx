import { ContentCard } from '@/components/content-card'
import Image from 'next/image'

export function Team() {
  const teamMembers = [
    {
      name: 'WANTER',
      role: 'Founder',
      image: 'https://res.cloudinary.com/db4ayioxs/image/upload/v1736830059/uploads/1736830058917-a_0080b3f681b913a6f29aa74bc1eb9e10.gif.png',
    },
    {
      name: 'DEEPSAGAR',
      role: 'CEO',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eb78ea32ac11c526c949bf1cb76e832a-bfVshgYM83thSxWtyzYOMtrU8Wdy1y.png',
    },
    {
      name: 'SWAPNA SAHOO',
      role: 'Support Manager',
      image: 'https://res.cloudinary.com/db4ayioxs/image/upload/v1736829895/uploads/1736829895243-e00fddecf87400d5751c8c60338bc638.png.png',
    },
    {
      name: 'Emma Wilson',
      role: 'Systems Administrator',
      image: '/placeholder.svg?height=400&width=400',
    }
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6 text-center">
          Our Team
        </h2>
        <p className="text-pink-200 text-xl mb-12 text-center max-w-2xl mx-auto">
          Meet the dedicated professionals behind Melon Nodes who work tirelessly to provide you with the best hosting experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <ContentCard key={member.name}>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-red-500 mb-2">{member.name}</h3>
                <p className="text-pink-200">{member.role}</p>
              </div>
            </ContentCard>
          ))}
        </div>
      </div>
    </section>
  )
}

