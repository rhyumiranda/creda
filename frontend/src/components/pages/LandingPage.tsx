import Header from '@/components/Navbar';
import { Hero } from '../Hero';
import { CodeDemo } from './CodeDemo';
import { Features } from './Features';
import { HowItWorks } from './HowItWorks';
import { Pricing } from './pricing';
import { Documentation } from './documentation';
import { Footer } from './Footer';


export default function LandingPage() {
  return (
    <main>
      <Header/>
      <Hero/>
      <CodeDemo/>
      <Features/>
      <HowItWorks/>
      <Pricing/>
      <Documentation/>
      <Footer/>
    </main>
  )
}
