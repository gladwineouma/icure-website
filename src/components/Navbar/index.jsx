import { useEffect, useState } from "react";
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
                        src="/icureLogo.png"
                        alt="ICure Logo"
                        className="h-8 w-8 md:h-9 md:w-9 mt-[2px]"
                    />

                    <div className="leading-tight">
                        <span className="text-[#E91F31] font-semibold text-[17px] md:text-[18px] tracking-tight">
                            iCure
                        </span>
                        <br />
                        <span className="text-gray-600 text-[11px] md:text-[12px]">
                            Mentorship & Empowerment Training Centre
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-12 text-[15px] font-medium">

                    <li className={linkClass("home")}>
                        <a href="#home">Home</a>
                    </li>

                    <li className={linkClass("about")}>
                        <a href="#about">About</a>
                    </li>

                    <li className={linkClass("why-us")}>
                        <a href="#why-us">Why Us</a>
                    </li>

                    <li className={linkClass("courses")}>
                        <a href="#courses">Courses</a>
                    </li>

                    <li className={linkClass("gallery")}>
                        <a href="#gallery">Gallery</a>
                    </li>

                    <li className={linkClass("teatimonials")}>
                        <a href="#testimonials">Testimonials</a>
                    </li>

                    <li className={linkClass("faqs")}>
                        <a href="#faqs">FAQs</a>
                    </li>

                    <li className={linkClass("contact")}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="hidden md:block bg-[#E91F31] text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
                >
                    Enroll Now
                </a>

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
                            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                        </li>

                        <li className={linkClass("about")}>
                            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                        </li>

                        <li className={linkClass("why-us")}>
                            <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
                        </li>

                        <li className={linkClass("courses")}>
                            <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
                        </li>

                        <li className={linkClass("gallery")}>
                            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
                        </li>

                        <li className={linkClass("testimonials")}>
                            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
                        </li>

                        <li className={linkClass("faqs")}>
                            <a href="#faqs" onClick={() => setMenuOpen(false)}>FAQs</a>
                        </li>

                        <li className={linkClass("contact")}>
                            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                        </li>

                        {/* Mobile CTA */}
                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="bg-[#E91F31] text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
                        >
                            Enroll Now
                        </a>
                    </ul>
                </div>
            )}
        </nav>
    );
}