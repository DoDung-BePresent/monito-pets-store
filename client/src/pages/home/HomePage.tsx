/**
 * Node modules
 */

/**
 * Components
 */

import AdoptionBanner from './components/AdoptionBanner';
import Banner from './components/Banner';
import HeroSection from './components/HeroSection';
import { ProductShowcaseSection } from './components/ProductShowcaseSection';
import WhatNewSection from './components/WhatNewSection';
import { PetKnowledgeSection } from './PetKnowledgeSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* What's new section */}
      <WhatNewSection />

      {/* Newsletter */}
      <Banner />

      {/* Our Products */}
      <ProductShowcaseSection />

      {/*Adoption Banner */}
      <AdoptionBanner />

      {/*Pet KnowLedge  */}
      <PetKnowledgeSection />
      {/* Footer */}
    </div>
  );
};

export default HomePage;
