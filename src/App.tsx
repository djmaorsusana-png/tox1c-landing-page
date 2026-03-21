import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import LiveAct from './components/LiveAct'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <LiveAct />
      <Gallery />
      <Reviews />
      <Booking />
      <Footer />
    </>
  )
}
