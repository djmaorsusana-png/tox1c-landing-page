import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MomentSlider from './components/MomentSlider'
import ReceptionSection from './components/ReceptionSection'
import ReviewsCarousel from './components/ReviewsCarousel'
import SimpleContact from './components/SimpleContact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MomentSlider />
      <ReceptionSection />
      <ReviewsCarousel />
      <SimpleContact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
