"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Award, Users, Music, Star, CheckCircle, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";

const ease = "easeOut" as Transition["ease"];
const iv = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease },
});

/* ── Data ──────────────────────────────────────────── */
const highlights = [
  { icon: Award, title: "Awards Night",     desc: "Celebrating excellence in architecture and design across Telangana" },
  { icon: Music, title: "Cultural Evening", desc: "Vibrant performances honouring art, culture and architectural heritage" },
  { icon: Users, title: "Networking",       desc: "Connect with 1,000+ architects, designers, and industry leaders" },
  { icon: Star,  title: "Felicitations",    desc: "Honouring distinguished members and lifetime achievers" },
];

const schedule = [
  { time: "05:00 PM", event: "Registration & Welcome Drinks" },
  { time: "06:00 PM", event: "Inauguration Ceremony" },
  { time: "06:30 PM", event: "Cultural Performances" },
  { time: "08:00 PM", event: "Awards & Felicitations" },
  { time: "09:00 PM", event: "Cocktail and Dinner" },
  { time: "10:30 PM", event: "Networking" },
];

const guests = [
  {
    name: "A. Revanth Reddy Garu",
    role: "Chief Guest",
    designation: "Hon'ble Chief Minister of Telangana",
    photo: "/revanth.png",
    highlight: true,
  },
  {
    name: "Shri. Vem. Narender Reddy Garu",
    role: "Special Guest",
    designation: "Hon'ble Member of Parliament, Rajya Sabha",
    photo: "/venkataramana.png",
    highlight: true,
  },
  {
    name: "Ar. Vilas Avachat Garu",
    role: "Guest of Honour",
    designation: "President, IIA National, Mumbai",
    photo: "/vilas.png",
    highlight: false,
  },
  {
    name: "Ar. N. Padmavathi Reddy Garu",
    role: "Special Guest",
    designation: "Hon'ble Member of Legislative Assembly, Govt. of Telangana",
    photo: "/padmavathi.png",
    highlight: false,
  },
  {
    name: "Ar. Naveen Yadav Garu",
    role: "Special Guest",
    designation: "Hon'ble Member of Legislative Assembly, Govt. of Telangana",
    photo: "/naveen.png",
    highlight: false,
  },
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

import React from "react";

export default function Home() {
  return (
    <div style={S.wrap}>
      <Navbar />

      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* Bg atmosphere */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "12%", left: "8%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,162,39,0.07) 0%,transparent 70%)", filter: "blur(70px)" }} />
          <div style={{ position: "absolute", bottom: "12%", right: "8%", width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,162,39,0.05) 0%,transparent 70%)", filter: "blur(70px)" }} />
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="g" width="72" height="72" patternUnits="userSpaceOnUse"><path d="M 72 0 L 0 0 0 72" fill="none" stroke="#c9a227" strokeWidth="0.6"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
          </svg>
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

          {/* Theme line */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.6 }}
            style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1rem,2.5vw,1.35rem)", color: "rgba(240,204,90,0.75)", margin: "0 0 2rem", letterSpacing: "0.04em" }}
          >
            &ldquo;From Stone to Storeys&rdquo;
          </motion.p>

          {/* Year rule */}
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2.25rem" }}
          >
            <span style={{ flex: 1, maxWidth: 72, height: 1, background: "rgba(201,162,39,0.4)" }} />
            <span style={{ fontSize: "1rem", letterSpacing: "0.45em", color: "rgba(240,204,90,0.8)", fontWeight: 300 }}>2 0 2 6</span>
            <span style={{ flex: 1, maxWidth: 72, height: 1, background: "rgba(201,162,39,0.4)" }} />
          </motion.div>

          {/* Meta pills */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62, duration: 0.55 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem", marginBottom: "2.75rem" }}
          >
            {[
              { icon: Calendar, text: "12th June 2026 · Friday" },
              { icon: Clock,    text: "5:00 PM Onwards" },
              { icon: MapPin,   text: "Avasa Hotel, Madhapur, Hyderabad" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.5rem 1rem", borderRadius: 9999, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,162,39,0.2)", fontSize: "0.83rem", color: "rgba(240,237,230,0.8)" }}>
                <Icon size={13} color="#c9a227" />{text}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78, duration: 0.55 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", justifyContent: "center", marginBottom: "4.5rem" }}
          >
            <Link href="/register"><button className="btn-primary">Register Now <ArrowRight size={16} /></button></Link>
            <a href="#about"><button className="btn-outline">Learn More</button></a>
          </motion.div>

          {/* Countdown */}
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92, duration: 0.65 }}>
            <CountdownTimer targetDate="2026-06-12T17:00:00" />
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
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={S.label}>About The Festival</span>
            <h2 style={S.h2}>A Grand Celebration of <span className="gold-text">Architecture</span></h2>
            <p style={{ ...S.p, maxWidth: 700, margin: "0 auto" }}>
              The Telangana Architecture Festival (TAF) is the flagship annual event by the Indian Institute of Architects, Telangana Chapter — bringing together the architectural fraternity for an unforgettable evening of awards, cultural performances, felicitations, and meaningful connections. This year marks a milestone — our <strong style={{ color: "#c9a227" }}>Decennial Celebrations</strong>, a decade of design excellence.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "1.25rem" }}>
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...iv(i * 0.09)} style={{ ...S.card, padding: "1.75rem", textAlign: "center", transition: "transform 0.25s,border-color 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.42)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.borderColor = ""; }}
              >
                <div style={{ width: 52, height: 52, borderRadius: "0.75rem", background: "rgba(201,162,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.1rem", color: "#c9a227" }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "rgba(240,237,230,0.55)" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ DISTINGUISHED GUESTS ═══════════════ */}
      <section id="guests" style={S.section()}>
        <div style={S.inner()}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={S.label}>In the Presence of Our Esteemed Guests</span>
            <h2 style={S.h2}>Distinguished <span className="gold-text">Guests</span></h2>
          </motion.div>

          {/* Chief Guest — A. Revanth Reddy, full-width solo spotlight */}
          <motion.div {...iv(0.1)} style={{ ...S.goldCard, padding: "2.5rem 2rem", textAlign: "center", position: "relative", overflow: "hidden", marginBottom: "1.5rem" }}>
            <div style={{ position: "absolute", top: -50, right: -50, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,162,39,0.1) 0%,transparent 70%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ width: 140, height: 140, borderRadius: "50%", overflow: "hidden", margin: "0 auto 1.5rem", border: "3px solid rgba(201,162,39,0.55)", boxShadow: "0 0 36px rgba(201,162,39,0.25)" }}>
                <Image src={guests[0].photo} alt={guests[0].name} width={140} height={140} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ display: "inline-block", background: "#c9a227", color: "#080808", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.35rem 1.1rem", borderRadius: 9999, marginBottom: "1rem" }}>Chief Guest</div>
              <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, margin: "0 0 0.5rem" }}>{guests[0].name}</h3>
              <p style={{ color: "#c9a227", fontSize: "0.95rem", fontWeight: 600, margin: 0 }}>{guests[0].designation}</p>
            </div>
          </motion.div>

          {/* All other guests including Narender Reddy — grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.25rem" }}>
            {guests.slice(1).map((g, i) => (
              <motion.div key={g.name} {...iv(0.2 + i * 0.1)} style={{ ...S.card, padding: "1.75rem", textAlign: "center" }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", overflow: "hidden", margin: "0 auto 1.1rem", border: "2px solid rgba(201,162,39,0.4)", boxShadow: "0 0 20px rgba(201,162,39,0.12)" }}>
                  <Image src={g.photo} alt={g.name} width={100} height={100} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ display: "inline-block", background: "rgba(201,162,39,0.12)", color: "#c9a227", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "0.3rem 0.9rem", borderRadius: 9999, marginBottom: "0.9rem", border: "1px solid rgba(201,162,39,0.3)" }}>{g.role}</div>
                <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "0.92rem", fontWeight: 700, margin: "0 0 0.4rem", whiteSpace: "nowrap" }}>{g.name}</h3>
                <p style={{ fontSize: "0.82rem", color: "rgba(240,237,230,0.55)", margin: 0 }}>{g.designation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ SCHEDULE ═══════════════ */}
      <section id="schedule" style={S.section()}>
        <div style={S.inner(720)}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={S.label}>Programme</span>
            <h2 style={S.h2}>Evening Schedule</h2>
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
                <a href={`tel:${ob.phone.replace(/\s/g,"")}`} style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.82rem", color: "rgba(240,237,230,0.55)", textDecoration: "none" }}>
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

      <div className="divider" />

      {/* ═══════════════ PRICING ═══════════════ */}
      <section id="pricing" style={S.section()}>
        <div style={S.inner(900)}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={S.label}>Registration Fee</span>
            <h2 style={S.h2}>Choose Your Pass</h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "1.5rem" }}>
            {/* IIA Telangana Member */}
            <motion.div {...iv(0.1)} style={{ ...S.goldCard, padding: "2.25rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "#c9a227", color: "#080808", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.08em", padding: "0.3rem 0.75rem", borderRadius: 9999 }}>BEST RATE</div>
              <div style={{ width: 56, height: 56, borderRadius: "0.875rem", background: "rgba(201,162,39,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "#c9a227" }}><Award size={26} /></div>
              <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.35rem" }}>IIA Active Telangana Member</h3>
              <p style={{ fontSize: "0.82rem", color: "rgba(240,237,230,0.5)", marginBottom: "1.5rem" }}>Active members of IIA Telangana Chapter</p>
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="gold-text" style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "3rem", fontWeight: 700 }}>₹500</span>
                <span style={{ fontSize: "0.8rem", color: "rgba(240,237,230,0.4)", marginLeft: "0.4rem" }}>per person</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.55rem", textAlign: "left" }}>
                {["IIA Telangana Chapter Active Members Only","Full Events & Awards access","Cocktail and Dinner included"].map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "rgba(240,237,230,0.7)" }}>
                    <CheckCircle size={13} color="#c9a227" style={{ flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <Link href="/register?type=member" style={{ display: "block" }}>
                <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Register as Member</button>
              </Link>
            </motion.div>

            {/* IIA Member / Architect */}
            <motion.div {...iv(0.2)} style={{ ...S.card, padding: "2.25rem", textAlign: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: "0.875rem", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "rgba(240,237,230,0.6)" }}><Users size={26} /></div>
              <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.35rem" }}>IIA Inactive Member / Architect</h3>
              <p style={{ fontSize: "0.82rem", color: "rgba(240,237,230,0.5)", marginBottom: "1.5rem" }}>Inactive IIA members & architects from any chapter</p>
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "3rem", fontWeight: 700, color: "#f0ede6" }}>₹1,500</span>
                <span style={{ fontSize: "0.8rem", color: "rgba(240,237,230,0.4)", marginLeft: "0.4rem" }}>per person</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.55rem", textAlign: "left" }}>
                {["IIA Inactive Members of Telangana Chapter","Full Events & Awards access","Cocktail and Dinner included"].map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "rgba(240,237,230,0.7)" }}>
                    <CheckCircle size={13} color="#c9a227" style={{ flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <Link href="/register?type=other-chapter" style={{ display: "block" }}>
                <button className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>Register as Architect</button>
              </Link>
            </motion.div>

            {/* Others */}
            <motion.div {...iv(0.3)} style={{ ...S.card, padding: "2.25rem", textAlign: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: "0.875rem", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "rgba(240,237,230,0.6)" }}><Users size={26} /></div>
              <h3 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.35rem" }}>Open to All</h3>
              <p style={{ fontSize: "0.82rem", color: "rgba(240,237,230,0.5)", marginBottom: "1.5rem" }}>Open to all professionals, industry partners & guests</p>
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "3rem", fontWeight: 700, color: "#f0ede6" }}>₹3,000</span>
                <span style={{ fontSize: "0.8rem", color: "rgba(240,237,230,0.4)", marginLeft: "0.4rem" }}>per person</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.55rem", textAlign: "left" }}>
                {["Open to all","Full Events & Awards access","Cocktail and Dinner included"].map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "rgba(240,237,230,0.7)" }}>
                    <CheckCircle size={13} color="#c9a227" style={{ flexShrink: 0 }} />{f}
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

      {/* ═══════════════ QR PAYMENT ═══════════════ */}
      <section id="pay-qr" style={S.section("6rem","6rem")}>
        <div style={S.inner(1060)}>
          <motion.div {...iv()} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={S.label}>Instant Payment</span>
            <h2 style={S.h2}>Pay via <span className="gold-text">BharatQR</span></h2>
            <p style={{ ...S.p, maxWidth: 560, margin: "0 auto" }}>
              Scan the QR code with any UPI, Masterpass, RuPay or Visa app to pay instantly. Accepted by all major banking apps.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem", alignItems: "center" }}>

            {/* QR Code card */}
            <motion.div {...iv(0.1)} style={{ ...S.goldCard, padding: "2.5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
              <div style={{ background: "#ffffff", borderRadius: "1rem", padding: "1.5rem", marginBottom: "1.25rem", boxShadow: "0 0 48px rgba(201,162,39,0.25)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bharatqr.png"
                  alt="BharatQR — Scan to Pay IIA Telangana Chapter"
                  style={{ width: 220, height: 220, objectFit: "contain", display: "block", imageRendering: "crisp-edges" }}
                />
              </div>

              <span style={{ fontSize: "1.1rem", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
                <span style={{ color: "#f97316" }}>BHARAT</span><span style={{ color: "#16a34a" }}>QR</span>
              </span>

              <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(240,237,230,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                Scan here to pay
              </p>
            </motion.div>

            {/* Payment details */}
            <motion.div {...iv(0.2)} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* Payee name */}
              <div style={{ ...S.card, padding: "1.4rem 1.6rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a227", margin: "0 0 0.35rem" }}>Payee</p>
                <p style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>The Indian Institute of Architects, Telangana Chapter</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(240,237,230,0.45)", margin: "0.25rem 0 0" }}>MID: 037349031750025 &nbsp;·&nbsp; TID: 96978080</p>
              </div>

              {/* Accepted via */}
              <div style={{ ...S.card, padding: "1.4rem 1.6rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a227", margin: "0 0 0.9rem" }}>Accepted Via</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {[
                    { label: "Masterpass", number: "5122600083129​17",    color: "#eb001b" },
                    { label: "RuPay",      number: "6100020083129191",   color: "#f97316" },
                    { label: "mVisa",      number: "4604901083129180",   color: "#1a56db" },
                  ].map(p => (
                    <div key={p.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: p.color, minWidth: 76 }}>{p.label}</span>
                      <span style={{ fontSize: "0.78rem", fontFamily: "monospace", color: "rgba(240,237,230,0.5)", letterSpacing: "0.04em" }}>{p.number}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to pay steps */}
              <div style={{ ...S.card, padding: "1.4rem 1.6rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a227", margin: "0 0 0.9rem" }}>How to Pay</p>
                <ol style={{ margin: 0, padding: "0 0 0 1.1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    "Open any UPI / banking app on your phone",
                    "Tap Scan QR or BharatQR option",
                    "Scan the code and enter amount (₹500 / ₹1,500 / ₹3,000)",
                    "Add your name in remarks and confirm payment",
                    "Screenshot and share to iiatchapter@gmail.com",
                  ].map((s, i) => (
                    <li key={i} style={{ fontSize: "0.83rem", color: "rgba(240,237,230,0.6)", lineHeight: 1.55 }}>{s}</li>
                  ))}
                </ol>
              </div>

              {/* Helpdesk */}
              <p style={{ fontSize: "0.78rem", color: "rgba(240,237,230,0.35)", textAlign: "center", margin: 0 }}>
                ME Helpdesk: 1860 233 2332 &nbsp;/&nbsp; 022 4042 6060
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ GOOGLE FORM CTA ═══════════════ */}
      <section style={S.section("5rem","5rem")}>
        <div style={S.inner(820)}>
          <motion.div {...iv()} style={{ ...S.goldCard, padding: "3.5rem 2.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,162,39,0.07) 0%,transparent 70%)" }} />
            <div style={{ position: "absolute", bottom: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,162,39,0.05) 0%,transparent 70%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={S.label}>Don&apos;t Miss Out</span>
              <h2 style={{ ...S.h2, marginBottom: "1rem" }}>Secure Your Seat Today</h2>
              <p style={{ ...S.p, maxWidth: 500, margin: "0 auto 2.25rem" }}>
                Limited seats available at Avasa Hotel, Madhapur. Register now and be part of this landmark decennial celebration.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link href="/register">
                  <button className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.95rem 2.5rem" }}>Register & Pay Online <ArrowRight size={17} /></button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
