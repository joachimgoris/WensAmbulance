import {User} from './user.model';
import {Patient} from './patient.model';

export class Wish {
  requestorName: string;
  requestorEmail: string;
  requestorPhoneNumber: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  volunteers: User[];
  patient: Patient;
  evaluation: string;
}
