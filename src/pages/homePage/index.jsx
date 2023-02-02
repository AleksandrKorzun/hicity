import React, { useEffect } from 'react';
import BenefitsSection from '../../components/benefitsSection';
import ContactsSection from '../../components/contactsSection';
import FaqSection from '../../components/faqSection';
import FeatureSection from '../../components/featureSection';
import HeroSection from '../../components/heroSection';
import ProductSection from '../../components/productSection';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    localStorage.setItem('myCart', localStorage.getItem('myCart') || JSON.stringify([]));
  }, []);

  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ProductSection />
      <FeatureSection />
      <FaqSection />
      <ContactsSection />
    </>
  );
};

export default HomePage;
