"use client";

import React from "react";
import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { Calendar, MapPin, Award, Users, Music, Star, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ease = "easeOut" as Transition["ease"];
const iv = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease },
});

/* ── Data ──────────────────────────────────────────── */
const highlights = [
  { icon: Award, title: "Awards Night",     desc: "Excellence in architecture and design across Telangana celebrated with pride" },
  { icon: Music, title: "Cultural Evening", desc: "Vibrant performances honouring art, culture and architectural heritage" },
  { icon: Users, title: "Networking",       desc: "Architects, designers, and industry leaders connected across the city" },
  { icon: Star,  title: "Felicitations",    desc: "Distinguished members and lifetime achievers honoured on a grand stage" },
];

const stats = [
  { value: "300+", label: "Registrations" },
  { value: "500+", label: "Attendees" },
  { value: "10+",  label: "Distinguished Guests" },
  { value: "1",    label: "Day of Knowledge, Networking & Celebration" },
];

const schedule = [
  { time: "05:00 PM", event: "Registration & Welcome Drinks" },
  { time: "06:00 PM", event: "Inauguration Ceremony" },
  { time: "06:30 PM", event: "Cultural Performances" },
  { time: "08:00 PM", event: "Awards & Felicitations" },
  { time: "09:00 PM", event: "Cocktail and Dinner" },
  { time: "10:30 PM", event: "Networking" },
];

const officeBearers = [
  { name: "Ar. Narasimham V V L",  role: "Chairman",           phone: "+91 9848046148" },
  { name: "Ar. V. RamMohan",       role: "Vice Chairman",      phone: "+91 9848468680" },
  { name: "Ar. Uday Shankar Doni", role: "Imm. Past Chairman", phone: "+91 9246522693" },
  { name: "Ar. T. Ashok Raj",      role: "Hon. Treasurer",     phone: "+91 9849015811" },
  { name: "Ar. Y. Suresh Babu",    role: "Hon. Jt. Secretary", phone: "+91 9866117788" },
  { name: "Ar. Jyothirmayi Mitta", role: "Hon. Jt. Secretary", phone: "+91 9866660224" },
];

const executiveMembers = [
  "Ar. S. Raghu Ram Acharya",
  "Ar. A. A. Sharma",
  "Ar. Abhishek Ramanujam",
  "Ar. Chandi Prasanna",
  "Ar. Ashok Bhairi",
  "Ar. E. Mukhteshwar",
  "Ar. Sandeep Naidu Gatti",
  "Ar. B. Vijay Mohan",
  "Ar. Shweta Balasubramoni",
  "Ar. JM Balachandran",
  "Ar. Sajjan Kumar Goud",
  "Ar. Jaipal Reddy",
];

/* ── Styles ────────────────────────────────────────── */
const S = {
  wrap:    { width: "100%", background: "#0f2060", color: "#f0ede6" } as React.CSSProperties,
  section: (pt = "7rem", pb = "7rem") => ({ padding: `${pt} 1.75rem ${pb}` } as React.CSSProperties),
  inner:   (max = 1120) => ({ maxWidth: max, margin: "0 auto" } as React.CSSProperties),
  label:   { fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase" as const, fontWeight: 700, color: "#c9a227", display: "block", marginBottom: "0.875rem" },
  h2:      { fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "clamp(1.9rem,4.5vw,3.2rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 1.25rem" } as React.CSSProperties,
  p:       { fontSize: "1rem", lineHeight: 1.8, color: "rgba(240,237,230,0.6)", margin: 0 } as React.CSSProperties,
  card:    { background: "rgba(255,255,255,0.035)", border: "1px solid rgba(201,162,39,0.18)", borderRadius: "1.125rem" } as React.CSSProperties,
  goldCard:{ background: "linear-gradient(135deg,rgba(201,162,39,0.13),rgba(201,162,39,0.04))", border: "1px solid rgba(201,162,39,0.38)", borderRadius: "1.125rem" } as React.CSSProperties,
};

export default function Home() {
  return (
    <div style={S.wrap}>
      <Navbar />

      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>

        {/* Full-bleed stage photograph */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/taf2026/taf-hero-stage.webp"
            alt="TAF 2026 Grand Ballroom — Avasa Hotel, Hyderabad"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,24,76,0.93) 0%,rgba(10,24,76,0.6) 48%,rgba(10,24,76,0.9) 100%)" }} />
        </div>

        <div style={{ ...S.inner(860), position: "relative", zIndex: 10, padding: "8rem 1.75rem 4rem", textAlign: "center" }}>

          {/* Logos */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3rem", marginBottom: "2.5rem" }}
          >
            <div style={{ filter: "drop-shadow(0 0 28px rgba(201,162,39,0.65))" }}>
              <Image src="/iia-tc-seal.png" alt="IIA Telangana Chapter" width={140} height={140} style={{ width: 128, height: 128, objectFit: "contain" }} />
            </div>
            <div style={{ width: 1, height: 90, background: "linear-gradient(to bottom,transparent,rgba(201,162,39,0.5),transparent)" }} />
            <div style={{ filter: "drop-shadow(0 0 28px rgba(201,162,39,0.65))" }}>
              <Image src="/taf-logo.png" alt="TAF" width={140} height={140} style={{ width: 128, height: 128, objectFit: "contain" }} />
            </div>
          </motion.div>

          {/* Decennial badge */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.55 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "linear-gradient(135deg,rgba(201,162,39,0.18),rgba(201,162,39,0.06))", border: "1px solid rgba(201,162,39,0.45)", borderRadius: 9999, padding: "0.45rem 1.1rem 0.45rem 0.75rem", marginBottom: "1.5rem" }}
          >
            <span style={{ fontSize: "1rem" }}>✦</span>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a227" }}>Decennial Celebrations</span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.55 }}
            style={{ ...S.label, textAlign: "center", marginBottom: "1rem" }}
          >
            The Indian Institute of Architects &nbsp;·&nbsp; Telangana Chapter
          </motion.p>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.75, ease: "easeOut" }}
            style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "clamp(2.8rem,7.5vw,6rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em", margin: "0 0 0.75rem" }}
          >
            Telangana<br />
            <span className="gold-text">Architecture</span><br />
            Festival
          </motion.h1>

          {/* Year rule */}
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2.25rem" }}
          >
            <span style={{ flex: 1, maxWidth: 72, height: 1, background: "rgba(201,162,39,0.4)" }} />
            <span style={{ fontSize: "1rem", letterSpacing: "0.45em", color: "rgba(240,204,90,0.8)", fontWeight: 300 }}>2 0 2 6</span>
            <span style={{ flex: 1, maxWidth: 72, height: 1, background: "rgba(201,162,39,0.4)" }} />
          </motion.div>

          {/* Date & venue pills — historical record */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62, duration: 0.55 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem", marginBottom: "2.75rem" }}
          >
            {[
              { icon: Calendar, text: "12th June 2026 · Friday" },
              { icon: MapPin,   text: "Avasa Hotel, Madhapur, Hyderabad" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.5rem 1rem", borderRadius: 9999, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,162,39,0.2)", fontSize: "0.83rem", color: "rgba(240,237,230,0.8)" }}>
                <Icon size={13} color="#c9a227" />{text}
              </span>
            ))}
          </motion.div>

          {/* Post-event celebration message */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78, duration: 0.55 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem", padding: "0.7rem 1.6rem", borderRadius: 9999, background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.45)" }}>
              <span style={{ fontSize: "1rem" }}>✦</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c9a227" }}>A Celebration to Remember</span>
            </div>
            <p style={{ fontSize: "0.95rem", color: "rgba(240,237,230,0.65)", textAlign: "center", lineHeight: 1.75, margin: 0, maxWidth: 520 }}>
              On 12th June 2026, the architectural fraternity of Telangana gathered<br />
              for an unforgettable evening of excellence, culture, and community.
            </p>
            <a href="#about"><button className="btn-outline">Explore the Highlights</button></a>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", opacity: 0.3 }}>
          <span style={{ fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 44, background: "linear-gradient(to bottom,rgba(201,162,39,0.7),transparent)" }} />
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" style={S.section()}>
        <div style={S.inner()}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

            {/* Text column */}
            <motion.div {...iv()}>
              <span style={S.label}>About The Festival</span>
              <h2 style={S.h2}>A Grand Celebration of <span className="gold-text">Architecture</span></h2>
              <p style={{ ...S.p, marginBottom: "1.25rem" }}>
                The Telangana Architecture Festival (TAF) 2026 brought together the architectural fraternity for an unforgettable evening of awards, cultural performances, felicitations, and meaningful connections — marking a decade of design excellence with our <strong style={{ color: "#c9a227" }}>Decennial Celebrations</strong>.
              </p>
              <p style={S.p}>
                Hosted at Avasa Hotel, Madhapur, Hyderabad on 12th June 2026, the event united architects, urban planners, designers, and industry leaders under the theme <em style={{ color: "rgba(201,162,39,0.9)" }}>&ldquo;From Stone to Storeys&rdquo;</em> — celebrating ten years of the IIA Telangana Chapter.
              </p>

              {/* Highlight cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem", marginTop: "2.5rem" }}>
                {highlights.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div key={title} {...iv(i * 0.09)}
                    style={{ ...S.card, padding: "1.25rem", transition: "transform 0.25s,border-color 0.25s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.42)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.borderColor = ""; }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: "0.625rem", background: "rgba(201,162,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem", color: "#c9a227" }}>
                      <Icon size={20} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "0.92rem", fontWeight: 700, marginBottom: "0.35rem" }}>{title}</h3>
                    <p style={{ fontSize: "0.78rem", lineHeight: 1.6, color: "rgba(240,237,230,0.5)" }}>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Inauguration photo */}
            <motion.div {...iv(0.15)} style={{ position: "relative" }}>
              <div style={{ borderRadius: "1.5rem", overflow: "hidden", border: "1px solid rgba(201,162,39,0.22)", boxShadow: "0 32px 80px rgba(0,0,0,0.45)" }}>
                <Image
                  src="/images/taf2026/taf-lamp-lighting.webp"
                  alt="TAF 2026 Inauguration — Traditional lamp lighting ceremony"
                  width={900}
                  height={600}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", right: "1.25rem", background: "rgba(10,24,76,0.88)", backdropFilter: "blur(12px)", borderRadius: "0.75rem", padding: "0.75rem 1rem", border: "1px solid rgba(201,162,39,0.15)" }}>
                <p style={{ fontSize: "0.75rem", color: "rgba(240,237,230,0.7)", margin: 0, lineHeight: 1.5 }}>
                  <span style={{ color: "#c9a227", fontWeight: 600 }}>Inauguration Ceremony</span>&nbsp;·&nbsp;Traditional lamp lighting marking the commencement of TAF 2026
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ EVENT AT A GLANCE ═══════════════ */}
      <section id="glance" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/taf2026/taf-audience-side-wide.webp"
            alt="TAF 2026 — Hundreds of architects gathered at Avasa Hotel"
            fill
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,24,76,0.92) 0%,rgba(10,24,76,0.78) 50%,rgba(10,24,76,0.92) 100%)" }} />
        </div>

        <div style={{ ...S.inner(), position: "relative", zIndex: 1, padding: "8rem 1.75rem" }}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={S.label}>Event at a Glance</span>
            <h2 style={S.h2}>By the <span className="gold-text">Numbers</span></h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.5rem" }}>
            {stats.map((stat, i) => (
              <motion.div key={stat.label} {...iv(i * 0.1)}
                style={{ ...S.goldCard, padding: "2.25rem 1.5rem", textAlign: "center" }}
              >
                <div style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "clamp(2.8rem,5vw,4rem)", fontWeight: 700, color: "#c9a227", lineHeight: 1, marginBottom: "0.5rem" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.82rem", color: "rgba(240,237,230,0.65)", letterSpacing: "0.03em", lineHeight: 1.5 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ EVENT HIGHLIGHTS ═══════════════ */}
      <section id="highlights" style={S.section()}>
        <div style={S.inner()}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={S.label}>From the Stage</span>
            <h2 style={S.h2}>Event <span className="gold-text">Highlights</span></h2>
          </motion.div>

          {/* Panel discussion — photo left, text right */}
          <motion.div {...iv(0.1)} className="highlight-panel" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "4rem" }}>
            <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(201,162,39,0.18)", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
              <Image
                src="/images/taf2026/taf-panel-discussion.webp"
                alt="TAF 2026 — Panel Discussion on Stage"
                width={900}
                height={600}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div>
              <span style={{ ...S.label, marginBottom: "1rem" }}>Knowledge Session</span>
              <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "clamp(1.3rem,2.5vw,2rem)", fontWeight: 700, lineHeight: 1.25, margin: "0 0 1.25rem" }}>
                Conversations That <span className="gold-text">Shape</span> the Future
              </h3>
              <p style={{ ...S.p, marginBottom: "1rem" }}>
                A distinguished panel of architects and thought leaders took to the stage for an engaging dialogue on the evolving landscape of architecture in Telangana — from heritage preservation to sustainable urban design.
              </p>
              <p style={S.p}>
                The session drew from four decades of collective experience, offering insights that resonated with the assembled fraternity of 500+ attendees.
              </p>
            </div>
          </motion.div>

          {/* Registration welcome — text left, photo right */}
          <motion.div {...iv(0.15)} className="highlight-panel highlight-panel-reverse" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span style={{ ...S.label, marginBottom: "1rem" }}>Arrival Experience</span>
              <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "clamp(1.3rem,2.5vw,2rem)", fontWeight: 700, lineHeight: 1.25, margin: "0 0 1.25rem" }}>
                A Warm <span className="gold-text">Welcome</span> for Every Architect
              </h3>
              <p style={S.p}>
                The registration desk buzzed with excitement as architects from across Telangana arrived at Avasa Hotel. Welcome drinks, handcrafted programmes, and a warm team reception set the tone for a memorable evening.
              </p>
            </div>
            <div style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(201,162,39,0.18)", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
              <Image
                src="/images/taf2026/taf-registration-welcome.webp"
                alt="TAF 2026 — Registration & Welcome"
                width={900}
                height={600}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ MOMENTS FROM TAF 2026 ═══════════════ */}
      <section id="moments" style={S.section()}>
        <div style={S.inner()}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={S.label}>Photo Gallery</span>
            <h2 style={S.h2}>Moments from <span className="gold-text">TAF 2026</span></h2>
            <p style={{ ...S.p, maxWidth: 560, margin: "0 auto" }}>
              A visual journey through an evening the architectural community of Telangana will long remember.
            </p>
          </motion.div>

          {/* Gallery grid */}
          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "1rem" }}>

            {/* Row 1: wide audience (8 cols) + chief guest close-up (4 cols) */}
            <motion.div {...iv(0.05)} className="gallery-wide" style={{ gridColumn: "1 / 9", borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(201,162,39,0.14)" }}>
              <Image
                src="/images/taf2026/taf-audience-wide.webp"
                alt="TAF 2026 — Packed audience, Avasa Hotel ballroom"
                width={900}
                height={500}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 260 }}
              />
            </motion.div>
            <motion.div {...iv(0.1)} className="gallery-narrow" style={{ gridColumn: "9 / 13", borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(201,162,39,0.14)" }}>
              <Image
                src="/images/taf2026/taf-chief-guest.webp"
                alt="TAF 2026 — Chief Guest"
                width={500}
                height={500}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", minHeight: 260 }}
              />
            </motion.div>

            {/* Row 2: networking (4 cols) + audience side wide (8 cols) */}
            <motion.div {...iv(0.12)} className="gallery-narrow" style={{ gridColumn: "1 / 5", borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(201,162,39,0.14)" }}>
              <Image
                src="/images/taf2026/taf-networking-01.webp"
                alt="TAF 2026 — Networking at Avasa Hotel"
                width={500}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 220 }}
              />
            </motion.div>
            <motion.div {...iv(0.15)} className="gallery-wide" style={{ gridColumn: "5 / 13", borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(201,162,39,0.14)" }}>
              <Image
                src="/images/taf2026/taf-closing-group-photo.webp"
                alt="TAF 2026 — IIA Telangana Chapter team in traditional ikat vests"
                width={900}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block", minHeight: 220 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ AWARDS & RECOGNITION ═══════════════ */}
      <section id="awards" style={S.section()}>
        <div style={S.inner()}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={S.label}>Celebrating Excellence</span>
            <h2 style={S.h2}>Awards &amp; <span className="gold-text">Recognition</span></h2>
            <p style={{ ...S.p, maxWidth: 600, margin: "0 auto" }}>
              TAF 2026 honoured architects and organisations whose work exemplifies design excellence, innovation, and social impact across Telangana.
            </p>
          </motion.div>

          {/* Feature: felicitation — full width */}
          <motion.div {...iv(0.1)} style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(201,162,39,0.22)", boxShadow: "0 32px 80px rgba(0,0,0,0.45)", marginBottom: "1.5rem", position: "relative" }}>
            <Image
              src="/images/taf2026/taf-felicitation-moment.webp"
              alt="TAF 2026 — Felicitation Ceremony"
              width={1120}
              height={560}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.5rem 2rem 1.5rem", background: "linear-gradient(to top,rgba(10,24,76,0.95),transparent)" }}>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "rgba(240,237,230,0.75)" }}>
                <span style={{ color: "#c9a227", fontWeight: 700 }}>Felicitation Ceremony</span>&nbsp;·&nbsp;Distinguished architects honoured with Pochampally ikat shawls — a tribute to Telangana&apos;s cultural excellence
              </p>
            </div>
          </motion.div>

          {/* Two smaller: sponsor trophies + group photo */}
          <div className="awards-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            <motion.div {...iv(0.15)} style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(201,162,39,0.18)", boxShadow: "0 16px 48px rgba(0,0,0,0.3)", position: "relative" }}>
              <Image
                src="/images/taf2026/taf-sponsor-recognition.webp"
                alt="TAF 2026 — Sponsor & Award Recognition"
                width={700}
                height={500}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem 1.25rem 1rem", background: "linear-gradient(to top,rgba(10,24,76,0.95),transparent)" }}>
                <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(240,237,230,0.75)" }}>
                  <span style={{ color: "#c9a227", fontWeight: 600 }}>Sponsor Recognition</span>&nbsp;·&nbsp;Gold &amp; bronze trophies presented to valued contributors
                </p>
              </div>
            </motion.div>

            <motion.div {...iv(0.2)} style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(201,162,39,0.18)", boxShadow: "0 16px 48px rgba(0,0,0,0.3)", position: "relative" }}>
              <Image
                src="/images/taf2026/taf-award-group-photo.webp"
                alt="TAF 2026 — Award Recipients Group Photo"
                width={700}
                height={500}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem 1.25rem 1rem", background: "linear-gradient(to top,rgba(10,24,76,0.95),transparent)" }}>
                <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(240,237,230,0.75)" }}>
                  <span style={{ color: "#c9a227", fontWeight: 600 }}>Award Recipients</span>&nbsp;·&nbsp;Group photograph with winners and organisers on stage
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ SCHEDULE ═══════════════ */}
      <section id="schedule" style={S.section()}>
        <div style={S.inner(720)}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={S.label}>Programme</span>
            <h2 style={S.h2}>How the Evening <span className="gold-text">Unfolded</span></h2>
          </motion.div>

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            <div style={{ position: "absolute", left: 84, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom,transparent,rgba(201,162,39,0.22),transparent)" }} />
            {schedule.map((item, i) => (
              <motion.div key={i} {...iv(i * 0.07)} style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                <span style={{ width: 72, flexShrink: 0, textAlign: "right", fontSize: "0.75rem", fontFamily: "monospace", fontWeight: 600, color: "#c9a227", letterSpacing: "0.02em" }}>{item.time}</span>
                <div style={{ flexShrink: 0, width: 11, height: 11, borderRadius: "50%", border: "2px solid #c9a227", background: "#0f2060" }} />
                <div style={{ ...S.card, flex: 1, padding: "0.9rem 1.35rem" }}>
                  <p style={{ fontSize: "0.92rem", fontWeight: 600, margin: 0 }}>{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ THANK YOU ═══════════════ */}
      <section id="thankyou" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/taf2026/taf-closing-group-photo.webp"
            alt="TAF 2026 — IIA Telangana Chapter team"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,24,76,0.88) 0%,rgba(10,24,76,0.72) 40%,rgba(10,24,76,0.95) 100%)" }} />
        </div>

        <div style={{ ...S.inner(760), position: "relative", zIndex: 1, padding: "9rem 1.75rem", textAlign: "center" }}>
          <motion.div {...iv()}>
            <span style={S.label}>With Gratitude</span>
            <h2 style={{ ...S.h2, fontSize: "clamp(2rem,5vw,3.6rem)", marginBottom: "1.5rem" }}>
              Thank You for <span className="gold-text">Being Part</span><br />of TAF 2026
            </h2>
            <p style={{ ...S.p, maxWidth: 600, margin: "0 auto 1.5rem", fontSize: "1.05rem" }}>
              To every architect, dignitary, speaker, sponsor, volunteer, and guest — TAF 2026 was extraordinary because you were there. The Telangana Chapter of the IIA is deeply grateful for your presence, your passion, and your belief in the power of architecture to transform lives.
            </p>
            <p style={{ ...S.p, maxWidth: 520, margin: "0 auto", fontSize: "0.92rem", fontStyle: "italic", color: "rgba(240,204,90,0.65)" }}>
              &ldquo;Architecture begins where engineering ends.&rdquo;&nbsp;&mdash;&nbsp;Walter Gropius
            </p>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ ABOUT IIA TELANGANA CHAPTER ═══════════════ */}
      <section id="about-iia" style={S.section()}>
        <div style={S.inner(860)}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={S.label}>The Organisation</span>
            <h2 style={S.h2}>About IIA <span className="gold-text">Telangana Chapter</span></h2>
          </motion.div>

          <motion.div {...iv(0.1)} style={{ ...S.card, padding: "3rem", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
              <div style={{ filter: "drop-shadow(0 0 20px rgba(201,162,39,0.4))" }}>
                <Image src="/iia-tc-seal.png" alt="IIA Telangana Chapter" width={100} height={100} style={{ width: 88, height: 88, objectFit: "contain" }} />
              </div>
            </div>
            <p style={{ ...S.p, maxWidth: 680, margin: "0 auto 1.25rem" }}>
              The Indian Institute of Architects (IIA), Telangana Chapter, is the foremost professional body representing architects across the state of Telangana. Established as a chapter of the national IIA — founded in 1917 — the Telangana Chapter has spent a decade championing architectural excellence, professional development, and the cultural legacy of built environments in the region.
            </p>
            <p style={{ ...S.p, maxWidth: 680, margin: "0 auto" }}>
              Through annual events like the Telangana Architecture Festival, continuing education programmes, and policy advocacy, the Chapter advances the architectural profession and serves the public interest by promoting design of the highest quality.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ OFFICE BEARERS ═══════════════ */}
      <section id="team" style={S.section()}>
        <div style={S.inner()}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={S.label}>Team IIA Telangana Chapter</span>
            <h2 style={S.h2}>Office <span className="gold-text">Bearers</span></h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
            {officeBearers.map((ob, i) => (
              <motion.div key={ob.name} {...iv(i * 0.08)} style={{ ...S.goldCard, padding: "1.6rem 1.75rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a227" }}>{ob.role}</span>
                <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "1.1rem", fontWeight: 700, margin: "0.1rem 0 0.5rem" }}>{ob.name}</h3>
                <a href={`tel:${ob.phone.replace(/\s/g, "")}`} style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.82rem", color: "rgba(240,237,230,0.55)", textDecoration: "none" }}>
                  <Phone size={12} color="#c9a227" />{ob.phone}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Executive Committee */}
          <motion.div {...iv(0.15)}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span style={S.label}>Executive Committee Members</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "0.875rem" }}>
              {executiveMembers.map((name, i) => (
                <motion.div key={name} {...iv(i * 0.05)} style={{ ...S.card, padding: "0.9rem 1.2rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a227", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* ── Responsive styles ── */}
      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; gap: 5rem; }
        .highlight-panel { grid-template-columns: 1.2fr 1fr; }
        .highlight-panel-reverse { grid-template-columns: 1fr 1.2fr; }
        .gallery-grid { grid-template-columns: repeat(12,1fr); }
        .gallery-wide { }
        .gallery-narrow { }
        .awards-grid { grid-template-columns: 1fr 1fr; }

        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .highlight-panel { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .highlight-panel-reverse { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .highlight-panel-reverse > div:first-child { order: 2; }
          .highlight-panel-reverse > div:last-child { order: 1; }
          .gallery-wide { grid-column: 1 / -1 !important; }
          .gallery-narrow { grid-column: 1 / -1 !important; }
          .awards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
