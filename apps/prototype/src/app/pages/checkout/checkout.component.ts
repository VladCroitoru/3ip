import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'prototype-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  booking: any = null;
  bookingId: string = this.route.snapshot.paramMap.get('id') || '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookingService: BookingService
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.bookingId) {
      this.booking = await this.bookingService.getBooking(this.bookingId);
    }
  }

  async onConfirm(): Promise<void> {
    try {
      this.booking = await this.bookingService.getBooking(this.bookingId);
    } catch (error) {
      alert('No such booking found');
    }
  }

  hasBookingInProgress(): boolean {
    return !!this.booking;
  }
}
