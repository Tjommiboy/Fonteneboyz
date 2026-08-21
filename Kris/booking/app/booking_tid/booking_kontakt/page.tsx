'use client'

import { useBooking } from "@/components/BookingContext/BookingContext"
import { useRouter } from "next/navigation";

export default function KontaktSide() {
    const { booking, setBooking} = useBooking();
    const router = useRouter();

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        router.push('/booking_tid/booking_bekreftelse')
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={submit} className="bg-red-300 p-3 w-80 space-y-4">
                <div className="bg-blue-300 ">
                    <label htmlFor="name">Navn: </label>
                    <input
                        id="name"
                        className="border"
                        type='text'
                        value={booking.name}
                        onChange={(e) => {
                            setBooking((prev) => ({
                                ...prev,
                                name: e.target.value
                            }))
                        }}
                        
                    />
                </div>
                
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        className="border"
                        type="email"
                        id="email"
                        value={booking.email}
                        onChange={(e) => {
                            setBooking((prev) => ({
                                ...prev,
                                email: e.target.value
                            }))
                        }}
                    />
                </div>
                
                <div>
                    <label htmlFor="mobil">Mobil: </label>
                    <input
                        id="mobil"
                        className="border"
                        type='tel'
                        value={booking.mobil}
                        onChange={(e) => {
                            setBooking((prev) => ({
                                ...prev,
                                mobil: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="message">Melding: </label>
                    <textarea
                        id="message"
                        className="border"
                        value={booking.message}
                        onChange={(e) => {
                            setBooking((prev) => ({
                                ...prev,
                                message: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <button className="" type="submit">Neste</button>
                </div>
            </form>
        </div>
    )
}