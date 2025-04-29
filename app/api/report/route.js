import { Resend } from "resend";
import ReportEmail from "@/emails/ReportEmail"; // You need to create this component

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    await resend.emails.send({
      from: "SmartFin Reports <reports@resend.dev>",
      to: "sdhanish92@gmail.com",
      subject: "New Report or Complaint Submitted",
      react: ReportEmail({ name, email, message }),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
