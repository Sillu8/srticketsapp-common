import { subjects } from '../subjects';

export interface OrderCancelledEvent {
  subject: subjects.OrderCreated,
  data: {
    id: string;
    ticket: {
      id: string;
      price: string;
    }
  }
}