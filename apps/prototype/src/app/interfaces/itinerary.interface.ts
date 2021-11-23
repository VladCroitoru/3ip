import { Booking } from './booking.interface';
import { User } from './user.interface';

export interface Itinerary {
  id: string;
  user: User;
  booking: Booking;
  // measured in seconds
  duration: number;
  // measured in meters
  distance: number;
  // measured in grams
  garbageWeight: number;
  startDate: Date;
  endDate: Date;
}
