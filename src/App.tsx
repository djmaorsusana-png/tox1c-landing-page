import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Reviews from './components/Reviews'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <WhyUs />
      <Process />
      <Reviews />
      <Booking />
      <Footer />
    </>
  )
}
