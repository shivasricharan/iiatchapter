import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, transactionId, amount, memberType, membershipNumber } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const amountNum = Number(amount);
    const isMember = memberType === "iia-telangana" && amountNum === 500;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TAF 2026 - Registration Confirmed</title>
</head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#141414;border-radius:16px;overflow:hidden;border:1px solid rgba(201,162,39,0.2);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1508,#141414);padding:40px;text-align:center;border-bottom:1px solid rgba(201,162,39,0.15);">
              <div style="display:inline-block;width:60px;height:60px;border-radius:50%;border:2px solid #c9a227;background:rgba(201,162,39,0.1);line-height:60px;text-align:center;margin-bottom:16px;">
                <span style="color:#c9a227;font-size:12px;font-weight:700;">IIA</span>
              </div>
              <p style="color:#c9a227;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px;">IIA Telangana Chapter</p>
              <h1 style="color:#f5f5f0;font-size:28px;font-weight:700;margin:0;letter-spacing:-0.5px;">Telangana Architects Festival</h1>
              <p style="color:rgba(245,208,110,0.8);font-size:20px;margin:4px 0 0;font-weight:300;letter-spacing:4px;">2026</p>
            </td>
          </tr>

          <!-- Success Banner -->
          <tr>
            <td style="background:rgba(34,197,94,0.08);padding:20px 40px;text-align:center;border-bottom:1px solid rgba(34,197,94,0.15);">
              <p style="color:#22c55e;font-size:14px;font-weight:700;margin:0;letter-spacing:2px;text-transform:uppercase;">✓ Registration Confirmed</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="color:#f5f5f0;font-size:16px;margin:0 0 8px;">Dear <strong>${name}</strong>,</p>
              <p style="color:rgba(245,245,240,0.65);font-size:14px;line-height:1.7;margin:0 0 32px;">
                Thank you for registering for the <strong style="color:#c9a227;">Telangana Architects Festival 2026</strong>.
                Your payment has been received and your seat is confirmed. We look forward to welcoming you!
              </p>

              <!-- Event Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.04);border-radius:12px;border:1px solid rgba(201,162,39,0.2);margin-bottom:24px;">
                <tr><td style="padding:24px;">
                  <p style="color:#c9a227;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px;font-weight:700;">Event Details</p>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${[
                      ["📅 Date", "12th June 2026, Friday"],
                      ["🕔 Time", "5:00 PM Onwards"],
                      ["📍 Venue", "Hyderabad, Telangana"],
                      ["🎟 Event", "Telangana Architects Festival 2026"],
                    ].map(([label, value]) => `
                    <tr>
                      <td style="color:rgba(245,245,240,0.5);font-size:13px;padding:6px 0;width:120px;">${label}</td>
                      <td style="color:#f5f5f0;font-size:13px;padding:6px 0;font-weight:500;">${value}</td>
                    </tr>`).join("")}
                  </table>
                </td></tr>
              </table>

              <!-- Payment Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(201,162,39,0.06);border-radius:12px;border:1px solid rgba(201,162,39,0.2);margin-bottom:32px;">
                <tr><td style="padding:24px;">
                  <p style="color:#c9a227;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px;font-weight:700;">Payment Summary</p>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${transactionId ? `
                    <tr>
                      <td style="color:rgba(245,245,240,0.5);font-size:13px;padding:5px 0;">Transaction ID</td>
                      <td style="color:#f5f5f0;font-size:13px;padding:5px 0;font-family:monospace;">${transactionId}</td>
                    </tr>` : ""}
                    ${isMember && membershipNumber ? `
                    <tr>
                      <td style="color:rgba(245,245,240,0.5);font-size:13px;padding:5px 0;">Member ID</td>
                      <td style="color:#f5f5f0;font-size:13px;padding:5px 0;">${membershipNumber}</td>
                    </tr>` : ""}
                    <tr>
                      <td style="color:rgba(245,245,240,0.5);font-size:13px;padding:5px 0;">Category</td>
                      <td style="color:#f5f5f0;font-size:13px;padding:5px 0;">${isMember ? "IIA Telangana Member" : "General"}</td>
                    </tr>
                    <tr>
                      <td style="color:rgba(245,245,240,0.5);font-size:14px;padding:12px 0 5px;font-weight:600;">Amount Paid</td>
                      <td style="color:#c9a227;font-size:20px;padding:12px 0 5px;font-weight:700;">₹${amountNum.toLocaleString("en-IN")}</td>
                    </tr>
                  </table>
                </td></tr>
              </table>

              <p style="color:rgba(245,245,240,0.55);font-size:13px;line-height:1.7;margin:0 0 8px;">
                📋 Please carry this email (printed or digital) as your entry confirmation at the venue.
              </p>
              <p style="color:rgba(245,245,240,0.55);font-size:13px;line-height:1.7;margin:0;">
                For queries, email us at <a href="mailto:info@iiatchapter.org" style="color:#c9a227;">info@iiatchapter.org</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:rgba(0,0,0,0.4);padding:24px 40px;text-align:center;border-top:1px solid rgba(201,162,39,0.1);">
              <p style="color:rgba(245,245,240,0.3);font-size:12px;margin:0;">
                Indian Institute of Architects · Telangana Chapter<br>
                © 2026 All rights reserved · <a href="https://iiatchapter.org" style="color:rgba(201,162,39,0.5);">iiatchapter.org</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    await transporter.sendMail({
      from: `"IIA Telangana Chapter" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      bcc: process.env.ADMIN_EMAIL || "",
      subject: `✓ TAF 2026 Registration Confirmed — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
