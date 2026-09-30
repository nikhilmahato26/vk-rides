import React from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface VehicleFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  resultCount: number;
}

export const VehicleFilters: React.FC<VehicleFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  maxPrice,
  onMaxPriceChange,
  resultCount,
}) => {
  const categories: { label: string; value: string }[] = [
    { label: 'ALL CARS', value: 'all' },
    { label: 'SUV', value: 'SUV' },
    { label: 'SEDAN', value: 'Sedan' },
    { label: 'HATCHBACK', value: 'Hatchback' },
    { label: 'MPV', value: 'MPV' },
  ];

  return (
    <div className="space-y-4">
      {/* Top Filter Bar: Category Tabs & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Pill Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => onSelectCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#f7b900] text-[#09090b] shadow-glow-amber'
                    : 'bg-[#171d1a] text-zinc-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search cars... (e.g. Scorpio, Thar)"
            className="w-full pl-10 pr-4 py-2.5 bg-[#171d1a] border border-white/10 rounded-xl text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#f7b900] transition-colors"
          />
        </div>
      </div>

      {/* Secondary Bar: Price Range Slider, Sorting, and Result Count */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-white/5 bg-[#111513]/60 p-4 rounded-xl border border-white/5">
        {/* Result Count Notice */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#f7b900]"></span>
          <span className="text-xs font-bold text-zinc-200">
            {resultCount} {resultCount === 1 ? 'Vehicle Option' : 'Vehicle Options'}
          </span>
        </div>

        {/* Price Slider */}
        <div className="flex items-center gap-3">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#f7b900] shrink-0" />
          <span className="text-xs text-zinc-400 whitespace-nowrap">Max Price:</span>
          <input
            type="range"
            min="1400"
            max="8000"
            step="100"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-28 sm:w-36 accent-[#f7b900] cursor-pointer"
          />
          <span className="text-xs font-bold text-[#f7b900] min-w-[70px]">
            ₹{maxPrice.toLocaleString('en-IN')}/day
          </span>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort vehicles"
            className="bg-[#171d1a] border border-white/10 rounded-lg px-3 py-1.5 text-xs font-medium text-white focus:outline-none focus:border-[#f7b900] cursor-pointer"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};
