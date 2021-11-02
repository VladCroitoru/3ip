import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'prototype-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
})
export class CheckinComponent {
  tripId = this.route.snapshot.paramMap.get('id');

  constructor(private readonly route: ActivatedRoute) {}

  onConfirmTripId() {
    console.log(this.tripId);
  }
}
