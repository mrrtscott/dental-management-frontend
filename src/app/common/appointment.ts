import { Invoice } from "./invoice";

export class Appointment {
    requestedAppointmentDate: Date;
    appointmentReminder: boolean;
    notes: string;
    id: number;
    setAppointmentDate: Date;
    appointmentStatus: string;
    invoice: Invoice[];

}
