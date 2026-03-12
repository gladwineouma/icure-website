import AboutUsSection from "./components/AboutSection"
import ContactSection from "./components/ContactUs"
import CourseLevelsSection from "./components/Courses"
import FAQSection from "./components/FAQs"
import Footer from "./components/Footer"
import GallerySection from "./components/Gallery"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import TestimonialsSection from "./components/Testimonials"
import CoreValues from "./components/Values"
import WhyChooseUs from "./components/WhyUs"

function App() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <AboutUsSection/>
   <CoreValues/>
   <CourseLevelsSection/>
   <WhyChooseUs/>
   <GallerySection/>
   <TestimonialsSection/>
   <FAQSection/>
   <ContactSection/>
   <Footer/>
  

   </>
  )
}
export default App
