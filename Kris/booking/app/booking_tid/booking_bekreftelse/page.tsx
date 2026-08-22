'use client'

import { useBooking } from "@/components/BookingContext/BookingContext"


export default function BookingBekreftelse() {
    const {booking} = useBooking()
    return (
        <>
            <h1>
                Din bestilling er sendt
            </h1>
            <p>Navn: {booking.name}</p>
            <p>Mobil: {booking.mobil}</p>
            <p>Email: {booking.email}</p>
            <p>Dato: {booking.valgtDato ? new Date(booking.valgtDato).toLocaleDateString("nb-NO", { day: "numeric", month: "long" }) : "-"}</p>
            <p>Tid: {booking.valgtTid}</p>
            <p>Melding: {booking.message}</p>
        </>
    )
}