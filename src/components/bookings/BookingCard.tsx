import React from 'react';
import type { Booking } from '../../types/booking';
import { Card } from '../ui/Card';
import { StatusBadge } from './StatusBadge';
import { Calendar, User, Plane } from 'lucide-react';

interface BookingCardProps {
  booking: Booking;
  onClick: (booking: Booking) => void;
}

/**
 * Mobile-optimized BookingCard.
 * High clarity and touch-friendly interaction for small screens.
 */
export const BookingCard: React.FC<BookingCardProps> = ({ booking, onClick }) => {
  return (
    <Card 
      className="p-5 flex flex-col gap-4 cursor-pointer hover:border-primary/20 transition-all active:scale-[0.98] focus:ring-2 focus:ring-primary/20 focus:outline-none"
      onClick={() => onClick(booking)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(booking);
        }
      }}
      tabIndex={0}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
            {booking.bookingId}
          </span>
          <h3 className="text-base font-bold text-foreground">
            {booking.customerName}
          </h3>
        </div>
        <StatusBadge status={booking.status} />
      </div>

      <div className="space-y-3 pt-2 border-t border-border/50">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
            <Plane className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground font-medium uppercase">Package</span>
            <span className="text-sm font-semibold text-foreground line-clamp-1">{booking.packageName}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground font-medium uppercase">Travel Date</span>
              <span className="text-xs font-semibold text-foreground">{booking.travelDate}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground font-medium uppercase">Travelers</span>
              <span className="text-xs font-semibold text-foreground">{booking.travelers} Pax</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between pt-4 border-t border-border/50">
        <span className="text-xs font-medium text-muted-foreground">Total Amount</span>
        <span className="text-lg font-bold text-primary">
          {booking.currency} {booking.totalAmount.toLocaleString()}
        </span>
      </div>
    </Card>
  );
};
