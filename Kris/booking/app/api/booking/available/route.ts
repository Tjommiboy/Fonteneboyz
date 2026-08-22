import getGoogleCalendar from "@/utils/googleCalendar"

export async function GET() {
    const calendar = getGoogleCalendar();

    const today = new Date();

    const eightWeeksLater = new Date();
    eightWeeksLater.setDate(today.getDate() + 8 * 7);

    const response = await calendar.events.list({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        timeMin: today.toISOString(),
        timeMax: eightWeeksLater.toISOString(),
        singleEvents: true,
        orderBy: 'startTime'
    });

    const bookings = response.data.items?.filter(
        (event) => event.summary?.toLocaleLowerCase() === 'booking'
    );

    const availableBookings = bookings?.map((event) => {
        const dateTime = event.start?.dateTime;

        if (!dateTime) {
            return null;
        }
        
        const start = new Date(dateTime);

        return {
            date: start.toLocaleDateString('sv-SE'),
            time: start.toLocaleTimeString('nb-NO', {
                hour: '2-digit',
                minute: '2-digit'
            })
        }
    })

    console.log(availableBookings);

    return Response.json(availableBookings);
}