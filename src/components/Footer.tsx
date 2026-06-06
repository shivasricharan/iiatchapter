import Image from "next/image";
import { Mail, MapPin, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(201,162,39,0.14)", background: "rgba(0,0,0,0.6)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "4.5rem 1.75rem 2.5rem" }}>

        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "3rem", marginBottom: "3.5rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem" }}>
              <Image src="/iia-tc-seal.png" alt="IIA Telangana Chapter" width={44} height={44}
                style={{ width: 40, height: 40, objectFit: "contain", filter: "drop-shadow(0 0 6px rgba(201,162,39,0.25))" }}
              />
              <div>
                <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#c9a227", margin: 0, lineHeight: 1.4 }}>IIA Telangana Chapter</p>
                <p style={{ fontSize: "0.75rem", color: "rgba(240,237,230,0.4)", margin: 0, lineHeight: 1.4 }}>Indian Institute of Architects</p>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "rgba(240,237,230,0.5)", margin: 0 }}>
              The Indian Institute of Architects is the apex body of architects in India, representing the profession and fostering excellence in design.
            </p>
          </div>

          {/* Event details */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <Image src="/taf-logo.png" alt="TAF" width={22} height={26}
                style={{ width: 20, height: 24, objectFit: "contain", filter: "drop-shadow(0 0 4px rgba(201,162,39,0.3))" }}
              />
              <h4 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a227", margin: 0 }}>
                Event Details
              </h4>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "rgba(240,237,230,0.6)" }}>
                <Calendar size={14} color="#c9a227" /> 12th June 2026, Friday
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "rgba(240,237,230,0.6)" }}>
                <MapPin size={14} color="#c9a227" /> Hyderabad, Telangana
              </span>
              <p style={{ fontSize: "0.875rem", color: "rgba(240,237,230,0.6)", margin: 0 }}>🕔 5:00 PM Onwards</p>
              <p style={{ fontSize: "0.875rem", color: "rgba(240,237,230,0.6)", margin: 0 }}>🎟 Telangana Architects Festival 2026</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a227", margin: "0 0 1.25rem" }}>
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <a href="mailto:iiatchapter@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "rgba(240,237,230,0.6)", textDecoration: "none" }}
              >
                <Mail size={14} color="#c9a227" />
                iiatchapter@gmail.com
              </a>
              <p style={{ fontSize: "0.8rem", color: "rgba(240,237,230,0.35)", margin: 0, lineHeight: 1.6 }}>
                For registration queries and event information, write to us and we will respond within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(201,162,39,0.1)", paddingTop: "1.75rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.78rem", color: "rgba(240,237,230,0.3)", margin: 0 }}>
            © 2026 Indian Institute of Architects, Telangana Chapter. All rights reserved.
          </p>
          <p style={{ fontSize: "0.78rem", color: "rgba(240,237,230,0.3)", margin: 0 }}>
            iiatchapter.org
          </p>
        </div>
      </div>
    </footer>
  );
}
