export interface WhatsAppEnquiryParams {
  vehicleName?: string;
  price?: number;
  customerName?: string;
  pickupDate?: string;
  returnDate?: string;
  pickupLocation?: string;
}

const PHONE_NUMBER = '919102430175';

export function generateWhatsAppLink(
  vehicleName?: string,
  price?: number,
  params?: {
    customerName?: string;
    pickupDate?: string;
    returnDate?: string;
    pickupLocation?: string;
  }
): string {
  let text = '';

  if (vehicleName && price) {
    if (params && (params.customerName || params.pickupDate || params.pickupLocation)) {
      text = `Hello VK Rides Self Drive Car,\n\nI am interested in booking:\n\nVehicle: ${vehicleName}\nRental Rate: ₹${price.toLocaleString('en-IN')}/day\n\nName: ${params.customerName || ''}\nPickup Date: ${params.pickupDate || ''}\nReturn Date: ${params.returnDate || ''}\nPickup Location: ${params.pickupLocation || ''}\n\nPlease share availability and booking details.`;
    } else {
      text = `Hello VK Rides, I am interested in renting the ${vehicleName} at ₹${price.toLocaleString('en-IN')}/day. Please share the availability and booking details.`;
    }
  } else if (vehicleName) {
    text = `Hello VK Rides Self Drive Car, I am interested in renting the ${vehicleName}. Please share availability and booking details.`;
  } else {
    text = `Hello VK Rides Self Drive Car, I would like to enquire about self-drive car rental. Please share the availability and booking details.`;
  }

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function generateFullBookingWhatsAppLink(data: {
  fullName: string;
  phone: string;
  email?: string;
  vehicleRequired: string;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  passengers: number;
  additionalRequirements?: string;
}): string {
  const text = `Hello VK Rides Self Drive Car,

New Self-Drive Booking Enquiry:
--------------------------------
Vehicle: ${data.vehicleRequired}
Customer: ${data.fullName}
Phone: ${data.phone}
${data.email ? `Email: ${data.email}\n` : ''}Pickup Location: ${data.pickupLocation}
Pickup: ${data.pickupDate} at ${data.pickupTime}
Return: ${data.returnDate} at ${data.returnTime}
Passengers: ${data.passengers}
${data.additionalRequirements ? `Notes: ${data.additionalRequirements}\n` : ''}--------------------------------
Please confirm availability and booking procedure.`;

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}
