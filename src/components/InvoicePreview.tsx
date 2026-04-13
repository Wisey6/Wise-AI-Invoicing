"use client";

import { InvoiceData } from "@/types/invoice";
import {
  formatCurrency,
  formatDate,
  calculateSubtotal,
  calculateTax,
  calculateTotal,
} from "@/lib/utils";

interface InvoicePreviewProps {
  data: InvoiceData;
}

export function InvoicePreview({ data }: InvoicePreviewProps) {
  const subtotal = calculateSubtotal(data.lineItems);
  const tax = calculateTax(subtotal, data.taxRate);
  const total = calculateTotal(subtotal, tax);

  return (
    <div
      id="invoice-preview"
      className="bg-white text-[#111827] rounded-xl overflow-hidden shadow-lg print:shadow-none print:rounded-none"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a0b14] to-[#111227] px-8 py-8 print:bg-white print:py-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Logo for screen */}
            <div className="print:hidden">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="8"
                  fill="#3b82f6"
                  fillOpacity="0.15"
                />
                <path
                  d="M10 26L15 14L20 22L25 14L30 26"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="20" cy="12" r="2" fill="#3b82f6" />
              </svg>
            </div>
            {/* Logo for print */}
            <div className="hidden print:block">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="8"
                  fill="#3b82f6"
                  fillOpacity="0.1"
                />
                <path
                  d="M10 26L15 14L20 22L25 14L30 26"
                  stroke="#0a0b14"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="20" cy="12" r="2" fill="#3b82f6" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white print:text-[#111827]">
                {data.fromName || "Wise AI"}
              </h1>
              {data.fromEmail && (
                <p className="text-sm text-[#9ca3af] print:text-[#6b7280]">
                  {data.fromEmail}
                </p>
              )}
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-white print:text-[#111827] tracking-tight">
              INVOICE
            </h2>
            <p className="text-sm font-mono text-[#9ca3af] print:text-[#6b7280] mt-1">
              {data.invoiceNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Dates & Addresses */}
      <div className="px-8 py-6 border-b border-[#e5e7eb]">
        <div className="grid grid-cols-2 gap-8">
          {/* From */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-2">
              From
            </p>
            <p className="text-sm font-semibold text-[#111827]">
              {data.fromName || "Your Business"}
            </p>
            {data.fromAddress && (
              <p className="text-sm text-[#6b7280] whitespace-pre-line mt-1">
                {data.fromAddress}
              </p>
            )}
            {data.fromPhone && (
              <p className="text-sm text-[#6b7280] mt-1">{data.fromPhone}</p>
            )}
            {data.fromEmail && (
              <p className="text-sm text-[#6b7280]">{data.fromEmail}</p>
            )}
          </div>

          {/* Bill To */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-2">
              Bill To
            </p>
            <p className="text-sm font-semibold text-[#111827]">
              {data.clientName || "Client Name"}
            </p>
            {data.clientAddress && (
              <p className="text-sm text-[#6b7280] whitespace-pre-line mt-1">
                {data.clientAddress}
              </p>
            )}
            {data.clientPhone && (
              <p className="text-sm text-[#6b7280] mt-1">
                {data.clientPhone}
              </p>
            )}
            {data.clientEmail && (
              <p className="text-sm text-[#6b7280]">{data.clientEmail}</p>
            )}
          </div>
        </div>

        {/* Dates */}
        <div className="flex gap-8 mt-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-1">
              Issue Date
            </p>
            <p className="text-sm font-medium text-[#111827]">
              {formatDate(data.issueDate)}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-1">
              Due Date
            </p>
            <p className="text-sm font-medium text-[#111827]">
              {formatDate(data.dueDate)}
            </p>
          </div>
        </div>
      </div>

      {/* Line Items Table */}
      <div className="px-8 py-6">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-[#111827]">
              <th className="text-left text-xs font-semibold uppercase tracking-wider text-[#6b7280] pb-3">
                Description
              </th>
              <th className="text-right text-xs font-semibold uppercase tracking-wider text-[#6b7280] pb-3 w-20">
                Qty
              </th>
              <th className="text-right text-xs font-semibold uppercase tracking-wider text-[#6b7280] pb-3 w-28">
                Rate
              </th>
              <th className="text-right text-xs font-semibold uppercase tracking-wider text-[#6b7280] pb-3 w-28">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data.lineItems.map((item) => {
              const amount = item.quantity * item.rate;
              return (
                <tr key={item.id} className="border-b border-[#e5e7eb]">
                  <td className="py-3 text-sm text-[#111827]">
                    {item.description || "—"}
                  </td>
                  <td className="py-3 text-sm text-[#111827] text-right font-mono">
                    {item.quantity}
                  </td>
                  <td className="py-3 text-sm text-[#111827] text-right font-mono">
                    {formatCurrency(item.rate, data.currency)}
                  </td>
                  <td className="py-3 text-sm text-[#111827] text-right font-mono font-medium">
                    {formatCurrency(amount, data.currency)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end mt-6">
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#6b7280]">Subtotal</span>
              <span className="font-mono text-[#111827]">
                {formatCurrency(subtotal, data.currency)}
              </span>
            </div>
            {data.taxRate > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-[#6b7280]">
                  Tax ({data.taxRate}%)
                </span>
                <span className="font-mono text-[#111827]">
                  {formatCurrency(tax, data.currency)}
                </span>
              </div>
            )}
            <div className="flex justify-between text-base font-bold pt-2 border-t-2 border-[#111827]">
              <span className="text-[#111827]">Total</span>
              <span className="font-mono text-[#111827]">
                {formatCurrency(total, data.currency)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      {data.notes && (
        <div className="px-8 pb-6">
          <div className="bg-[#f9fafb] rounded-lg p-4 border border-[#e5e7eb]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-2">
              Notes
            </p>
            <p className="text-sm text-[#6b7280] whitespace-pre-line">
              {data.notes}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="px-8 py-4 border-t border-[#e5e7eb] bg-[#f9fafb]">
        <p className="text-xs text-center text-[#9ca3af]">
          Thank you for your business &bull; {data.fromName || "Wise AI"}
        </p>
      </div>
    </div>
  );
}
