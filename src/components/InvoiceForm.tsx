"use client";

import { InvoiceData, LineItem } from "@/types/invoice";

interface InvoiceFormProps {
  data: InvoiceData;
  onChange: (data: InvoiceData) => void;
}

function InputField({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-[#9ca3af]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-[#0a0b14] border border-[#1e2044] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#6b7280] focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/30 transition-colors"
      />
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-[#9ca3af]">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="bg-[#0a0b14] border border-[#1e2044] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#6b7280] focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/30 transition-colors resize-none"
      />
    </div>
  );
}

export function InvoiceForm({ data, onChange }: InvoiceFormProps) {
  const update = (field: keyof InvoiceData, value: string | number) => {
    onChange({ ...data, [field]: value });
  };

  const updateLineItem = (
    index: number,
    field: keyof LineItem,
    value: string | number
  ) => {
    const items = [...data.lineItems];
    items[index] = { ...items[index], [field]: value };
    onChange({ ...data, lineItems: items });
  };

  const addLineItem = () => {
    onChange({
      ...data,
      lineItems: [
        ...data.lineItems,
        {
          id: crypto.randomUUID(),
          description: "",
          quantity: 1,
          rate: 0,
        },
      ],
    });
  };

  const removeLineItem = (index: number) => {
    if (data.lineItems.length <= 1) return;
    const items = data.lineItems.filter((_, i) => i !== index);
    onChange({ ...data, lineItems: items });
  };

  return (
    <div className="space-y-6">
      {/* Invoice Details */}
      <section className="bg-[#111227] border border-[#1e2044] rounded-xl p-6">
        <h2 className="text-base font-semibold text-white mb-4">
          Invoice Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Invoice Number"
            value={data.invoiceNumber}
            onChange={(v) => update("invoiceNumber", v)}
            placeholder="WA-2604-0001"
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#9ca3af]">
              Currency
            </label>
            <select
              value={data.currency}
              onChange={(e) => update("currency", e.target.value)}
              className="bg-[#0a0b14] border border-[#1e2044] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/30 transition-colors"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (&euro;)</option>
              <option value="GBP">GBP (&pound;)</option>
              <option value="CAD">CAD ($)</option>
              <option value="AUD">AUD ($)</option>
            </select>
          </div>
          <InputField
            label="Issue Date"
            value={data.issueDate}
            onChange={(v) => update("issueDate", v)}
            type="date"
          />
          <InputField
            label="Due Date"
            value={data.dueDate}
            onChange={(v) => update("dueDate", v)}
            type="date"
          />
        </div>
      </section>

      {/* From (Your Business) */}
      <section className="bg-[#111227] border border-[#1e2044] rounded-xl p-6">
        <h2 className="text-base font-semibold text-white mb-4">From</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Business Name"
            value={data.fromName}
            onChange={(v) => update("fromName", v)}
            placeholder="Wise AI"
          />
          <InputField
            label="Email"
            value={data.fromEmail}
            onChange={(v) => update("fromEmail", v)}
            type="email"
            placeholder="hello@wiseai.com"
          />
          <InputField
            label="Phone"
            value={data.fromPhone}
            onChange={(v) => update("fromPhone", v)}
            type="tel"
            placeholder="+1 (555) 000-0000"
          />
          <div /> {/* spacer */}
          <div className="sm:col-span-2">
            <TextArea
              label="Address"
              value={data.fromAddress}
              onChange={(v) => update("fromAddress", v)}
              placeholder="123 AI Street, San Francisco, CA 94105"
              rows={2}
            />
          </div>
        </div>
      </section>

      {/* Bill To (Client) */}
      <section className="bg-[#111227] border border-[#1e2044] rounded-xl p-6">
        <h2 className="text-base font-semibold text-white mb-4">Bill To</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Client Name"
            value={data.clientName}
            onChange={(v) => update("clientName", v)}
            placeholder="Acme Corporation"
          />
          <InputField
            label="Client Email"
            value={data.clientEmail}
            onChange={(v) => update("clientEmail", v)}
            type="email"
            placeholder="billing@acme.com"
          />
          <InputField
            label="Client Phone"
            value={data.clientPhone}
            onChange={(v) => update("clientPhone", v)}
            type="tel"
            placeholder="+1 (555) 000-0000"
          />
          <div /> {/* spacer */}
          <div className="sm:col-span-2">
            <TextArea
              label="Client Address"
              value={data.clientAddress}
              onChange={(v) => update("clientAddress", v)}
              placeholder="456 Business Ave, New York, NY 10001"
              rows={2}
            />
          </div>
        </div>
      </section>

      {/* Line Items */}
      <section className="bg-[#111227] border border-[#1e2044] rounded-xl p-6">
        <h2 className="text-base font-semibold text-white mb-4">Line Items</h2>
        <div className="space-y-3">
          {/* Header */}
          <div className="hidden sm:grid grid-cols-[1fr_80px_100px_40px] gap-3 text-xs font-medium text-[#6b7280] px-1">
            <span>Description</span>
            <span>Qty</span>
            <span>Rate</span>
            <span />
          </div>

          {data.lineItems.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-[1fr_80px_100px_40px] gap-3 items-start"
            >
              <input
                type="text"
                value={item.description}
                onChange={(e) =>
                  updateLineItem(index, "description", e.target.value)
                }
                placeholder="Service description..."
                className="bg-[#0a0b14] border border-[#1e2044] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#6b7280] focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/30 transition-colors"
              />
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateLineItem(
                    index,
                    "quantity",
                    parseFloat(e.target.value) || 0
                  )
                }
                min="0"
                step="1"
                className="bg-[#0a0b14] border border-[#1e2044] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/30 transition-colors"
              />
              <input
                type="number"
                value={item.rate}
                onChange={(e) =>
                  updateLineItem(
                    index,
                    "rate",
                    parseFloat(e.target.value) || 0
                  )
                }
                min="0"
                step="0.01"
                className="bg-[#0a0b14] border border-[#1e2044] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/30 transition-colors"
              />
              <button
                type="button"
                onClick={() => removeLineItem(index)}
                disabled={data.lineItems.length <= 1}
                className="flex items-center justify-center h-[42px] w-[40px] rounded-lg text-[#6b7280] hover:text-[#ef4444] hover:bg-[#ef4444]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                title="Remove item"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4L12 12M4 12L12 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addLineItem}
            className="flex items-center gap-2 text-sm font-medium text-[#3b82f6] hover:text-[#2563eb] transition-colors mt-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3V13M3 8H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Add Line Item
          </button>
        </div>
      </section>

      {/* Tax & Notes */}
      <section className="bg-[#111227] border border-[#1e2044] rounded-xl p-6">
        <h2 className="text-base font-semibold text-white mb-4">
          Additional Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Tax Rate (%)"
            value={data.taxRate.toString()}
            onChange={(v) => update("taxRate", parseFloat(v) || 0)}
            type="number"
            placeholder="0"
          />
          <div /> {/* spacer */}
          <div className="sm:col-span-2">
            <TextArea
              label="Notes / Payment Instructions"
              value={data.notes}
              onChange={(v) => update("notes", v)}
              placeholder="Payment due within 30 days. Bank transfer details..."
              rows={3}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
