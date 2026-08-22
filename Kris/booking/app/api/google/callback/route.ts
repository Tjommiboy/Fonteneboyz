import { google } from "googleapis";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');

    if (!code) {
        return Response.json(
            { error: 'mangler authorization code'},
            { status: 400 }
        );
    }

    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
    );

    const { tokens } = await oauth2Client.getToken(code)

    console.log("Goole tokens:", tokens)

    return Response.json({
        success: true,
        message: 'Google Calender er koblet til'
    });
}