import { Injectable } from '@angular/core';
import { BOOKINGS } from '../data/bookings';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookings = BOOKINGS;

  getBooking(bookingId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const booking = this.bookings.find((b) => b.id === bookingId);
      if (booking) {
        resolve(booking);
      } else {
        reject(new Error('Booking not found'));
      }
    });
  }
}
