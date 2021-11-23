import { Location } from './location.interface';
import { User } from './user.interface';
export interface Booking {
  id: string;
  date: Date;
  seats: number;
  user: User;
  location: Location;
}
