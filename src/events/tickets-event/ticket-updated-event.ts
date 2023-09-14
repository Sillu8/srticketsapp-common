import { subjects } from '../subjects';

export interface TicketUpdatedEvent {
  subject: subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}