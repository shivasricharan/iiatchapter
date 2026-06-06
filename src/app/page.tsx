"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Award, Users, Music, Star, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";

const easeOut = "easeOut" as Transition["ease"];
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: easeOut },
});

const highlights = [
  { icon: Award,  title: "Awards Night",      desc: "Celebrating excellence in architecture and design across Telangana" },
  { icon: Music,  title: "Cultural Evening",  desc: "A vibrant celebration of art, culture, and architectural heritage" },
  { icon: Users,  title: "Networking",        desc: "Connect with 1,000+ architects, designers, and industry leaders" },
  { icon: Star,   title: "Felicitations",     desc: "Honouring distinguished members and lifetime achievers" },
];

const schedule = [
  { time: "05:00 PM", event: "Registration & Welcome Drinks" },
  { time: "06:00 PM", event: "Inauguration Ceremony" },
  { time: "06:30 PM", event: "Awards & Felicitations" },
  { time: "08:00 PM", event: "Cultural Performances" },
  { time: "09:00 PM", event: "Gala Dinner" },
  { time: "10:30 PM", event: "Networking & Valediction" },
];

export default function Home() {
  return (
    <div style={{ width: "100%", background: "#080808", color: "#f0ede6" }}>
      <Navbar />

      {/* ════════════════════════════════════════ HERO */}
      <section
        style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
      >
        {/* ambient blobs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "15%", left: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", bottom: "15%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
          {/* grid */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="g" width="72" height="72" patternUnits="userSpaceOnUse">
                <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#c9a227" strokeWidth="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
          </svg>
        </div>

        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 900, margin: "0 auto", padding: "8rem 1.5rem 4rem", textAlign: "center" }}>

          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2.5rem", marginBottom: "3rem" }}
          >
            <div className="float" style={{ filter: "drop-shadow(0 0 16px rgba(201,162,39,0.4))" }}>
              <Image src="/iia-tc-seal.png" alt="IIA Telangana Chapter" width={96} height={96} style={{ width: 88, height: 88, objectFit: "contain" }} />
            </div>
            <div style={{ width: 1, height: 64, background: "linear-gradient(to bottom, transparent, rgba(201,162,39,0.5), transparent)" }} />
            <div className="float" style={{ animationDelay: "1.5s", filter: "drop-shadow(0 0 16px rgba(201,162,39,0.4))" }}>
              <Image src="/taf-logo.png" alt="Telangana Architecture Festival" width={80} height={96} style={{ width: 72, height: 88, objectFit: "contain" }} />
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="label-tag" style={{ marginBottom: "1.25rem" }}
          >
            Indian Institute of Architects &nbsp;·&nbsp; Telangana Chapter
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75, ease: "easeOut" }}
            className="font-display"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em", margin: "0 0 1.25rem" }}
          >
            Telangana<br />
            <span className="gold-text">Architects</span><br />
            Festival
          </motion.h1>

          {/* Year rule */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem" }}
          >
            <span style={{ flex: 1, maxWidth: 80, height: 1, background: "rgba(201,162,39,0.45)" }} />
            <span style={{ fontSize: "1.1rem", letterSpacing: "0.4em", color: "rgba(240,204,90,0.85)", fontWeight: 300 }}>2 0 2 6</span>
            <span style={{ flex: 1, maxWidth: 80, height: 1, background: "rgba(201,162,39,0.45)" }} />
          </motion.div>

          {/* Meta pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "3rem" }}
          >
            {[
              { icon: Calendar, text: "12th June 2026 · Friday" },
              { icon: Clock,    text: "5:00 PM Onwards" },
              { icon: MapPin,   text: "Hyderabad, Telangana" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.55rem 1.1rem", borderRadius: 9999,
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,162,39,0.2)",
                fontSize: "0.85rem", color: "rgba(240,237,230,0.8)"
              }}>
                <Icon size={14} color="#c9a227" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "5rem" }}
          >
            <Link href="/register">
              <button className="btn-primary">Register Now <ArrowRight size={16} /></button>
            </Link>
            <a href="#about">
              <button className="btn-outline">Learn More</button>
            </a>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <CountdownTimer targetDate="2026-06-12T17:00:00" />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.35 }}>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(201,162,39,0.7), transparent)" }} />
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════════════════ ABOUT */}
      <section id="about" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <motion.div {...inView()} style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <span className="label-tag" style={{ marginBottom: "1rem", display: "block" }}>About The Festival</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.5rem" }}>
              A Grand Celebration of <span className="gold-text">Architecture</span>
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(240,237,230,0.65)", maxWidth: 680, margin: "0 auto" }}>
              The Telangana Architects Festival (TAF) is the flagship annual event by the Indian Institute of Architects,
              Telangana Chapter — uniting the architectural fraternity for an evening of awards, cultural performances,
              felicitations, and meaningful networking. A night that celebrates excellence and community.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...inView(i * 0.1)}
                className="glass-card"
                style={{ borderRadius: "1.25rem", padding: "2rem", textAlign: "center", transition: "border-color 0.25s, transform 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.45)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.borderColor = ""; }}
              >
                <div style={{ width: 56, height: 56, borderRadius: "0.875rem", background: "rgba(201,162,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "#c9a227" }}>
                  <Icon size={26} />
                </div>
                <h3 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.6rem" }}>{title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(240,237,230,0.55)" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════════════════ SCHEDULE */}
      <section id="schedule" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <motion.div {...inView()} style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <span className="label-tag" style={{ marginBottom: "1rem", display: "block" }}>Programme</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15 }}>
              Evening Schedule
            </h2>
          </motion.div>

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* timeline line */}
            <div style={{ position: "absolute", left: 96, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, rgba(201,162,39,0.25), transparent)" }} />

            {schedule.map((item, i) => (
              <motion.div key={i} {...inView(i * 0.08)}
                style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
              >
                <span style={{ width: 80, flexShrink: 0, textAlign: "right", fontSize: "0.78rem", fontFamily: "monospace", fontWeight: 600, color: "#c9a227", letterSpacing: "0.03em" }}>
                  {item.time}
                </span>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", border: "2px solid #c9a227", background: "#080808" }} />
                </div>
                <div className="glass-card" style={{ flex: 1, borderRadius: "0.875rem", padding: "1rem 1.5rem" }}>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, margin: 0 }}>{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════════════════ PRICING */}
      <section id="pricing" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div {...inView()} style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <span className="label-tag" style={{ marginBottom: "1rem", display: "block" }}>Registration Fee</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15 }}>
              Choose Your Pass
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
            {/* Member Card */}
            <motion.div {...inView(0.1)}
              className="gold-card"
              style={{ borderRadius: "1.5rem", padding: "2.5rem", position: "relative", overflow: "hidden", textAlign: "center" }}
            >
              <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "#c9a227", color: "#080808", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em", padding: "0.35rem 0.85rem", borderRadius: 9999 }}>
                MEMBER BENEFIT
              </div>
              <div style={{ width: 64, height: 64, borderRadius: "1rem", background: "rgba(201,162,39,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", color: "#c9a227" }}>
                <Award size={30} />
              </div>
              <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>IIA Telangana Member</h3>
              <p style={{ fontSize: "0.875rem", color: "rgba(240,237,230,0.55)", marginBottom: "2rem" }}>Exclusive rate for verified Telangana Chapter members</p>
              <div style={{ marginBottom: "2rem" }}>
                <span className="gold-text font-display" style={{ fontSize: "3.5rem", fontWeight: 700 }}>₹500</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(240,237,230,0.45)", marginLeft: "0.4rem" }}>per person</span>
              </div>
              <ul style={{ textAlign: "left", listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {["Valid IIA Telangana membership required", "Membership number verified instantly", "Full event & awards access", "Gala Dinner included"].map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "rgba(240,237,230,0.7)" }}>
                    <CheckCircle size={15} color="#c9a227" style={{ flexShrink: 0 }} /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/register?type=member" style={{ display: "block" }}>
                <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Register as Member</button>
              </Link>
            </motion.div>

            {/* Non-member Card */}
            <motion.div {...inView(0.2)}
              className="glass-card"
              style={{ borderRadius: "1.5rem", padding: "2.5rem", textAlign: "center" }}
            >
              <div style={{ width: 64, height: 64, borderRadius: "1rem", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", color: "rgba(240,237,230,0.6)" }}>
                <Users size={30} />
              </div>
              <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>Non-Member / Other Chapter</h3>
              <p style={{ fontSize: "0.875rem", color: "rgba(240,237,230,0.55)", marginBottom: "2rem" }}>Open to all architects and design professionals</p>
              <div style={{ marginBottom: "2rem" }}>
                <span className="font-display" style={{ fontSize: "3.5rem", fontWeight: 700, color: "#f0ede6" }}>₹3,000</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(240,237,230,0.45)", marginLeft: "0.4rem" }}>per person</span>
              </div>
              <ul style={{ textAlign: "left", listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {["Other IIA chapter members welcome", "Non-IIA architects & professionals", "Full event & awards access", "Gala Dinner included"].map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "rgba(240,237,230,0.7)" }}>
                    <CheckCircle size={15} color="#c9a227" style={{ flexShrink: 0 }} /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/register?type=non-member" style={{ display: "block" }}>
                <button className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>Register Now</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════════════════ CTA */}
      <section style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div {...inView()}
            className="gold-card"
            style={{ borderRadius: "2rem", padding: "5rem 3rem", textAlign: "center", position: "relative", overflow: "hidden" }}
          >
            {/* decorative circle */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)" }} />
            <div style={{ position: "absolute", bottom: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <span className="label-tag" style={{ marginBottom: "1.25rem", display: "block" }}>Don&apos;t Miss Out</span>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.25rem" }}>
                Secure Your Seat Today
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(240,237,230,0.6)", marginBottom: "2.5rem", maxWidth: 520, margin: "0 auto 2.5rem" }}>
                Limited seats available. Register now and be part of this landmark event for the architectural community of Telangana.
              </p>
              <Link href="/register">
                <button className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.75rem" }}>
                  Register Now <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
