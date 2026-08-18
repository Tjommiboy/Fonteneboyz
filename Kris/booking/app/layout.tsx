import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booking Fontenehuset Bergen",
  description: "Bestill en omvisining hos Fontenehuset Bergen",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <div>
        {children}
      </div>
    </html>
  );
}
