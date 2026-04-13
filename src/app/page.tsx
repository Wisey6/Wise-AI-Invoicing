"use client";

import { useState } from "react";
import { StarField } from "@/components/StarField";
import { WiseLogoFull } from "@/components/WiseLogo";
import { InvoiceForm } from "@/components/InvoiceForm";
import { InvoicePreview } from "@/components/InvoicePreview";
import { InvoiceData } from "@/types/invoice";
import {
  generateInvoiceNumber,
  getTodayDate,
  getDueDateDefault,
} from "@/lib/utils";

const defaultInvoice: InvoiceData = {
  invoiceNumber: generateInvoiceNumber(),
  issueDate: getTodayDate(),
  dueDate: getDueDateDefault(),
  fromName: "Wise AI",
  fromEmail: "hello@wiseai.com",
  fromAddress: "",
  fromPhone: "",
  clientName: "",
  clientEmail: "",
  clientAddress: "",
  clientPhone: "",
  lineItems: [
    {
      id: crypto.randomUUID(),
      description: "",
      quantity: 1,
      rate: 0,
    },
  ],
  notes: "Payment due within 30 days of invoice date.\nThank you for choosing Wise AI.",
  taxRate: 0,
  currency: "USD",
  stripePaymentLink: "",
};

type ViewMode = "split" | "form" | "preview";

export default function Home() {
  const [invoice, setInvoice] = useState<InvoiceData>(defaultInvoice);
  const [viewMode, setViewMode] = useState<ViewMode>("split");

  const handlePrint = () => {
    window.print();
  };

  const handleNewInvoice = () => {
    setInvoice({
      ...defaultInvoice,
      invoiceNumber: generateInvoiceNumber(),
      issueDate: getTodayDate(),
      dueDate: getDueDateDefault(),
      lineItems: [
        {
          id: crypto.randomUUID(),
          description: "",
          quantity: 1,
          rate: 0,
        },
      ],
    });
  };

  return (
    <div className="wise-bg-cosmic min-h-screen flex flex-col">
      <StarField />

      {/* Header */}
      <header className="relative z-10 no-print border-b border-[#1e2044]">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <WiseLogoFull />
          <div className="flex items-center gap-3">
            {/* View mode toggles - desktop */}
            <div className="hidden md:flex items-center bg-[#111227] border border-[#1e2044] rounded-lg p-1">
              <button
                onClick={() => setViewMode("form")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewMode === "form"
                    ? "bg-[#1a1b3a] text-white"
                    : "text-[#6b7280] hover:text-[#9ca3af]"
                }`}
              >
                Form
              </button>
              <button
                onClick={() => setViewMode("split")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewMode === "split"
                    ? "bg-[#1a1b3a] text-white"
                    : "text-[#6b7280] hover:text-[#9ca3af]"
                }`}
              >
                Split
              </button>
              <button
                onClick={() => setViewMode("preview")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewMode === "preview"
                    ? "bg-[#1a1b3a] text-white"
                    : "text-[#6b7280] hover:text-[#9ca3af]"
                }`}
              >
                Preview
              </button>
            </div>

            <button
              onClick={handleNewInvoice}
              className="px-4 py-2 rounded-lg text-sm font-medium border border-[#374151] text-white hover:bg-[#1a1b3a] transition-colors"
            >
              New Invoice
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-[#0a0b14] hover:bg-white/90 transition-colors"
            >
              Print / PDF
            </button>
          </div>
        </div>
      </header>

      {/* Mobile view toggle */}
      <div className="md:hidden no-print relative z-10 px-6 pt-4">
        <div className="flex items-center bg-[#111227] border border-[#1e2044] rounded-lg p-1 w-full">
          <button
            onClick={() => setViewMode("form")}
            className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
              viewMode === "form"
                ? "bg-[#1a1b3a] text-white"
                : "text-[#6b7280] hover:text-[#9ca3af]"
            }`}
          >
            Form
          </button>
          <button
            onClick={() => setViewMode("split")}
            className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
              viewMode === "split"
                ? "bg-[#1a1b3a] text-white"
                : "text-[#6b7280] hover:text-[#9ca3af]"
            }`}
          >
            Split
          </button>
          <button
            onClick={() => setViewMode("preview")}
            className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
              viewMode === "preview"
                ? "bg-[#1a1b3a] text-white"
                : "text-[#6b7280] hover:text-[#9ca3af]"
            }`}
          >
            Preview
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-[1600px] mx-auto w-full px-6 py-6">
        <div
          className={`grid gap-6 h-full ${
            viewMode === "split"
              ? "md:grid-cols-2"
              : "grid-cols-1 max-w-3xl mx-auto"
          }`}
        >
          {/* Form Panel */}
          {(viewMode === "form" || viewMode === "split") && (
            <div className="no-print overflow-y-auto max-h-[calc(100vh-140px)] pr-2">
              <InvoiceForm data={invoice} onChange={setInvoice} />
            </div>
          )}

          {/* Preview Panel */}
          {(viewMode === "preview" || viewMode === "split") && (
            <div className="overflow-y-auto max-h-[calc(100vh-140px)]">
              <InvoicePreview data={invoice} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 no-print border-t border-[#1e2044] py-4">
        <p className="text-center text-xs text-[#6b7280]">
          Wise AI Invoicing &bull; We Make AI Work for You, Not Against You.
        </p>
      </footer>
    </div>
  );
}
