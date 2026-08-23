'use client'

import { useBooking } from "@/components/BookingContext/BookingContext"
import { useRouter } from "next/navigation";


export default function BookingBekreftelse() {
    const {booking} = useBooking();
    const router = useRouter();

    async function sendBooking() {
        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        });

        const data = await response.json();
        console.log(data);
    }
    return (
        <>
            <h1>
                Oversikt
            </h1>
            <p>Navn: {booking.name}</p>
            <p>Mobil: {booking.mobil}</p>
            <p>Email: {booking.email}</p>
            <p>Dato: {booking.valgtDato ? new Date(booking.valgtDato).toLocaleDateString("nb-NO", { day: "numeric", month: "long" }) : "-"}</p>
            <p>Tid: {booking.valgtTid}</p>
            <p>Melding: {booking.message}</p>
            <div>
                <button onClick={() => router.push('/booking_tid')}>Endere Dato/Tid</button>
            </div>
            <div>
                <button onClick={() => router.push('/booking_tid/booking_kontakt')}>Endre Kontaktinfo</button>
            </div>
            <div>
                <button onClick={sendBooking}>Send Bestilling</button>
            </div>
        </>
    )
}