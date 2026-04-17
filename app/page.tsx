import Hero from '@/components/home/Hero'
import LiveStats from '@/components/home/LiveStats'
import Vision from '@/components/home/Vision'
import HowItWorks from '@/components/home/HowItWorks'
import NetworkPreview from '@/components/home/NetworkPreview'
import FinalCTA from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LiveStats />
      <Vision />
      <HowItWorks />
      <NetworkPreview />
      <FinalCTA />
    </>
  )
}
