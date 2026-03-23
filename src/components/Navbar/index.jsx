import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const linkClass = (section) =>
    `relative cursor-pointer transition-colors duration-300 ${
      active === section
        ? "text-[#E91F31]"
        : "text-gray-700 hover:text-[#E91F31]"
    }`;

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="w-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-start gap-2 cursor-pointer">
          <img
            src="/icure-logo.png"
            alt="ICure Logo"
            className="h-12 w-12 md:h-12 md:w-12"
          />

          <div className="leading-tight mt-1">
            <span className="text-[#E91F31] font-semibold text-[17px] md:text-[18px] tracking-tight">
              iCure
            </span>
            <br />
            <span className="text-gray-600 text-[12px] md:text-[13px]">
              Mentorship & Empowerment Training Centre
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <li className={linkClass("home")}>
            <Link to="/">Home</Link>
          </li>

          <li className={linkClass("about")}>
            <Link to="/about">About</Link>
          </li>

          <li className={linkClass("courses")}>
            <Link to="/courses">Courses</Link>
          </li>

          <li className={linkClass("gallery")}>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li className={linkClass("faqs")}>
            <Link to="/faqs">FAQs</Link>
          </li>

          <li className={linkClass("contactus")}>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contactus"
          className="hidden md:block bg-[#E91F31] text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
        >
          Enroll Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col items-center gap-6 py-8 text-[16px] font-medium">
            <li className={linkClass("home")}>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center"
              >
                Home
              </Link>
            </li>

            <li className={linkClass("about")}>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center"
              >
                About
              </Link>
            </li>

            <li className={linkClass("courses")}>
              <Link
                to="/courses"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center"
              >
                Courses
              </Link>
            </li>

            <li className={linkClass("gallery")}>
              <Link
                to="/gallery"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center"
              >
                Gallery
              </Link>
            </li>

            <li className={linkClass("faqs")}>
              <Link
                to="/faqs"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center"
              >
                FAQs
              </Link>
            </li>

            <li className={linkClass("contactus")}>
              <Link
                to="/contactus"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center"
              >
                Contact Us
              </Link>
            </li>

            {/* Mobile CTA */}
            <li>
              <Link
                to="/contactus"
                onClick={() => setMenuOpen(false)}
                className="block w-full bg-[#E91F31] text-white px-6 py-3 rounded-md hover:bg-red-600 transition text-center"
              >
                Enroll Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
