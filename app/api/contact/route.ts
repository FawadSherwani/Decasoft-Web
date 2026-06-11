import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["fawadsherwani@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background: #c0392b; padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <img src="./public/Deca-Logo-white.png" alt="Logo" style="max-width: 150px; margin-bottom: 10px;" />
            <h1 style="color: white; margin: 0; font-size: 1.4rem;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 24px; background: #f9f9f9;">
            <p style="margin: 0 0 20px 0; color: #333; font-size: 1rem;">New Client want to contact.</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 8px; font-weight: bold; color: #333; width: 140px;">Name</td>
                <td style="padding: 12px 8px; color: #555;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 8px; font-weight: bold; color: #333;">Email</td>
                <td style="padding: 12px 8px; color: #555;"><a href="mailto:${email}" style="color: #c0392b;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 8px; font-weight: bold; color: #333;">Phone</td>
                <td style="padding: 12px 8px; color: #555;">${phone || "—"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 8px; font-weight: bold; color: #333;">Company</td>
                <td style="padding: 12px 8px; color: #555;">${company || "—"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 8px; font-weight: bold; color: #333;">Service</td>
                <td style="padding: 12px 8px; color: #555;">${service || "—"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 8px; font-weight: bold; color: #333;">Budget</td>
                <td style="padding: 12px 8px; color: #555;">${budget || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 8px; font-weight: bold; color: #333; vertical-align: top;">Message</td>
                <td style="padding: 12px 8px; color: #555; white-space: pre-wrap;">${message || "—"}</td>
              </tr>
            </table>
          </div>

          <div style="background: #1a1a2e; padding: 14px; border-radius: 0 0 6px 6px; text-align: center;">
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 0.8rem;">Decasofts </p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}