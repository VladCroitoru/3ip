import { Component, OnInit } from '@angular/core';
import { Itinerary } from '../../interfaces/itinerary.interface';
import { LeaderboardService } from '../../services/leaderboard.service';
import {
  LeaderboardPeriod,
  LeaderboardType,
  LeaderboardParameter,
} from './leaderboard.types';
import * as util from './leaderboard.util';

@Component({
  selector: 'prototype-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  util = util;
  data: Itinerary[] = [];

  typeEnum = LeaderboardType;
  periodEnum = LeaderboardPeriod;
  parametersEnum = LeaderboardParameter;
  type: LeaderboardType = LeaderboardType.INDIVIDUAL;
  period: LeaderboardPeriod = LeaderboardPeriod.THIS_MONTH;
  parameters: LeaderboardParameter = LeaderboardParameter.GARBAGE_WEIGHT;

  constructor(private readonly leaderboardService: LeaderboardService) {}

  async ngOnInit(): Promise<void> {
    await this.fetchData();
  }

  async fetchData(): Promise<void> {
    this.data = [];
    setTimeout(async () => {
      this.data = await this.leaderboardService.getItineraries(
        this.period,
        this.parameters
      );
    }, 150);
  }
}
