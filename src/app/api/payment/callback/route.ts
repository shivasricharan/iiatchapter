import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PHONEPE_MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID || "";
const PHONEPE_SALT_KEY = process.env.PHONEPE_SALT_KEY || "";
const PHONEPE_SALT_INDEX = process.env.PHONEPE_SALT_INDEX || "1";
const PHONEPE_BASE_URL = process.env.PHONEPE_BASE_URL || "https://api.phonepe.com/apis/hermes";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://iiatchapter.org";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const txnId = searchParams.get("txnId");
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const amount = searchParams.get("amount") || "";

  if (!txnId) {
    return NextResponse.redirect(`${BASE_URL}/register?error=missing_txn`);
  }

  try {
    // Verify payment status with PhonePe
    const checksum = crypto
      .createHash("sha256")
      .update(`/pg/v1/status/${PHONEPE_MERCHANT_ID}/${txnId}${PHONEPE_SALT_KEY}`)
      .digest("hex") + `###${PHONEPE_SALT_INDEX}`;

    const statusRes = await fetch(
      `${PHONEPE_BASE_URL}/pg/v1/status/${PHONEPE_MERCHANT_ID}/${txnId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
          "X-MERCHANT-ID": PHONEPE_MERCHANT_ID,
          accept: "application/json",
        },
      }
    );

    const statusData = await statusRes.json();

    if (statusData.success && statusData.data?.state === "COMPLETED") {
      // Send confirmation email
      try {
        await fetch(`${BASE_URL}/api/send-confirmation`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: decodeURIComponent(name),
            email: decodeURIComponent(email),
            transactionId: txnId,
            amount,
          }),
        });
      } catch (emailErr) {
        console.error("Email send failed:", emailErr);
      }

      const redirectUrl = new URL(`${BASE_URL}/register/success`);
      redirectUrl.searchParams.set("txnId", txnId);
      redirectUrl.searchParams.set("name", name);
      redirectUrl.searchParams.set("email", email);
      redirectUrl.searchParams.set("amount", amount);
      return NextResponse.redirect(redirectUrl.toString());
    }

    return NextResponse.redirect(`${BASE_URL}/register?error=payment_failed`);
  } catch (err) {
    console.error("Callback error:", err);
    return NextResponse.redirect(`${BASE_URL}/register?error=server_error`);
  }
}
