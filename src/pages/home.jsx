import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/Features'
import WaitlistSection from '../components/Waitlist'
import FooterSection from '../components/footer'

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <WaitlistSection />
      <FooterSection />
    </div>
  )
}
