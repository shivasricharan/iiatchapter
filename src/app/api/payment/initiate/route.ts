import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PHONEPE_MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID || "";
const PHONEPE_SALT_KEY = process.env.PHONEPE_SALT_KEY || "";
const PHONEPE_SALT_INDEX = process.env.PHONEPE_SALT_INDEX || "1";
const PHONEPE_BASE_URL = process.env.PHONEPE_BASE_URL || "https://api.phonepe.com/apis/hermes";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://iiatchapter.org";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, memberType, membershipNumber, amount, memberVerified, memberName, organization, city } = body;

    if (!PHONEPE_MERCHANT_ID || !PHONEPE_SALT_KEY) {
      return NextResponse.json(
        { error: "Payment gateway not configured yet. Please contact the organiser." },
        { status: 503 }
      );
    }

    const merchantTransactionId = `TAF2026-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const amountInPaise = Math.round(Number(amount) * 100);

    const payload = {
      merchantId: PHONEPE_MERCHANT_ID,
      merchantTransactionId,
      merchantUserId: `USER-${phone.replace(/\D/g, "").slice(-10)}`,
      amount: amountInPaise,
      redirectUrl: `${BASE_URL}/api/payment/callback?txnId=${merchantTransactionId}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&amount=${amount}`,
      redirectMode: "REDIRECT",
      callbackUrl: `${BASE_URL}/api/payment/webhook`,
      mobileNumber: phone.replace(/\D/g, "").slice(-10),
      paymentInstrument: { type: "PAY_PAGE" },
    };

    const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString("base64");
    const checksum = crypto
      .createHash("sha256")
      .update(`${payloadBase64}/pg/v1/pay${PHONEPE_SALT_KEY}`)
      .digest("hex") + `###${PHONEPE_SALT_INDEX}`;

    const phonePeResponse = await fetch(`${PHONEPE_BASE_URL}/pg/v1/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        accept: "application/json",
      },
      body: JSON.stringify({ request: payloadBase64 }),
    });

    const phonePeData = await phonePeResponse.json();

    if (phonePeData.success && phonePeData.data?.instrumentResponse?.redirectInfo?.url) {
      // Store registration data temporarily (use DB in production)
      const registrationData = {
        merchantTransactionId,
        name,
        email,
        phone,
        memberType,
        membershipNumber: memberType === "iia-telangana" ? membershipNumber : null,
        memberVerified: memberVerified || false,
        memberName: memberName || null,
        organization,
        city,
        amount,
        createdAt: new Date().toISOString(),
      };

      // Log for now (integrate with DB / Google Sheets later)
      console.log("Registration initiated:", registrationData);

      return NextResponse.json({
        redirectUrl: phonePeData.data.instrumentResponse.redirectInfo.url,
        transactionId: merchantTransactionId,
      });
    }

    return NextResponse.json(
      { error: phonePeData.message || "Payment initiation failed. Please try again." },
      { status: 400 }
    );
  } catch (err) {
    console.error("Payment initiation error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
