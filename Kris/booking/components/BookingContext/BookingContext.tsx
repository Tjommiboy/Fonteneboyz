'use client'

import {useState, useContext, createContext, ReactNode } from 'react'

type BookingData = {
    valgtDato: number | null;
    valgtTid: string | null;
    name: string;
    email: string;
    mobil: string;
    bestillerFor: 'megSelv' | 'andre'
    message: string;
}

type BookingContextType = {
    booking: BookingData;
    setBooking: React.Dispatch<React.SetStateAction<BookingData>>;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({children}: {children: ReactNode}) {
    const [booking, setBooking] = useState<BookingData>({
        valgtDato: null,
        valgtTid: null,
        name: '',
        email: '',
        mobil: '',
        bestillerFor: 'megSelv',
        message: ''
    });

    return (
        <BookingContext.Provider value={{ booking, setBooking }}>
            {children}
        </BookingContext.Provider>
    )
}

export function useBooking() {
    const context = useContext(BookingContext)

    if (!context) {
        throw new Error("useBooking must be used inside BookingProvider");
    }

    return context
}