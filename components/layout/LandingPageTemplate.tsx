"use client";

import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { UnifiedSearchHero } from '../home/UnifiedSearchHero';
import { PopularDestinations } from '../home/PopularDestinations';
import { TrendingPackages } from '../home/TrendingPackages';
import { TrustIndicators } from '../home/TrustIndicators';
import { SpecialDeals } from '../home/SpecialDeals';
import { InternationalDestinations } from '../home/InternationalDestinations';
import { IndianDestinations } from '../home/IndianDestinations';
import { AITravelPlanner } from '../home/AITravelPlanner';
import { CustomerReviews } from '../home/CustomerReviews';
import { TravelGuides } from '../home/TravelGuides';
import { AppDownload } from '../home/AppDownload';
import { PartnerLogos } from '../home/PartnerLogos';

import { TravelTimeline } from '../sections/TravelTimeline';

export const LandingPageTemplate = () => {
  return (
    <div className="bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <UnifiedSearchHero />
        <PopularDestinations />
        <TrustIndicators />
        <TravelTimeline />
        <TrendingPackages />
        <SpecialDeals />
        <InternationalDestinations />
        <IndianDestinations />
        <AITravelPlanner />
        <CustomerReviews />
        <TravelGuides />
        <AppDownload />
        <PartnerLogos />
      </main>

      <Footer />
    </div>
  );
};
