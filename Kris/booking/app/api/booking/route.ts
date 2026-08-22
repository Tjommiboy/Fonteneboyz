import getGoogleCalendar from "@/utils/googleCalendar";

export async function POST(request: Request) {
    const booking = await request.json();

    const calender = getGoogleCalendar()

    console.log('Booking motatt: ', booking)

    return Response.json({success: true})
}