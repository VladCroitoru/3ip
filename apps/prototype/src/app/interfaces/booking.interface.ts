export interface Booking {
  id: string;
  email: string;
  date: Date;
  seats: number;
  location: {
    name: string;
    address: string;
    description: string;
  };
}
