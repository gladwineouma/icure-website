import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import IndexPage from "./pages/index";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/Gallery";
import OutreachPage from "./pages/OutreachPage"; // 1. Imported your modular outreach container page
import WhatsAppButton from "./components/Watsapp/WatsappButton";
import CoursesPage from "./pages/CoursesPage";
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash/ScrollToHash";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToHash />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/outreach" element={<OutreachPage />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/donate" element={<div>Donate Page Coming Soon!</div>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
