import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ borderTop: "1px solid rgba(201, 162, 39, 0.15)", background: "rgba(0,0,0,0.4)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ border: "1px solid rgba(201, 162, 39, 0.4)", background: "rgba(201, 162, 39, 0.1)" }}
              >
                <span className="text-xs font-bold" style={{ color: "#c9a227" }}>IIA</span>
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#c9a227" }}>IIA Telangana Chapter</p>
                <p className="text-xs" style={{ color: "rgba(245, 245, 240, 0.5)" }}>Indian Institute of Architects</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245, 245, 240, 0.55)" }}>
              The Indian Institute of Architects (IIA) is the apex body of architects in India,
              representing the architectural profession and fostering excellence in design.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: "#c9a227" }}>
              Event Details
            </h4>
            <div className="space-y-3 text-sm" style={{ color: "rgba(245, 245, 240, 0.6)" }}>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "#c9a227" }} />
                Hyderabad, Telangana
              </p>
              <p>📅 12th June 2026, Friday</p>
              <p>🕔 5:00 PM Onwards</p>
              <p>🎟 Telangana Architects Festival 2026</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: "#c9a227" }}>
              Contact
            </h4>
            <div className="space-y-3 text-sm" style={{ color: "rgba(245, 245, 240, 0.6)" }}>
              <a href="mailto:info@iiatchapter.org" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#c9a227" }} />
                info@iiatchapter.org
              </a>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "#c9a227" }} />
                For enquiries, email us
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(201, 162, 39, 0.1)", color: "rgba(245, 245, 240, 0.4)" }}
        >
          <p>© 2026 Indian Institute of Architects, Telangana Chapter. All rights reserved.</p>
          <p>Telangana Architects Festival · iiatchapter.org</p>
        </div>
      </div>
    </footer>
  );
}
