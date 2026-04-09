import { useEffect } from 'react'
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    const observe = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }
    observe()
    // re-observe after short delay in case components mounted later
    const t = setTimeout(observe, 300)
    return () => { observer.disconnect(); clearTimeout(t) }
  }, [])

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
