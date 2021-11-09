import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'prototype-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  onCheckIn() {
    this.router.navigateByUrl('/checkin');
  }

  onCheckOut() {
    this.router.navigateByUrl('/checkout');
  }

  onCheckLeaderboard() {
    this.router.navigateByUrl('/leaderboard');
  }

  onAboutUs() {
    this.router.navigateByUrl('/aboutus');
  }
}
