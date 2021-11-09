import { Component, OnInit } from '@angular/core';
import { LeaderboardPeriod, LeaderboardType } from './leaderboard.types';

@Component({
  selector: 'prototype-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  type: LeaderboardType = 'garbage_weight';
  period: LeaderboardPeriod = 'today';

  ngOnInit(): void {}
}
