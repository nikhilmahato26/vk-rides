export type VehicleCategory = 'SUV' | 'Sedan' | 'Hatchback' | 'MPV';

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  pricePerDay: number;
  image: string;
  description: string;
  seats?: number;
  featured?: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  vehicleRequired: string;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  passengers: number;
  additionalRequirements?: string;
}

export interface QuickSearchData {
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  selectedCar: string;
}
