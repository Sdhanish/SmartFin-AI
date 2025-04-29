import { Resend } from "resend";
import SupportFeedbackEmail from "@/emails/SupportFeedbackEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { name, email, feedback } = body;

  try {
    const data = await resend.emails.send({
      from: "SmartFin Support <support@resend.dev>",
      to: "sdhanish92@gmail.com", // Your personal or support email
      subject: "New Support Message",
      react: SupportFeedbackEmail({ name, email, feedback }),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
