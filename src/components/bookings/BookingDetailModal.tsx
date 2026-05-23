import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { StatusBadge } from './StatusBadge';
import type { Booking } from '../../types/booking';
import { Calendar, User, Mail, Hash, MapPin, Tag, ArrowRight } from 'lucide-react';

interface BookingDetailModalProps {
  booking: Booking | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Detailed view for a specific booking.
 * Displays all booking metadata in a clean, organized layout.
 */
export const BookingDetailModal: React.FC<BookingDetailModalProps> = ({ 
  booking, 
  isOpen, 
  onClose 
}) => {
  if (!booking) return null;

  const detailItems = [
    { label: 'Booking ID', value: booking.bookingId, icon: Hash },
    { label: 'Booking Date', value: booking.bookingDate, icon: Tag },
    { label: 'Travel Date', value: booking.travelDate, icon: Calendar },
    { label: 'Travelers', value: `${booking.travelers} Pax`, icon: User },
    { label: 'Customer Email', value: booking.customerEmail, icon: Mail },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Booking Details"
      description="Comprehensive overview of the selected travel booking."
      size="lg"
      footer={
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tight">Total Amount</span>
            <span className="text-xl font-bold text-primary">{booking.currency} {booking.totalAmount.toLocaleString()}</span>
          </div>
          <Button onClick={onClose}>Close Overview</Button>
        </div>
      }
    >
      <div className="space-y-8">
        {/* Top Status & Name Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Customer Name</span>
            <h4 className="text-xl font-bold text-foreground">{booking.customerName}</h4>
          </div>
          <StatusBadge status={booking.status} className="w-fit scale-110" />
        </div>

        {/* Package Info Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <h5 className="text-sm font-bold text-foreground uppercase tracking-tight">Travel Package</h5>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card shadow-sm flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center">
                <Tag className="h-6 w-6" />
              </div>
              <span className="text-base font-bold text-foreground">{booking.packageName}</span>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
          </div>
        </div>

        {/* Detailed Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {detailItems.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <item.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{item.label}</span>
                <span className="text-sm font-semibold text-foreground">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};
