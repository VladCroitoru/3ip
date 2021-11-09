import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../../interfaces/booking.interface';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'prototype-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
})
export class CheckinComponent implements OnInit {
  booking!: Booking;
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

  async onCheckin(): Promise<void> {
    alert('Check-in done');
  }

  async onConfirm(): Promise<void> {
    try {
      this.booking = await this.bookingService.getBooking(this.bookingId);
    } catch (error) {
      alert('Booking not found');
    }
  }

  hasValidBooking(): boolean {
    return !!this.booking;
  }
}
