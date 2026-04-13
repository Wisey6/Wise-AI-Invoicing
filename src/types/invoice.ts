export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  fromName: string;
  fromEmail: string;
  fromAddress: string;
  fromPhone: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  clientPhone: string;
  lineItems: LineItem[];
  notes: string;
  taxRate: number;
  currency: string;
  stripePaymentLink: string;
}
