import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Booking Dato og Tid',
    description: 'Her legger vi inn dato og tid for bookingen'
}

export default function BookingPage({children}: {children: ReactNode}){
    return (
        <main>
            <div>
                {children}
            </div>
        </main>
    )
}