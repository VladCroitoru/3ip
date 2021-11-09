import { Injectable } from '@angular/core';
import { Booking } from '../interfaces/booking.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private readonly bookings: Booking[] = [
    {
      id: 'c854a9c2-0158-40a4-8189-dd160ccbc087',
      email: 'volunteer@greenkayak.org',
      date: new Date(),
      seats: 2,
      location: {
        name: 'LETZ SUSHI Islands Brygge',
        address: 'Snorresgade 1, 2300 København S',
        description: `Take one for the team and for the sea in the GreenKayak that LETZ SUSHI host at Islandsbrygge. At LETZ SUSHI Islands Brygge you will be given everything you need for a pleasant trip on the water. The staff at the restaurant will point you to the GreenKayak. Then you are ready to go GreenKayaking in the city's beautiful harbor while collecting trash on the water. It is completely free and you can subsequently sort the rubbish into containers. It is community spirit at its best.`,
      },
    },
  ];

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
