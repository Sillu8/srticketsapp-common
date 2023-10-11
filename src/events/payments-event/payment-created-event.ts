import { subjects } from '../subjects';

export interface PaymentCreatedEvent {
  subject: subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
  }
}