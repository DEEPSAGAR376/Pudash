import { NavigationBar } from '@/components/navigation-bar'
import { ParticleBackground } from '@/components/particle-background'
import { ContentCard } from '@/components/content-card'

export default function TermsOfService() {
  return (
    <main className="min-h-screen flex flex-col">
      <ParticleBackground />
      <NavigationBar />
      <div className="flex-grow container mx-auto px-4 py-20 sm:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-8 text-center">
          Terms of Service
        </h1>
        <ContentCard>
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-red-500 mb-4">1. Acceptance of Terms</h2>
            <p className="text-pink-200 mb-6">
              By accessing and using Melon Nodes' services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold text-red-500 mb-4">2. Service Description</h2>
            <p className="text-pink-200 mb-6">
              Melon Nodes provides Minecraft server hosting and VPS hosting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>

            <h2 className="text-2xl font-bold text-red-500 mb-4">3. User Responsibilities</h2>
            <p className="text-pink-200 mb-6">
              Users are responsible for maintaining the security of their account credentials and for all activities that occur under their account.
            </p>

            <h2 className="text-2xl font-bold text-red-500 mb-4">4. Acceptable Use</h2>
            <p className="text-pink-200 mb-6">
              Services must not be used for any illegal purposes or in violation of any applicable laws. This includes but is not limited to unauthorized access to other systems, hosting malicious content, or engaging in network abuse.
            </p>

            <h2 className="text-2xl font-bold text-red-500 mb-4">5. Payment and Refunds</h2>
            <p className="text-pink-200 mb-6">
              All payments are processed in advance. Refunds may be issued at our discretion and will be handled on a case-by-case basis.
            </p>

            <h2 className="text-2xl font-bold text-red-500 mb-4">6. Service Level Agreement</h2>
            <p className="text-pink-200 mb-6">
              We strive to maintain 99.9% uptime for all services. Compensation for downtime will be evaluated according to our SLA policy.
            </p>

            <h2 className="text-2xl font-bold text-red-500 mb-4">7. Termination</h2>
            <p className="text-pink-200 mb-6">
              We reserve the right to terminate services for violations of these terms or for any other reason at our discretion. Users may terminate their services at any time.
            </p>

            <h2 className="text-2xl font-bold text-red-500 mb-4">8. Limitation of Liability</h2>
            <p className="text-pink-200 mb-6">
              Melon Nodes is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
            
            <h2 className="text-2xl font-bold text-red-500 mb-4">9. Account Registration</h2>
            <p className="text-pink-200 mb-6">
              You are responsible for maintaining the confidential of your account credentials. Keep theme safe!
            </p>
            
            <h2 className="text-2xl font-bold text-red-500 mb-4">10. Eligibility</h2>
            <p className="text-pink-200 mb-6">
              You must be at least 14 years old to use our services.
            </p>
            
            <h2 className="text-2xl font-bold text-red-500 mb-4">11. Accurate Information</h2>
            <p className="text-pink-200 mb-6">
              Provide accurate and truthful information when registering. Misinformation may lead to suspension.
            </p>
            
            <h2 className="text-2xl font-bold text-red-500 mb-4">12. Fair Use</h2>
            <p className="text-pink-200 mb-6">
              Don't abuse our server with excessive resources usage. we're here to share.
            </p>
            
            <h2 className="text-2xl font-bold text-red-500 mb-4">13. Prohibited Activitoes</h2>
            <p className="text-pink-200 mb-6">
              .No Spamming
              .No Hosting Of Illegal Contents.
            </p>
            </div>
        </ContentCard>
      </div>
    </main>
  )
}

