import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, designation, organization, city, state, memberType, membershipNumber, memberName, amount, screenshotUrl } = body;

    const categoryLabel =
      memberType === "iia-telangana" ? "IIA Telangana Member" :
      memberType === "other-chapter" ? "IIA Member" : "Non-Member";

    // 1. Write to Google Sheet via Apps Script (primary data capture)
    const appsScriptUrl = process.env.APPS_SCRIPT_URL;
    if (appsScriptUrl) {
      try {
        await fetch(appsScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } catch (e) {
        console.error("Apps Script error:", e);
      }
    }

    // 2. Send emails via SMTP — failures are non-fatal
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: false,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });

        const tableRow = (label: string, value: string) =>
          `<tr><td style="padding:8px 12px;font-weight:600;color:#444;background:#f5f5f5;border:1px solid #e0e0e0;width:150px;">${label}</td><td style="padding:8px 12px;border:1px solid #e0e0e0;color:#111;">${value}</td></tr>`;

        const adminHtml = `
          <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;">
            <div style="background:#0f2060;padding:28px;text-align:center;">
              <h2 style="color:#c9a227;margin:0;font-size:18px;letter-spacing:1px;">NEW REGISTRATION — TAF 2026</h2>
            </div>
            <div style="padding:28px;background:#fff;">
              <table style="width:100%;border-collapse:collapse;">
                ${tableRow("Name", name)}
                ${tableRow("Email", email)}
                ${tableRow("Phone", phone)}
                ${designation ? tableRow("Designation", designation) : ""}
                ${tableRow("Organization", organization || "—")}
                ${tableRow("City", city || "—")}
                ${state ? tableRow("State", state) : ""}
                ${tableRow("Category", categoryLabel)}
                ${membershipNumber ? tableRow("Membership No.", membershipNumber) : ""}
                ${memberName ? tableRow("Verified Name", memberName) : ""}
                ${tableRow("Amount", `₹${Number(amount).toLocaleString("en-IN")}`)}
                ${tableRow("Status", "Payment Screenshot Submitted — Pending Verification")}
              </table>
              ${screenshotUrl ? `
              <div style="margin-top:24px;">
                <p style="font-weight:600;color:#333;margin:0 0 8px;">Payment Screenshot:</p>
                <img src="${screenshotUrl}" style="max-width:100%;border:1px solid #ddd;border-radius:8px;" />
                <p style="margin:8px 0 0;"><a href="${screenshotUrl}" style="color:#0f2060;font-size:13px;">View full image →</a></p>
              </div>` : ""}
            </div>
            <div style="background:#f0f0f0;padding:14px;text-align:center;">
              <p style="color:#888;font-size:12px;margin:0;">IIA Telangana Chapter · TAF 2026</p>
            </div>
          </div>`;

        const confirmHtml = `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#0f2060;padding:36px;text-align:center;">
              <p style="color:#c9a227;font-size:11px;letter-spacing:3px;margin:0 0 10px;text-transform:uppercase;">IIA Telangana Chapter</p>
              <h1 style="color:#f5f5f0;font-size:24px;font-weight:700;margin:0;">Telangana Architecture Festival</h1>
              <p style="color:rgba(245,208,110,0.7);font-size:18px;margin:4px 0 0;letter-spacing:4px;">2026</p>
            </div>
            <div style="background:#fff;padding:36px;">
              <div style="background:#f0fff4;border:1px solid #22c55e;border-radius:10px;padding:16px;text-align:center;margin-bottom:28px;">
                <p style="color:#16a34a;font-weight:700;font-size:15px;margin:0;">✓ Registration Received Successfully</p>
              </div>
              <p style="color:#333;font-size:15px;">Dear <strong>${name}</strong>,</p>
              <p style="color:#555;line-height:1.75;font-size:14px;">
                Thank you for registering for the <strong>Telangana Architecture Festival 2026</strong>. We have received your registration and payment screenshot. Our team will verify your payment within <strong>24 hours</strong>.
              </p>
              <div style="background:#fffbf0;border:1px solid #c9a227;border-radius:10px;padding:20px;margin:24px 0;">
                <table style="width:100%;border-collapse:collapse;">
                  ${[
                    ["Event", "Telangana Architecture Festival 2026"],
                    ["Date", "12th June 2026, Friday"],
                    ["Venue", "Avasa Hotel, Madhapur, Hyderabad"],
                    ["Time", "5:00 PM Onwards"],
                    ["Amount", `₹${Number(amount).toLocaleString("en-IN")}`],
                    ["Category", categoryLabel],
                  ].map(([l, v]) => `<tr><td style="padding:6px 0;color:#888;font-size:13px;width:130px;">${l}</td><td style="padding:6px 0;color:#333;font-size:13px;font-weight:600;">${v}</td></tr>`).join("")}
                </table>
              </div>
              <p style="color:#666;font-size:13px;line-height:1.7;">
                For any queries, reach us at <a href="mailto:iiatchapter@gmail.com" style="color:#0f2060;">iiatchapter@gmail.com</a>
                or call <a href="tel:+919848046148" style="color:#0f2060;">+91 9848046148</a>.
              </p>
            </div>
            <div style="background:#0f2060;padding:18px;text-align:center;">
              <p style="color:rgba(255,255,255,0.35);font-size:12px;margin:0;">Indian Institute of Architects · Telangana Chapter · © 2026</p>
            </div>
          </div>`;

        await Promise.all([
          transporter.sendMail({
            from: `"IIA Telangana Chapter" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL || "iiatchapter@gmail.com",
            subject: `New Registration: ${name} — TAF 2026`,
            html: adminHtml,
          }),
          transporter.sendMail({
            from: `"IIA Telangana Chapter" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: email,
            subject: "✓ Registration Received — Telangana Architecture Festival 2026",
            html: confirmHtml,
          }),
        ]);
      } catch (emailErr) {
        // Email failure must not block registration — Apps Script already captured the data
        console.error("Email send failed:", emailErr);
      }
    }

    // Always return success if we got this far
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
