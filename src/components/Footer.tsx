import Image from "next/image";
import { Mail, MapPin, Calendar, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(201,162,39,0.14)", background: "rgba(9,16,31,0.85)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "4.5rem 1.75rem 2.5rem" }}>

        {/* Quote */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem", padding: "0 1rem" }}>
          <p style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(0.95rem,2vw,1.15rem)", color: "rgba(240,204,90,0.65)", lineHeight: 1.75, maxWidth: 680, margin: "0 auto" }}>
            &ldquo;The buildings of Hyderabad are written in two languages — the stone of Golconda and the glass of Gachibowli. Architects of Telangana are fluent in both.&rdquo;
          </p>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(201,162,39,0.45)", marginTop: "0.75rem" }}>From Stone to Skyline</p>
        </div>

        <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(201,162,39,0.2),transparent)", marginBottom: "3.5rem" }} />

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "2.75rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.1rem" }}>
              <Image src="/iia-tc-seal.png" alt="IIA Telangana Chapter" width={40} height={40}
                style={{ width: 36, height: 36, objectFit: "contain", filter: "drop-shadow(0 0 5px rgba(201,162,39,0.25))" }}
              />
              <div>
                <p style={{ fontSize: "0.83rem", fontWeight: 700, color: "#c9a227", margin: 0, lineHeight: 1.35 }}>IIA Telangana Chapter</p>
                <p style={{ fontSize: "0.72rem", color: "rgba(240,237,230,0.38)", margin: 0 }}>Indian Institute of Architects</p>
              </div>
            </div>
            <p style={{ fontSize: "0.83rem", lineHeight: 1.8, color: "rgba(240,237,230,0.45)", margin: 0 }}>
              The Indian Institute of Architects is the apex body of architects in India, representing the profession and fostering excellence in design.
            </p>
          </div>

          {/* Event */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", marginBottom: "1.1rem" }}>
              <Image src="/taf-logo.png" alt="TAF" width={18} height={22}
                style={{ width: 16, height: 20, objectFit: "contain" }}
              />
              <h4 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a227", margin: 0 }}>Event Details</h4>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[
                { icon: Calendar, text: "12th June 2026, Friday" },
                { icon: MapPin,   text: "Avasa Hotel, Madhapur, Hyderabad" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem", fontSize: "0.84rem", color: "rgba(240,237,230,0.58)" }}>
                  <Icon size={13} color="#c9a227" style={{ flexShrink: 0, marginTop: 2 }} />{text}
                </span>
              ))}
              <p style={{ fontSize: "0.84rem", color: "rgba(240,237,230,0.58)", margin: 0 }}>🕔 5:00 PM Onwards · Dinner Follows</p>
              <p style={{ fontSize: "0.84rem", color: "rgba(240,237,230,0.58)", margin: 0 }}>✦ Decennial Celebrations</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a227", margin: "0 0 1.1rem" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="mailto:iiatchapter@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: "0.55rem", fontSize: "0.84rem", color: "rgba(240,237,230,0.58)", textDecoration: "none" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#c9a227")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(240,237,230,0.58)")}
              >
                <Mail size={13} color="#c9a227" />iiatchapter@gmail.com
              </a>
              <a href="tel:+919848046148"
                style={{ display: "flex", alignItems: "center", gap: "0.55rem", fontSize: "0.84rem", color: "rgba(240,237,230,0.58)", textDecoration: "none" }}
              >
                <Phone size={13} color="#c9a227" />+91 9848046148 (Chairman)
              </a>
              <p style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem", fontSize: "0.82rem", color: "rgba(240,237,230,0.38)", margin: 0, lineHeight: 1.6 }}>
                <MapPin size={13} color="#c9a227" style={{ flexShrink: 0, marginTop: 2 }} />
                802, Al-Karimtradecentre, M.G. Road, Ranigunj, Secunderabad – 500003
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(201,162,39,0.1)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(240,237,230,0.28)", margin: 0 }}>© 2026 Indian Institute of Architects, Telangana Chapter. All rights reserved.</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(240,237,230,0.28)", margin: 0 }}>iiatchapter.org</p>
        </div>
      </div>
    </footer>
  );
}
