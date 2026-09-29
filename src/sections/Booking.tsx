import React from 'react';
import { BookingForm } from '../components/BookingForm';

interface BookingSectionProps {
  selectedVehicle?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ selectedVehicle }) => {
  return (
    <section className="py-20 bg-[#09090b] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingForm preSelectedVehicle={selectedVehicle} />
      </div>
    </section>
  );
};
