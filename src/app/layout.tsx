import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wise AI Invoicing",
  description:
    "Professional invoicing for Wise AI — create, preview, and print beautiful invoices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
