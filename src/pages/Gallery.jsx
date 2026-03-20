import GallerySection from "../components/Gallery";  
import TestimonialsSection from "../components/Testimonials"; 

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">  
      <GallerySection />
      <TestimonialsSection /> 
    </div>
  );
};

export default GalleryPage;
