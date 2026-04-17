import Hero from '@/components/home/Hero'
import Problem from '@/components/home/Problem'
import LiveStats from '@/components/home/LiveStats'
import Funding from '@/components/home/Funding'
import Vision from '@/components/home/Vision'
import HowItWorks from '@/components/home/HowItWorks'
import NetworkPreview from '@/components/home/NetworkPreview'
import FinalCTA from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <LiveStats />
      <Funding />
      <Vision />
      <HowItWorks />
      <NetworkPreview />
      <FinalCTA />
    </>
  )
}
