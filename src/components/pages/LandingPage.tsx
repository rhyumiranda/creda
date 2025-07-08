import Header from '@/components/Navbar';
import { Hero } from '../Hero';
import { Features } from './Features';
import { HowItWorks } from './HowItWorks';
import { CTA } from './CTA';
import { Footer } from './Footer';


export default function LandingPage() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <CTA/>
      <Footer/>
    </main>
  )
}
