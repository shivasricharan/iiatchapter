import Link from "next/link";

export const metadata = {
  title: "Refund Policy | IIA Telangana Chapter",
  description: "Refund and Cancellation Policy for the IIA Telangana Chapter platform.",
};

const policies = [
  {
    title: "Cancellation Window",
    body: "Cancellations will only be considered if the request is made within 1 day of placing the order. However, cancellation requests may not be entertained if the orders have been communicated to such sellers/merchant(s) listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery. In such an event, you may choose to reject the product at the doorstep.",
  },
  {
    title: "Perishable Items",
    body: "THE INDIAN INSTITUTE OF ARCHITECTS does not accept cancellation requests for perishable items like flowers, eatables, etc. However, a refund/replacement can be made if the user establishes that the quality of the product delivered is not good.",
  },
  {
    title: "Damaged or Defective Items",
    body: "In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/merchant listed on the Platform has checked and determined the same at its own end. This should be reported within 1 day of receipt of products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 1 day of receiving the product. The customer service team after looking into your complaint will take an appropriate decision.",
  },
  {
    title: "Warranty Complaints",
    body: "In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them.",
  },
  {
    title: "Refund Processing Time",
    body: "In case of any refunds approved by THE INDIAN INSTITUTE OF ARCHITECTS, it will take 1 day for the refund to be processed to you.",
  },
];

export default function RefundPolicy() {
  return (
    <main style={{ minHeight: "100vh", background: "#0f2060", color: "#f0ede6", padding: "6rem 1.75rem 4rem" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>

        {/* Back */}
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "#c9a227", textDecoration: "none", marginBottom: "2.5rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          ← Back to Home
        </Link>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a227", margin: "0 0 0.75rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700, color: "#f0ede6", margin: "0 0 1rem", lineHeight: 1.2 }}>
            Refund &amp; Cancellation Policy
          </h1>
          <div style={{ height: 2, width: 60, background: "linear-gradient(90deg,#c9a227,#f0cc5a)", borderRadius: 99 }} />
        </div>

        {/* Intro */}
        <div style={{ background: "rgba(201,162,39,0.07)", border: "1px solid rgba(201,162,39,0.25)", borderRadius: 12, padding: "1.5rem 1.75rem", marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "rgba(240,237,230,0.75)", margin: 0 }}>
            This refund and cancellation policy outlines how you can cancel or seek a refund for a product/service that you have purchased through the Platform. Under this policy:
          </p>
        </div>

        {/* Policy items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {policies.map(({ title, body }, i) => (
            <div key={title} style={{ display: "flex", gap: "1.25rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,162,39,0.15)", borderRadius: 12, padding: "1.5rem 1.75rem", alignItems: "flex-start" }}>
              <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#c9a227,#f0cc5a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, color: "#080808", marginTop: 2 }}>
                {i + 1}
              </span>
              <div>
                <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "1rem", color: "#c9a227", margin: "0 0 0.6rem", fontWeight: 600 }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "rgba(240,237,230,0.68)", margin: 0 }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,162,39,0.15)", borderRadius: 12, padding: "1.75rem", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "1.05rem", color: "#c9a227", margin: "0 0 0.9rem", fontWeight: 600 }}>
            Contact for Refunds
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.87rem", color: "rgba(240,237,230,0.65)" }}>
            <p style={{ margin: 0 }}>
              Email:{" "}
              <a href="mailto:iiatchapter@gmail.com" style={{ color: "#c9a227", textDecoration: "none" }}>iiatchapter@gmail.com</a>
            </p>
            <p style={{ margin: 0 }}>Phone: +91 9848046148 · Monday – Friday (9:00 – 18:00)</p>
            <p style={{ margin: 0 }}>Address: 802C Al Karim Trade Centre, MG Road, Ranigunj, Secunderabad, Telangana 500003</p>
          </div>
        </div>

        {/* Footer note */}
        <p style={{ fontSize: "0.78rem", color: "rgba(240,237,230,0.35)", textAlign: "center", margin: "2rem 0 0", lineHeight: 1.7 }}>
          © 2026 Indian Institute of Architects, Telangana Chapter. All rights reserved.
        </p>
      </div>
    </main>
  );
}
