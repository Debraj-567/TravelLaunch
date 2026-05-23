import React from 'react';
import type { Booking } from '../../types/booking';
import { StatusBadge } from './StatusBadge';
import { ChevronRight } from 'lucide-react';

interface BookingTableProps {
  bookings: readonly Booking[];
  onRowClick: (booking: Booking) => void;
}

/**
 * Desktop-first BookingTable.
 * Features semantic structure, clean alignment, and hover feedback.
 */
export const BookingTable: React.FC<BookingTableProps> = ({ bookings, onRowClick }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="bg-muted/30 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">ID</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Customer</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Package</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground text-center">Travelers</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Travel Date</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Amount</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</th>
              <th className="px-6 py-4 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {bookings.map((booking) => (
              <tr 
                key={booking.id}
                onClick={() => onRowClick(booking)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onRowClick(booking);
                  }
                }}
                tabIndex={0}
                className="group cursor-pointer hover:bg-muted/30 transition-colors focus:bg-muted/30 focus:outline-none"
              >
                <td className="px-6 py-4">
                  <span className="text-xs font-bold text-muted-foreground">{booking.bookingId}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{booking.customerName}</span>
                    <span className="text-[10px] text-muted-foreground">{booking.customerEmail}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-foreground line-clamp-1">{booking.packageName}</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-medium text-foreground">{booking.travelers}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-foreground">{booking.travelDate}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-primary">
                    {booking.currency} {booking.totalAmount.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={booking.status} />
                </td>
                <td className="px-6 py-4 text-right">
                  <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
