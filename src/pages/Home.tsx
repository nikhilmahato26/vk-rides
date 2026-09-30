import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { BookingWidget } from '../components/BookingWidget';
import { QuickHighlights } from '../components/QuickHighlights';
import { About } from '../sections/About';
import { Fleet } from '../sections/Fleet';
import { FeaturedVehicles } from '../sections/FeaturedVehicles';
import { BudgetCars } from '../sections/BudgetCars';
import { FamilyCars } from '../sections/FamilyCars';
import { SUVSection } from '../sections/SUVSection';
import { HowItWorks } from '../sections/HowItWorks';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { BookingSection } from '../sections/Booking';
import { ContactSection } from '../sections/Contact';
import { CTASection } from '../components/CTASection';

export const Home: React.FC = () => {
  const [selectedVehicleForBooking, setSelectedVehicleForBooking] = useState<string>('Scorpio N');
  const [filterCarId, setFilterCarId] = useState<string>('all');

  const handleSelectCarForBooking = (carName: string) => {
    setSelectedVehicleForBooking(carName);
  };

  const handleSearchWidgetFilter = (carId: string) => {
    setFilterCarId(carId);
  };

  return (
    <>
      <Helmet>
        <title>VK Rides Self Drive Car Jamshedpur | Self Drive Car Rental</title>
        <meta
          name="description"
          content="VK Rides Self Drive Car offers a wide selection of self-drive rental cars in Jamshedpur, from economical hatchbacks to SUVs and premium vehicles."
        />
        <meta
          name="keywords"
          content="VK Rides Self Drive Car, self drive car Jamshedpur, self drive cars in Jamshedpur, car rental Jamshedpur, self drive car rental Jamshedpur, Thar ROXX rental Jamshedpur, Scorpio rental Jamshedpur, Thar rental Jamshedpur, XUV 700 rental Jamshedpur, Safari rental Jamshedpur, Nexon rental Jamshedpur, Creta rental Jamshedpur, Ertiga rental Jamshedpur, Punch rental Jamshedpur, Dzire rental Jamshedpur, car rental Jharkhand, self drive rental Jharkhand"
        />
        <link rel="canonical" href="https://vkrides.in" />

        {/* Open Graph */}
        <meta property="og:title" content="VK Rides Self Drive Car Jamshedpur | Self Drive Car Rental" />
        <meta
          property="og:description"
          content="VK Rides Self Drive Car offers a wide selection of self-drive rental cars in Jamshedpur, from economical hatchbacks to SUVs and premium vehicles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/cars/hero-banner.webp" />

        {/* LocalBusiness Schema without invented fake reviews/ratings */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutoRental',
            name: 'VK Rides Self Drive Car',
            image: '/images/cars/hero-banner.webp',
            telephone: '+919102430175',
            email: 'vijaysinghchatra54@gmail.com',
            priceRange: '₹1400 - ₹5500 / day',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Jamshedpur',
              addressRegion: 'Jharkhand',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              address: 'Jamshedpur, Jharkhand',
            },
            description:
              'Self drive car rental service in Jamshedpur providing a wide range of rental vehicles including hatchbacks, sedans, SUVs, and MPVs.',
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        {/* 1. Cinematic Hero */}
        <div id="hero">
          <Hero />
        </div>

        {/* 2. Hero Booking / Search Widget */}
        <BookingWidget onSearch={handleSearchWidgetFilter} />

        {/* 3. Quick Trust Strip */}
        <QuickHighlights />

        {/* 4. About VK Rides */}
        <About />

        {/* 5. Vehicle Fleet & Filters */}
        <Fleet
          onSelectCar={handleSelectCarForBooking}
          filterCarId={filterCarId}
        />

        {/* 6. Featured SUVs */}
        <FeaturedVehicles onSelectCar={handleSelectCarForBooking} />

        {/* 7. Affordable Cars */}
        <BudgetCars onSelectCar={handleSelectCarForBooking} />

        {/* 8. Family & Comfort Cars */}
        <FamilyCars onSelectCar={handleSelectCarForBooking} />

        {/* 9. SUV & Adventure Section + Price Highlight */}
        <SUVSection onSelectCar={handleSelectCarForBooking} />

        {/* 10. How It Works */}
        <HowItWorks />

        {/* 11. Why Choose VK Rides */}
        <WhyChooseUs />

        {/* 12. Booking Form */}
        <BookingSection selectedVehicle={selectedVehicleForBooking} />

        {/* 13. Contact & Regional Service */}
        <ContactSection />

        {/* 14. Final CTA */}
        <CTASection />
      </main>
    </>
  );
};
