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
      <body className="">
          <header className='flex flex-col items-center sm:flex-row justify-between opacity-100 transition-opacity duration-1000 starting:opacity-0'>
            <div className='flex justify-center'>
              <Image 
                src='/Logoer/FHB_logo_horisontal.png'
                alt='Fontenehuset Bergen Logo'
                width={376}
                height={50}
                className='h-12.5 w-auto'
                priority
                />
            </div>
            <div className="flex sm:flex-none justify-center sm:">
              <div className='flex items-center justify-center rounded-md sm:rounded-none p-1 bg-[#ee7035] sm:p-3 sm:px-7 sm:border-b-3 sm:border-l-3'>
                <a className='text-xl whitespace-nowrap' href='https://www.fontenehusetbergen.no'>Til Hjemmeside</a>
              </div>
            </div>
          </header>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
