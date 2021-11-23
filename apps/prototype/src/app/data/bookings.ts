import { Booking } from '../interfaces/booking.interface';
import { LOCATIONS } from './locations';
import { USERS } from './users';

export const BOOKINGS: Booking[] = [
  {
    id: 'c854a9c2-0158-40a4-8189-dd160ccbc087',
    date: new Date(),
    seats: 2,
    user: USERS[0],
    location: LOCATIONS[1],
  },
  {
    id: '1ecfe3ee-a18f-491f-b4af-ecf62622dc19',
    date: new Date(),
    seats: 1,
    user: USERS[1],
    location: LOCATIONS[2],
  },
  {
    id: '1ecfe3ee-a18f-491f-b4af-ecf62622dc99',
    date: new Date(),
    seats: 1,
    user: USERS[2],
    location: LOCATIONS[2],
  },
  {
    id: '1ecfe3ee-a18f-491f-b4af-ecf62622dc69',
    date: new Date(),
    seats: 1,
    user: USERS[3],
    location: LOCATIONS[2],
  },
  {
    id: '1ecfe3ee-a18f-491f-b4af-ecf62622dc29',
    date: new Date(),
    seats: 1,
    user: USERS[4],
    location: LOCATIONS[2],
  },
  {
    id: '1ecfe3ee-a18f-491f-b4af-ecf62622dc46',
    date: new Date(),
    seats: 1,
    user: USERS[5],
    location: LOCATIONS[2],
  },
];
