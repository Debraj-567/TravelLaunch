import React, { useState, useMemo } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { BookingTable } from '../components/bookings/BookingTable';
import { BookingCard } from '../components/bookings/BookingCard';
import { FilterTabs } from '../components/bookings/FilterTabs';
import { BookingDetailModal } from '../components/bookings/BookingDetailModal';
import { EmptyState } from '../components/ui/EmptyState';
import { MOCK_BOOKINGS } from '../data/bookings';
import type { Booking, BookingStatus } from '../types/booking';
import { CalendarDays, Filter } from 'lucide-react';

/**
 * Bookings Page component.
 * Manages travel bookings with status filtering and detailed views.
 */
const BookingsPage: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<BookingStatus | 'all'>('all');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoized filtering for status-based views
  const filteredBookings = useMemo(() => {
    if (selectedStatus === 'all') return MOCK_BOOKINGS;
    return MOCK_BOOKINGS.filter((b) => b.status === selectedStatus);
  }, [selectedStatus]);

  const handleBookingClick = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Use a timeout to clear selection AFTER modal animation closes for smoothness
    setTimeout(() => setSelectedBooking(null), 300);
  };

  return (
    <PageContainer>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            Customer Bookings
          </h2>
          <p className="text-muted-foreground text-sm">
            Track, manage and review all travel bookings across the platform.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mr-2">
            <Filter className="h-3 w-3" />
            <span>Filter by status</span>
          </div>
          <FilterTabs 
            selectedStatus={selectedStatus} 
            onStatusChange={setSelectedStatus} 
          />
        </div>
      </div>

      {/* Content Section */}
      {filteredBookings.length > 0 ? (
        <>
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <BookingTable 
              bookings={filteredBookings} 
              onRowClick={handleBookingClick} 
            />
          </div>

          {/* Mobile/Tablet Card Grid View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
            {filteredBookings.map((booking) => (
              <BookingCard 
                key={booking.id} 
                booking={booking} 
                onClick={handleBookingClick} 
              />
            ))}
          </div>
        </>
      ) : (
        <EmptyState
          icon={CalendarDays}
          title="No bookings found"
          description={`There are currently no bookings with the status "${selectedStatus}".`}
          action={{
            label: "View All Bookings",
            onClick: () => setSelectedStatus('all')
          }}
        />
      )}

      {/* Detail Modal */}
      <BookingDetailModal 
        booking={selectedBooking}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </PageContainer>
  );
};

export default BookingsPage;
