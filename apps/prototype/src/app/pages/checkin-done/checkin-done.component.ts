import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'prototype-checkin-done',
  templateUrl: './checkin-done.component.html',
  styleUrls: ['./checkin-done.component.css'],
})
export class CheckinDoneComponent {
  bookingId: string = this.route.snapshot.paramMap.get('id') || '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  getSubtitle(): string {
    return `Booking ${this.bookingId} confirmed. You can show this confirmation screen to the host to proceed further.`;
  }

  async onGoHome(): Promise<void> {
    await this.router.navigateByUrl('/');
  }

  async onCheckout(): Promise<void> {
    this.router.navigateByUrl(`/checkout/${this.bookingId}`);
  }
}
