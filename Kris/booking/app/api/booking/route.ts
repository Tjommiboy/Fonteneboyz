import getGoogleCalendar from "@/utils/googleCalendar";

export async function POST(request: Request) {
    const booking = await request.json();

    const calendar = getGoogleCalendar()

    const start = new Date(booking.valgtDato)

    const [hour, minute] = booking.valgtTid.split(':').map(Number);

    start.setHours(hour, minute, 0, 0)

    const end = new Date(start);
    end.setMinutes(end.getMinutes() + 30)

    const event = await calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        requestBody: {
            summary: `Booking - ${booking.name}`,
            description: `
            Name: ${booking.name}
            E-post: ${booking.email}
            Mobil: ${booking.mobil}
            Melding: ${booking.message}
            `,

            start: {
                dateTime: start.toISOString(),
                timeZone: 'Europe/Oslo'
            },

            end: {
                dateTime: end.toISOString(),
                timeZone: 'Europe/Oslo'
            }
        }
    })

    return Response.json({success: true, eventId: event.data.id})
}