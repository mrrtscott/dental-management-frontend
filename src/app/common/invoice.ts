import { DentalCharge } from "./dental-charge";
import { InsurancePolicy } from "./insurance-policy";
import { Payment } from "./payment";

export class Invoice {
    insurancePolicy: InsurancePolicy[];
    dentalCharge: DentalCharge[];
    insurancePaymentValue: number;
    id: number;
    generatedDate: Date;
    payment: Payment;
    subTotalDentalCharge: number;
    totalDue: number;
    taxCharge: number;
    amountPaid: number;
    balance: number;
    invoiceStatus: string;

}
