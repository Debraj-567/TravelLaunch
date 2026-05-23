import type { BaseResource, Currency } from './common';

export type BookingStatus = 'new' | 'confirmed' | 'cancelled';

export interface Booking extends BaseResource {
  readonly bookingId: string;
  readonly customerName: string;
  readonly customerEmail: string;
  readonly packageName: string;
  readonly travelers: number;
  readonly totalAmount: number;
  readonly currency: Currency;
  readonly status: BookingStatus;
  readonly bookingDate: string;
  readonly travelDate: string;
}
