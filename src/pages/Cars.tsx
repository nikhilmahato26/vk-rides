import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Fleet } from '../sections/Fleet';
import { BookingSection } from '../sections/Booking';
import { CTASection } from '../components/CTASection';

export const CarsPage: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('Scorpio N');

  return (
    <>
      <Helmet>
        <title>All Self Drive Cars in Jamshedpur | VK Rides Fleet & Pricing</title>
        <meta
          name="description"
          content="Browse all 30 self-drive rental cars available with VK Rides in Jamshedpur. Daily rates from ₹1,400 to ₹5,500/day. Instant enquiry via WhatsApp."
        />
        <link rel="canonical" href="https://vkrides.in/cars" />
      </Helmet>

      <div className="pt-8">
        <Fleet onSelectCar={(name) => setSelectedVehicle(name)} />
        <BookingSection selectedVehicle={selectedVehicle} />
        <CTASection />
      </div>
    </>
  );
};
