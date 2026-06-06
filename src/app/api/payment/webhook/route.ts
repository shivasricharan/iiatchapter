import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PHONEPE_SALT_KEY = process.env.PHONEPE_SALT_KEY || "";
const PHONEPE_SALT_INDEX = process.env.PHONEPE_SALT_INDEX || "1";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://iiatchapter.org";

export async function POST(req: NextRequest) {
  try {
    const xVerify = req.headers.get("X-VERIFY") || "";
    const body = await req.text();

    // Verify webhook authenticity
    const [receivedHash, saltIndex] = xVerify.split("###");
    if (saltIndex !== PHONEPE_SALT_INDEX) {
      return NextResponse.json({ error: "Invalid salt index" }, { status: 400 });
    }

    const expectedHash = crypto
      .createHash("sha256")
      .update(`${body}${PHONEPE_SALT_KEY}`)
      .digest("hex");

    if (expectedHash !== receivedHash) {
      console.error("Webhook signature mismatch");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const payload = JSON.parse(Buffer.from(body, "base64").toString("utf-8"));

    const { merchantTransactionId, transactionId, state, amount } = payload.data || {};

    console.log("PhonePe Webhook:", { merchantTransactionId, transactionId, state, amount });

    if (state === "COMPLETED") {
      // TODO: Update database, log to Google Sheets, trigger email
      // This fires independently of the redirect callback
      console.log(`Payment COMPLETED: txn=${merchantTransactionId}, phonepe=${transactionId}, amount=₹${amount / 100}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
