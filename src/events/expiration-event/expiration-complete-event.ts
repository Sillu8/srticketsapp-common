import { subjects } from '../subjects';

export interface ExpirationCompleteEvent {
  subject: subjects.ExpirationComplete;
  data: {
    orderId: string;
  }
}