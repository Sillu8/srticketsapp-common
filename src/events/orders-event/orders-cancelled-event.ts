import { subjects } from '../subjects';

export interface OrderCancelledEvent {
  subject: subjects.OrderCancelled,
  data: {
    id: string;
    ticket: {
      id: string;
      price: string;
    }
  }
}