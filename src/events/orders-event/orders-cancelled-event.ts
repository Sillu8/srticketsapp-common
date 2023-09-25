import { subjects } from '../subjects';

export interface OrderCancelledEvent {
  subject: subjects.OrderCancelled,
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
      price: number;
    }
  }
}