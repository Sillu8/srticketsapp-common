import { subjects } from '../subjects';

export interface TicketUpdatedEvent {
  subject: subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    version: number;
    price: number;
    userId: string;
    orderId?: string;
  };
}