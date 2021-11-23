import { USERS } from './users';
import { BOOKINGS } from './bookings';
import { Itinerary } from '../interfaces/itinerary.interface';

export const ITINERARIES: Itinerary[] = [
  // GARBAGE WEIGHT COLLECTION
  {
    id: 'c41997e3-e4f5-40d9-bdf5-cf7784970d85',
    user: USERS[0],
    booking: BOOKINGS[0],
    duration: 4800,
    distance: 2000,
    garbageWeight: 700,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: 'c41997e3-e4f5-40d9-bdf5-cf7784970d85',
    user: USERS[4],
    booking: BOOKINGS[0],
    duration: 6000,
    distance: 3000,
    garbageWeight: 1500,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: 'c41997e3-e4f5-40d9-bdf5-cf7784970d85',
    user: USERS[5],
    booking: BOOKINGS[0],
    duration: 6100,
    distance: 2500,
    garbageWeight: 1300,
    startDate: new Date(),
    endDate: new Date(),
  },
  // DURATION ON WATER and DISTANCE ON WATER
  {
    id: 'c41997e3-e4f5-40d9-bdf5-cf7784970d85',
    user: USERS[2],
    booking: BOOKINGS[0],
    duration: 6700,
    distance: 4500,
    garbageWeight: 1000,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: 'c41997e3-e4f5-40d9-bdf5-cf7784970d85',
    user: USERS[3],
    booking: BOOKINGS[0],
    duration: 7000,
    distance: 5000,
    garbageWeight: 1100,
    startDate: new Date(),
    endDate: new Date(),
  },
];
