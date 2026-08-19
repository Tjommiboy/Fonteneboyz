import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from 'next/link'
import Image from 'next/image'
import "./globals.css";
import { Html } from "next/document";

export const metadata: Metadata = {
  title: "Booking Fontenehuset Bergen",
  description: "Bestill en omvisining hos Fontenehuset Bergen",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
<<<<<<< HEAD
=======
        <header className='flex'>
          <div className='w-full py-[1vw] px-[var(--pagePadding)]'>
            <Image 
              src='/Logoer/FHB_logo_horisontal.png'
              alt='Fontenehuset Bergen Logo'
              width={375.9}
              height={50}
              className='max-w-full max-h-[50px] w-auto'
              loading='eager'
              />
          </div>
          <div className='flex items-center bg-[#ee7035] px-4 border-b-3 border-l-3'>
            <a className='text-xl' href='https://www.fontenehusetbergen.no'>Hjemmeside</a>
          </div>
        </header>
>>>>>>> bdfdba5664e642d02862ce0d907362799c026e24
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
