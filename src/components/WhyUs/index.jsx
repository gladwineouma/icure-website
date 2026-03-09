import { useState } from 'react';

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Heading */}
        <h1 style={{ textAlign: 'center', fontSize: '48px', marginBottom: '20px' }}>
          Why <span style={{ color: '#E91F31' }}>Choose</span> Us
        </h1>

        {/* Subtitle */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#333',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px',
            lineHeight: '1.6',
          }}
        >
          We're not just a school — we're a launchpad for your tech career. Here's what
          sets iCure apart from the rest.
        </p>

        {/* Cards Container */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          {/* Card 1: Expert Instructors */}
          <div
            style={{
              flex: 1,
              minWidth: '250px',
              border: hoveredCard === 1 ? '2px solid #E91F31' : '2px solid transparent',
              padding: '30px',
              boxShadow: hoveredCard === 1 ? '0 8px 24px rgba(233, 31, 49, 0.25)' : '0 0px 0px rgba(0, 0, 0, 0)',
              borderRadius: '4px',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: hoveredCard === 1 ? 'translateY(-8px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={{ color: '#E91F31', fontSize: '24px', marginBottom: '20px' }}>
              Expert Instructors
            </h3>
            <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.8' }}>
              Our trainers are not just teachers; they are seasoned industry professionals
              with years of hands-on experience in phone and laptop repair
            </p>
          </div>

          {/* Card 2: 100% Practical (Center - border on hover) */}
          <div
            style={{
              flex: 1,
              minWidth: '250px',
              border: hoveredCard === 2 ? '2px solid #E91F31' : '2px solid transparent',
              padding: '30px',
              boxShadow: hoveredCard === 2 ? '0 8px 24px rgba(233, 31, 49, 0.25)' : '0 0px 0px rgba(0, 0, 0, 0)',
              borderRadius: '4px',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: hoveredCard === 2 ? 'translateY(-8px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={{ color: '#E91F31', fontSize: '24px', marginBottom: '20px' }}>
              100% Practical,<br />
              Hands-On Training
            </h3>
            <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.8' }}>
              We believe in learning by doing. Our courses are designed to provide maximum
              hands-on experience, ensuring our graduates are job-ready from day one.
            </p>
          </div>

          {/* Card 3: Affordable & Flexible Learning */}
          <div
            style={{
              flex: 1,
              minWidth: '250px',
              border: hoveredCard === 3 ? '2px solid #E91F31' : '2px solid transparent',
              padding: '30px',
              boxShadow: hoveredCard === 3 ? '0 8px 24px rgba(233, 31, 49, 0.25)' : '0 0px 0px rgba(0, 0, 0, 0)',
              borderRadius: '4px',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: hoveredCard === 3 ? 'translateY(-8px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={{ color: '#E91F31', fontSize: '24px', marginBottom: '20px' }}>
              Affordable & Flexible Learning
            </h3>
            <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.8' }}>
              Quality training shouldn't break the bank. We offer competitive pricing with
              flexible payment plans and scheduling options, making professional technical
              education accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}