'use client'

import { useBooking } from "@/components/BookingContext/BookingContext"


export default function BookingBekreftelse() {
    const {booking} = useBooking();

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
                <button onClick={sendBooking}>Send Bestilling</button>
            </div>
        </>
    )
}