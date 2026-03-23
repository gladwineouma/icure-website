import React from 'react';
import { CtaSection } from '../components/AboutUs/CtaSection';
import { HeroBanner } from '../components/AboutUs/HeroBanner';
import { ImpactStats } from '../components/AboutUs/ImpactStats';
import { TeamSection } from '../components/AboutUs/TeamSection';
import { OurStory } from '../components/AboutUs/OurStory';
import DonateSection from '../components/AboutUs/DonateSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <HeroBanner />
      <OurStory />
      <ImpactStats />
      <TeamSection />
      <DonateSection />
      <CtaSection />
    </div>
  );
}
