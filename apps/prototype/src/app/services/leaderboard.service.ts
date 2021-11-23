import { Injectable } from '@angular/core';
import { ITINERARIES } from '../data/itineraries';
import { Itinerary } from '../interfaces/itinerary.interface';
import {
  LeaderboardParameter,
  LeaderboardPeriod,
} from '../pages/leaderboard/leaderboard.types';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  itineraries = ITINERARIES;

  getItineraries(
    period: LeaderboardPeriod,
    parameter: LeaderboardParameter
  ): Promise<Itinerary[]> {
    return new Promise((resolve, reject) => {
      console.log(parameter);
      if (parameter === LeaderboardParameter.GARBAGE_WEIGHT) {
        console.log('yo its garbage time');
        resolve(this.itineraries.sort(this.sortByProperty('garbageWeight')));
      }
      if (parameter === LeaderboardParameter.DISTANCE_ON_WATER) {
        console.log('yo its distance time');
        resolve(this.itineraries.sort(this.sortByProperty('distance')));
      }
      if (parameter === LeaderboardParameter.TIME_ON_WATER) {
        console.log('yo it time time');
        resolve(this.itineraries.sort(this.sortByProperty('duration')));
      }
      reject(new Error('Invalid parameter'));
    });
  }

  private sortByProperty(property: 'garbageWeight' | 'duration' | 'distance') {
    return (itinerary1: Itinerary, itinerary2: Itinerary) => {
      if (itinerary1[property] < itinerary2[property]) {
        return 1;
      }
      if (itinerary1[property] > itinerary2[property]) {
        return -1;
      }
      return 0;
    };
  }
}
