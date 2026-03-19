import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactUs";
import CourseLevelsSection from "../components/Courses";
import FAQSection from "../components/FAQs";
import GallerySection from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import TestimonialsSection from "../components/Testimonials";
import CoreValuesSection from "../components/Values";
import WhyChooseUs from "../components/WhyUs";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <AboutSection />
      <CoreValuesSection />
      <CourseLevelsSection />
      <WhyChooseUs />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default IndexPage; 
