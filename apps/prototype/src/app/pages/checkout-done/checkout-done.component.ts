import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'prototype-checkout-done',
  templateUrl: './checkout-done.component.html',
  styleUrls: ['./checkout-done.component.css'],
})
export class CheckoutDoneComponent {
  bookingId: string = this.route.snapshot.paramMap.get('id') || '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  getSubtitle(): string {
    return `Checkout completed (${this.bookingId}). Please show this confirmation screen to the host. Hope you enjoyed your time with us.`;
  }

  async onGoHome(): Promise<void> {
    await this.router.navigateByUrl('/');
  }
}
