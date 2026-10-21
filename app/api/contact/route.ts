import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  roleLink?: string;
  message?: string;
  project?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const company = payload.company?.trim() ?? "";
    const roleLink = payload.roleLink?.trim() ?? "";
    const message = (payload.message || payload.project)?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please fill all required fields before sending." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message is too short. Please add a bit more context so I can respond effectively." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured yet. Add RESEND_API_KEY in environment variables." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL ?? "santhosh.a.designer@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Role Enquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; line-height: 1.55; color: #0f172a;">
          <h2 style="margin: 0 0 10px;">New Role Enquiry</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
          ${company ? `<p style="margin: 0 0 8px;"><strong>Company:</strong> ${company}</p>` : ""}
          ${roleLink ? `<p style="margin: 0 0 8px;"><strong>Role / JD Link:</strong> <a href="${roleLink}">${roleLink}</a></p>` : ""}
          <p style="margin: 14px 0 6px;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; margin: 0;">${message}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: "Could not send your message. Please try again shortly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unexpected error while sending. Please try again." }, { status: 500 });
  }
}
