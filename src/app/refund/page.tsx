import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "Refund & Cancellation Policy | IIA Telangana Chapter" };

const p: React.CSSProperties = { fontSize: "0.92rem", lineHeight: 1.85, color: "rgba(240,237,230,0.75)", margin: "0 0 0.85rem" };
const li: React.CSSProperties = { fontSize: "0.92rem", lineHeight: 1.85, color: "rgba(240,237,230,0.75)", marginBottom: "1rem" };

export default function RefundPage() {
  return (
    <div style={{ background: "#0f2060", minHeight: "100vh", color: "#f0ede6" }}>
      <Navbar />
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "8rem 1.75rem 5rem" }}>
        <div style={{ marginBottom: "3rem", borderBottom: "1px solid rgba(201,162,39,0.2)", paddingBottom: "2rem" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a227", marginBottom: "0.75rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, margin: 0 }}>Refund &amp; Cancellation Policy</h1>
          <p style={{ ...p, marginTop: "1rem", marginBottom: 0 }}>Last updated: June 2026</p>
        </div>

        <p style={p}>This refund and cancellation policy outlines how you can cancel or seek a refund for a registration/service that you have purchased through the Platform. Under this policy:</p>

        <ol style={{ paddingLeft: "1.25rem", margin: "0 0 2rem" }}>
          <li style={li}>
            <strong style={{ color: "#f0ede6" }}>Cancellations</strong> will only be considered if the request is made within <strong style={{ color: "#c9a227" }}>1 day</strong> of placing the order. However, cancellation requests may not be entertained if the registration has already been processed and confirmed.
          </li>
          <li style={li}>
            <strong style={{ color: "#f0ede6" }}>THE INDIAN INSTITUTE OF ARCHITECTS, TELANGANA CHAPTER</strong> does not accept cancellation requests for event registrations once the event date has passed or where entry passes have been issued. However, a refund/replacement consideration can be made if the user establishes that a service issue occurred on our end.
          </li>
          <li style={li}>
            In case of receipt of a <strong style={{ color: "#f0ede6" }}>defective or incorrect service</strong>, please report to our customer service team. The request would be entertained once the issue has been checked and determined. This should be reported within <strong style={{ color: "#c9a227" }}>1 day</strong> of receipt. In case you feel that the service received is not as described on the site or as per your expectations, you must bring it to the notice of our customer service within <strong style={{ color: "#c9a227" }}>1 day</strong> of the service date.
          </li>
          <li style={li}>
            In case of complaints regarding services that come with a warranty or guarantee from the organisers, please refer the issue directly to them.
          </li>
          <li style={li}>
            In case of any <strong style={{ color: "#f0ede6" }}>refunds approved</strong> by THE INDIAN INSTITUTE OF ARCHITECTS, TELANGANA CHAPTER, it will take <strong style={{ color: "#c9a227" }}>7 business days</strong> for the refund to be processed back to your original payment method.
          </li>
        </ol>

        <div style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.2)", borderRadius: "0.875rem", padding: "1.5rem 1.75rem", marginBottom: "2.5rem" }}>
          <p style={{ ...p, fontWeight: 700, color: "#c9a227", margin: "0 0 0.5rem", fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Contact for Refund Requests</p>
          <p style={{ ...p, margin: "0 0 0.3rem" }}>Email: <a href="mailto:iiatchapter@gmail.com" style={{ color: "#c9a227" }}>iiatchapter@gmail.com</a></p>
          <p style={{ ...p, margin: "0 0 0.3rem" }}>Phone: <a href="tel:+919848046148" style={{ color: "#c9a227" }}>+91 9848046148</a></p>
          <p style={{ ...p, margin: 0 }}>Hours: Monday – Friday, 9:00 AM – 6:00 PM</p>
        </div>

        <div style={{ borderTop: "1px solid rgba(201,162,39,0.15)", paddingTop: "2rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/terms" style={{ fontSize: "0.85rem", color: "#c9a227", textDecoration: "none" }}>Terms &amp; Conditions →</Link>
          <Link href="/privacy" style={{ fontSize: "0.85rem", color: "#c9a227", textDecoration: "none" }}>Privacy Policy →</Link>
          <Link href="/" style={{ fontSize: "0.85rem", color: "rgba(240,237,230,0.5)", textDecoration: "none" }}>← Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
