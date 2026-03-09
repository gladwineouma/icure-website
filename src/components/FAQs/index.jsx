import { useState } from "react";

const faqs = [
    {
        question: "What are the entry requirements for the courses?",
        answer:
            "No prior technical experience is needed for our beginner-level courses. You just need a passion for technology and a willingness to learn. For advanced modules, we recommend completing the beginner level first or having equivalent hands-on experience.",
    },
    {
        question: "How long are the training programs?",
        answer:
            "Our Certified Phone Repair program runs for 4–8 weeks depending on the level, the Laptop & PC Repair program is 10 weeks, and the Master Technician Program is a comprehensive 16-week course covering all modules plus business development.",
    },
    {
        question: "Do I get certified after completion of the course?",
        answer:
            "Yes! All graduates receive an iCure-certified certificate upon successful completion.",
    },
    {
        question: "What tools and equipment will I work with?",
        answer:
            "You'll train with professional-grade equipment including hot-air rework stations, microscopes, oscilloscopes, micro-soldering stations, and advanced diagnostic tools.",
    },
    {
        question: "Do you offer job placement assistance?",
        answer:
            "Absolutely. We have a 98% job placement rate and connect graduates with leading repair shops.",
    },
    {
        question: "Can I start my own repair business after training?",
        answer:
            "Yes — our business development module covers registration, financial management, digital marketing and customer service.",
    },
    {
        question: "Who can enroll in your school?",
        answer:
            "Our doors are open to everyone including youth, aspiring technicians, entrepreneurs and career changers.",
    },
    {
        question: "Are there payment plans?",
        answer:
            "Yes. We offer flexible payment options including installment plans across the training period.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <section
            style={{
                width: '100%',
                padding: '3rem 0',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '48rem',
                    padding: '0 1rem'
                }}
            >
                {/* RESPONSIVE Title */}
                <h2
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: '500',
                        textAlign: 'center',
                        marginBottom: '2.5rem',
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: '1.3'
                    }}
                >
                    Frequently{' '} Asked {' '}
                    <span style={{ color: '#E91F31', fontWeight: '500' }}>Questions </span>
                    
                </h2>

                {/* FAQ Items */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}
                >
                    {visibleFaqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                style={{
                                    border: isOpen ? '2px solid #E91F31' : '1px solid #f87171',
                                    borderRadius: '0.375rem',
                                    backgroundColor: 'white',
                                    boxShadow: isOpen
                                        ? '0 8px 20px rgba(233, 31, 49, 0.15), 0 4px 8px rgba(235, 103, 103, 0.08)'
                                        : isHovered
                                            ? '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(240, 13, 13, 0.04)'
                                            : '0 1px 2px rgba(0,0,0,0.05)',
                                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)', 
                                    transition: 'all 0.5s ease-out', 
                                    overflow: 'hidden'
                                }}
                            >

                                <button
                                    onClick={() => toggleFAQ(index)}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '0.75rem 1rem',
                                        textAlign: 'left',
                                        fontWeight: '400',
                                        background: isOpen ? '#fef2f2' : isHovered ? '#f8fafc' : 'none',
                                        border: 'none',
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: '0.95rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {faq.question}
                                    <span
                                        style={{
                                            fontSize: '1.5rem',
                                            fontWeight: '500',
                                            color: '#E91F31',
                                            minWidth: '24px',
                                            textAlign: 'center',
                                            transition: 'transform 0.3s ease',
                                            transform: isOpen ? 'rotate(360deg)' : 'rotate(0deg)'
                                        }}
                                    >
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>

                                {openIndex === index && (
                                    <div
                                        style={{
                                            padding: '0 0.5rem 0.5rem',
                                            color: '#4b5563',
                                            fontSize: '0.875rem',
                                            lineHeight: '1.6',
                                            fontFamily: "'Poppins', sans-serif",
                                            maxHeight: '500px',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Show More */}
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '2.5rem'
                    }}
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.backgroundColor = '#fee2e2';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                        style={{
                            color: '#f5979e',
                            fontWeight: '500',
                            background: 'none',
                            border: 'none',
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: '1rem',
                            cursor: 'pointer',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '25px',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {showAll ? 'Show less' : 'Show more'}
                    </button>
                </div>
            </div>
        </section>
    );
}
