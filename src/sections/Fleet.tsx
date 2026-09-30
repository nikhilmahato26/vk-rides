import React, { useState, useMemo } from 'react';
import { vehicles } from '../data/vehicles';
import { VehicleCard } from '../components/VehicleCard';
import { VehicleFilters } from '../components/VehicleFilters';
import { Info, Sparkles } from 'lucide-react';

interface FleetProps {
  onSelectCar?: (carName: string) => void;
  filterCarId?: string;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectCar, filterCarId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('recommended');
  const [maxPrice, setMaxPrice] = useState<number>(8000);

  // If a filterCarId was set externally from BookingWidget
  React.useEffect(() => {
    if (filterCarId && filterCarId !== 'all') {
      const match = vehicles.find((v) => v.id === filterCarId);
      if (match) {
        setSearchQuery(match.name);
      }
    }
  }, [filterCarId]);

  const filteredVehicles = useMemo(() => {
    let list = [...vehicles];

    // Filter by Category
    if (selectedCategory !== 'all') {
      list = list.filter((v) => v.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      list = list.filter(
        (v) =>
          v.name.toLowerCase().includes(query) ||
          v.category.toLowerCase().includes(query)
      );
    }

    // Filter by Max Price
    list = list.filter((v) => v.pricePerDay <= maxPrice);

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else {
      // Recommended: featured first, then standard order
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy, maxPrice]);

  return (
    <section id="fleet" className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#f7b900] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Complete Vehicle Fleet
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Choose Your <span className="text-[#f7b900]">Ride</span>
          </h2>

          <p className="mt-3 text-base text-zinc-300 font-normal">
            Find the car that fits your journey. Transparent daily rental rates clearly displayed.
          </p>
        </div>

        {/* Interactive Filters Bar */}
        <div className="mb-10">
          <VehicleFilters
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            resultCount={filteredVehicles.length}
          />
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelectForBooking={onSelectCar}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[#171d1a] border border-white/10 rounded-2xl p-12 text-center">
            <p className="text-lg font-semibold text-white">No vehicles found matching your criteria</p>
            <p className="text-sm text-zinc-400 mt-2">Try adjusting your category, price range, or search keyword.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setMaxPrice(8000);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#f7b900] text-[#09090b] font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pricing Disclaimer */}
        <div className="mt-12 p-4 rounded-2xl bg-[#111513] border border-white/10 flex items-start gap-3 text-xs text-zinc-400 max-w-4xl mx-auto">
          <Info className="w-4 h-4 text-[#f7b900] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Pricing Disclaimer:</strong> Rental prices shown are based on the supplied daily rates. Availability and rental terms should be confirmed at the time of booking.
          </p>
        </div>
      </div>
    </section>
  );
};
