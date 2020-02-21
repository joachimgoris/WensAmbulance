import {Wish} from './wish.model';

export class User {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  ssn: string;
  certificate: string;
  medicalScreening: Date;
  badgeNumber: string;
  badgeExpirationDate: Date;
  shirtSize: string;
  userWishes: Wish[];
}
