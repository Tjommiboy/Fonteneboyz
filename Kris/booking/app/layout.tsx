import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from 'next/image'
import "./globals.css";

export const metadata: Metadata = {
  title: "Booking Fontenehuset Bergen",
  description: "Bestill en omvisining hos Fontenehuset Bergen",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <header>
        <div>
          <Image src='./public/Logoer/FHB_logo_horisontal.png' alt='Fontenehuset Bergen Logo' />
        </div>
      </header>
      <div>
        {children}
      </div>
    </html>
  );
}
