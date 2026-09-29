export interface HighlightItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  badge?: string;
}

export const quickHighlights: HighlightItem[] = [
  {
    id: 1,
    title: 'Wide Range of Cars',
    description: 'Multiple vehicle options from hatchbacks to SUVs.',
    icon: 'Car',
  },
  {
    id: 2,
    title: 'Self Drive',
    description: 'Take control of your journey.',
    icon: 'Compass',
  },
  {
    id: 3,
    title: 'Transparent Pricing',
    description: 'Daily rental prices are clearly displayed.',
    icon: 'Tag',
  },
  {
    id: 4,
    title: 'Easy Booking',
    description: 'Enquire through WhatsApp or phone.',
    icon: 'PhoneCall',
  },
];

export const howItWorksSteps: StepItem[] = [
  {
    step: '01',
    title: 'Choose Your Car',
    description: 'Browse the available vehicles and daily rental prices.',
  },
  {
    step: '02',
    title: 'Send Your Requirement',
    description: 'Choose your vehicle, travel date and rental requirement.',
  },
  {
    step: '03',
    title: 'Confirm With VK Rides',
    description: 'Contact the team through WhatsApp or phone.',
  },
  {
    step: '04',
    title: 'Pick Up & Drive',
    description: 'Complete the required rental process and start your journey.',
  },
];

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: 1,
    title: 'Wide Vehicle Selection',
    description: 'Cars ranging from economical hatchbacks to premium SUVs.',
    badge: '21 Vehicle Options',
  },
  {
    id: 2,
    title: 'Transparent Daily Pricing',
    description: 'Rental prices are displayed clearly for each listed vehicle.',
    badge: 'Clear Daily Rates',
  },
  {
    id: 3,
    title: 'Self-Drive Freedom',
    description: 'Choose your vehicle and enjoy the freedom of driving yourself.',
    badge: 'Zero Driver Hassle',
  },
  {
    id: 4,
    title: 'Easy Booking',
    description: 'Enquire through phone, email or WhatsApp.',
    badge: 'Direct Response',
  },
  {
    id: 5,
    title: 'Options for Every Budget',
    description: 'Daily rental options range from ₹1,400 to ₹5,000 based on the supplied vehicle list.',
    badge: '₹1,400 to ₹5,000/Day',
  },
];
