import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle2, AlertCircle, Phone, MessageCircle, Info } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { generateFullBookingWhatsAppLink } from '../utils/whatsapp';
import { CONTACT_INFO } from '../utils/contact';

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Please enter a valid email address').or(z.literal('')),
  vehicleRequired: z.string().min(1, 'Please select a vehicle'),
  pickupLocation: z.string().min(2, 'Pickup location is required'),
  pickupDate: z.string().min(1, 'Pickup date is required'),
  pickupTime: z.string().min(1, 'Pickup time is required'),
  returnDate: z.string().min(1, 'Return date is required'),
  returnTime: z.string().min(1, 'Return time is required'),
  passengers: z.number().min(1, 'At least 1 passenger').max(8, 'Maximum 8 passengers'),
  additionalRequirements: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  preSelectedVehicle?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ preSelectedVehicle }) => {
  const [submittedData, setSubmittedData] = useState<BookingFormValues | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      vehicleRequired: preSelectedVehicle || 'Scorpio N',
      pickupLocation: 'Jamshedpur',
      pickupDate: '',
      pickupTime: '10:00 AM',
      returnDate: '',
      returnTime: '10:00 AM',
      passengers: 4,
      additionalRequirements: '',
    },
  });

  useEffect(() => {
    if (preSelectedVehicle) {
      setValue('vehicleRequired', preSelectedVehicle);
    }
  }, [preSelectedVehicle, setValue]);

  const onSubmit = (data: BookingFormValues) => {
    setSubmittedData(data);
    const link = generateFullBookingWhatsAppLink({
      fullName: data.fullName,
      phone: data.phone,
      email: data.email || undefined,
      vehicleRequired: data.vehicleRequired,
      pickupLocation: data.pickupLocation,
      pickupDate: data.pickupDate,
      pickupTime: data.pickupTime,
      returnDate: data.returnDate,
      returnTime: data.returnTime,
      passengers: data.passengers,
      additionalRequirements: data.additionalRequirements || undefined,
    });
    window.open(link, '_blank');
  };

  return (
    <div id="booking" className="max-w-4xl mx-auto bg-[#171d1a] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#f7b900] uppercase tracking-widest mb-3">
          Instant Self-Drive Request
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
          Book Your Self-Drive Car
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Fill in your journey details below. We will instantly prepare your WhatsApp booking enquiry.
        </p>
      </div>

      {submittedData ? (
        <div className="bg-[#111513] border border-[#5ee9b5]/40 rounded-2xl p-6 sm:p-8 text-center animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-[#5ee9b5]/20 text-[#5ee9b5] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Booking Enquiry Generated!
          </h3>
          <p className="mt-2 text-sm text-zinc-300 max-w-md mx-auto">
            Your enquiry for <strong className="text-[#f7b900]">{submittedData.vehicleRequired}</strong> has been transferred to WhatsApp. If the tab did not open, tap the button below:
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={generateFullBookingWhatsAppLink(submittedData)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-sm flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </a>
            <a
              href={CONTACT_INFO.phoneLink}
              className="px-6 py-3 rounded-xl bg-[#0c6b51] text-white font-semibold text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call VK Rides Now</span>
            </a>
            <button
              onClick={() => {
                setSubmittedData(null);
                reset();
              }}
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-sm font-medium border border-white/10"
            >
              New Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                {...register('fullName')}
                placeholder="Your full name"
                className={`w-full px-4 py-3 bg-[#111513] border rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#f7b900]'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register('phone')}
                placeholder="10-digit mobile number"
                className={`w-full px-4 py-3 bg-[#111513] border rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#f7b900]'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                {...register('email')}
                placeholder="name@example.com"
                className={`w-full px-4 py-3 bg-[#111513] border rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#f7b900]'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Vehicle Required */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Vehicle Required *
              </label>
              <select
                {...register('vehicleRequired')}
                className={`w-full px-4 py-3 bg-[#111513] border rounded-xl text-sm text-white focus:outline-none transition-colors cursor-pointer ${
                  errors.vehicleRequired ? 'border-red-500' : 'border-white/10 focus:border-[#f7b900]'
                }`}
              >
                {vehicles.map((v) => (
                  <option key={v.id} value={v.name} className="bg-[#171d1a] text-white">
                    {v.name} — ₹{v.pricePerDay.toLocaleString('en-IN')}/day ({v.category})
                  </option>
                ))}
              </select>
              {errors.vehicleRequired && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.vehicleRequired.message}
                </p>
              )}
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Pickup Location *
              </label>
              <input
                type="text"
                {...register('pickupLocation')}
                placeholder="e.g. Jamshedpur / Bistupur / Sakchi"
                className={`w-full px-4 py-3 bg-[#111513] border rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                  errors.pickupLocation ? 'border-red-500' : 'border-white/10 focus:border-[#f7b900]'
                }`}
              />
              {errors.pickupLocation && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.pickupLocation.message}
                </p>
              )}
            </div>

            {/* Number of Passengers */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Number of Passengers *
              </label>
              <input
                type="number"
                min="1"
                max="8"
                {...register('passengers', { valueAsNumber: true })}
                className={`w-full px-4 py-3 bg-[#111513] border rounded-xl text-sm text-white focus:outline-none transition-colors ${
                  errors.passengers ? 'border-red-500' : 'border-white/10 focus:border-[#f7b900]'
                }`}
              />
              {errors.passengers && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.passengers.message}
                </p>
              )}
            </div>

            {/* Pickup Date */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Pickup Date *
              </label>
              <input
                type="date"
                {...register('pickupDate')}
                className={`w-full px-4 py-3 bg-[#111513] border rounded-xl text-sm text-white focus:outline-none transition-colors scheme-dark ${
                  errors.pickupDate ? 'border-red-500' : 'border-white/10 focus:border-[#f7b900]'
                }`}
              />
              {errors.pickupDate && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.pickupDate.message}
                </p>
              )}
            </div>

            {/* Pickup Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Pickup Time *
              </label>
              <select
                {...register('pickupTime')}
                className="w-full px-4 py-3 bg-[#111513] border border-white/10 focus:border-[#f7b900] rounded-xl text-sm text-white focus:outline-none transition-colors cursor-pointer"
              >
                <option value="07:00 AM">07:00 AM</option>
                <option value="08:00 AM">08:00 AM</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
                <option value="08:00 PM">08:00 PM</option>
              </select>
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Return Date *
              </label>
              <input
                type="date"
                {...register('returnDate')}
                className={`w-full px-4 py-3 bg-[#111513] border rounded-xl text-sm text-white focus:outline-none transition-colors scheme-dark ${
                  errors.returnDate ? 'border-red-500' : 'border-white/10 focus:border-[#f7b900]'
                }`}
              />
              {errors.returnDate && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.returnDate.message}
                </p>
              )}
            </div>

            {/* Return Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Return Time *
              </label>
              <select
                {...register('returnTime')}
                className="w-full px-4 py-3 bg-[#111513] border border-white/10 focus:border-[#f7b900] rounded-xl text-sm text-white focus:outline-none transition-colors cursor-pointer"
              >
                <option value="08:00 AM">08:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
                <option value="08:00 PM">08:00 PM</option>
                <option value="10:00 PM">10:00 PM</option>
              </select>
            </div>
          </div>

          {/* Additional Requirements */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
              Additional Requirements (Optional)
            </label>
            <textarea
              {...register('additionalRequirements')}
              rows={3}
              placeholder="e.g. Travel to Ranchi / Ghatshila / Outstation travel, child seat requirement, etc."
              className="w-full px-4 py-3 bg-[#111513] border border-white/10 focus:border-[#f7b900] rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Pricing Disclaimer Note */}
          <div className="flex items-start gap-2.5 p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs text-zinc-400">
            <Info className="w-4 h-4 text-[#f7b900] shrink-0 mt-0.5" />
            <p>
              <strong className="text-zinc-200">Pricing Disclaimer:</strong> Rental prices shown are based on the supplied daily rates. Availability and rental terms should be confirmed at the time of booking.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-[#f7b900] hover:bg-[#e5aa00] text-[#09090b] font-extrabold text-base flex items-center justify-center gap-2.5 shadow-glow-amber transition-all active:scale-98 disabled:opacity-50 cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#09090b]" />
            <span>Send Booking Enquiry</span>
          </button>
        </form>
      )}
    </div>
  );
};
