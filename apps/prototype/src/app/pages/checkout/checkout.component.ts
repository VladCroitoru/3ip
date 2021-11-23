import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { Booking } from '../../interfaces/booking.interface';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'prototype-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  booking: Booking | undefined;
  bookingId: string = this.route.snapshot.paramMap.get('id') || '';

  current = 0;
  weight: number | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookingService: BookingService,
    private readonly message: NzMessageService,
    private readonly router: Router
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

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} file upload failed.`);
    }
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  done(): void {
    this.router.navigateByUrl(`/checkout/${this.bookingId}/done`);
  }
}
