import { subjects } from '../subjects';

export interface TicketCreatedEvent {
  subject: subjects.TicketCreated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
}