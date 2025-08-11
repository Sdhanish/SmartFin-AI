import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { email } = body; // Extract the email sent from the client

  try {
    await resend.emails.send({
      from: "SmartFin AI <updates@resend.dev>",
      to: email, // Use the email provided by the user
      subject: "New Subscriber!",
      html: `<p>Thank you for subscribing..!</p><p>You’ll get regular updates...!</p><p>New subscriber: <strong>${email}</strong></p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending subscribe email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
