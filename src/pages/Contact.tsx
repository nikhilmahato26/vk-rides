import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../sections/Contact';
import { CTASection } from '../components/CTASection';

export const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact VK Rides Self Drive Car | Jamshedpur, Jharkhand</title>
        <meta
          name="description"
          content="Contact VK Rides Self Drive Car in Jamshedpur. Call 9102430175 or email vijaysinghchatra54@gmail.com for self-drive car rental enquiries."
        />
        <link rel="canonical" href="https://vkrides.in/contact" />
      </Helmet>

      <div className="pt-8">
        <ContactSection />
        <CTASection />
      </div>
    </>
  );
};
