import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Profile from './components/Profile'
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
      <Gallery />
      <Profile />
      <Process />
      <Reviews />
      <Booking />
      <Footer />
    </>
  )
}
