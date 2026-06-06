"use client";

import Link from "next/link";
import { motion, type Variants, type Easing } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  ArrowRight,
  Music,
  Star,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as Easing },
  }),
};

const highlights = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Awards Ceremony",
    desc: "Recognising excellence in architecture and design across Telangana",
  },
  {
    icon: <Music className="w-7 h-7" />,
    title: "Cultural Evening",
    desc: "A vibrant celebration of art, culture, and architectural heritage",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Networking",
    desc: "Connect with 1000+ architects, designers, and industry leaders",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Felicitations",
    desc: "Honouring distinguished members and lifetime achievers",
  },
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
    <main className="min-h-screen" style={{ background: "#0d0d0d", color: "#f5f5f0" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: "radial-gradient(circle, #c9a227, transparent)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8"
            style={{ background: "radial-gradient(circle, #c9a227, transparent)" }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#c9a227" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center glow-animation"
              style={{
                background: "rgba(201, 162, 39, 0.1)",
                border: "2px solid rgba(201, 162, 39, 0.5)",
              }}
            >
              <div className="text-center">
                <div className="text-xs font-bold leading-tight" style={{ color: "#c9a227" }}>
                  IIA<br/>TELANGANA<br/>CHAPTER
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="uppercase tracking-[0.4em] text-sm mb-4"
            style={{ color: "#c9a227" }}
          >
            Indian Institute of Architects · Telangana Chapter
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Telangana
            <br />
            <span className="gold-gradient">Architects</span>
            <br />
            Festival
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="h-px w-16" style={{ background: "rgba(201, 162, 39, 0.5)" }} />
            <span className="text-xl tracking-widest font-light" style={{ color: "rgba(245, 208, 110, 0.9)" }}>
              2 0 2 6
            </span>
            <div className="h-px w-16" style={{ background: "rgba(201, 162, 39, 0.5)" }} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-base"
            style={{ color: "rgba(245, 245, 240, 0.75)" }}
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: "#c9a227" }} />
              12th June 2026 · Friday
            </span>
            <span className="hidden sm:block opacity-30">|</span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" style={{ color: "#c9a227" }} />
              5:00 PM Onwards
            </span>
            <span className="hidden sm:block opacity-30">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" style={{ color: "#c9a227" }} />
              Hyderabad, Telangana
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/register">
              <button className="btn-gold px-10 py-4 rounded-full text-base font-bold flex items-center gap-2 mx-auto sm:mx-0">
                Register Now <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <a href="#about">
              <button
                className="px-10 py-4 rounded-full text-base font-semibold border transition-all duration-300 hover:bg-white/5"
                style={{ border: "1px solid rgba(201, 162, 39, 0.4)", color: "#c9a227" }}
              >
                Learn More
              </button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-16"
          >
            <CountdownTimer targetDate="2026-06-12T17:00:00" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest opacity-40 uppercase">Scroll</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(201, 162, 39, 0.6), transparent)" }} />
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-sm mb-3" style={{ color: "#c9a227" }}>
              About The Festival
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              A Grand Celebration of <span className="gold-gradient">Architecture</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: "rgba(245, 245, 240, 0.7)" }}>
              The Telangana Architects Festival (TAF) is a flagship annual event by the Indian
              Institute of Architects, Telangana Chapter — bringing together the architectural
              fraternity for an evening of awards, cultural performances, felicitations, and
              networking. Join over a thousand architects and design professionals for a night
              that celebrates excellence and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass gold-border rounded-2xl p-6 text-center hover:border-yellow-500/40 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(201, 162, 39, 0.1)", color: "#c9a227" }}
                >
                  {h.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245, 245, 240, 0.6)" }}>
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Schedule Section */}
      <section id="schedule" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-sm mb-3" style={{ color: "#c9a227" }}>
              Programme
            </p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              Evening Schedule
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-24 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "rgba(201, 162, 39, 0.2)" }}
            />
            <div className="space-y-6">
              {schedule.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-6 md:gap-10"
                >
                  <span className="text-sm font-mono font-medium w-20 shrink-0 text-right" style={{ color: "#c9a227" }}>
                    {item.time}
                  </span>
                  <div className="relative hidden md:block">
                    <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: "#c9a227", background: "#0d0d0d" }} />
                  </div>
                  <div className="glass gold-border rounded-xl px-6 py-4 flex-1">
                    <p className="font-semibold">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-sm mb-3" style={{ color: "#c9a227" }}>
              Registration Fee
            </p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              Choose Your Pass
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative rounded-3xl p-8 text-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(201, 162, 39, 0.15), rgba(245, 208, 110, 0.08))",
                border: "1px solid rgba(201, 162, 39, 0.5)",
              }}
            >
              <div
                className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-semibold"
                style={{ background: "#c9a227", color: "#0d0d0d" }}
              >
                Member Benefit
              </div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(201, 162, 39, 0.15)" }}>
                <Award className="w-8 h-8" style={{ color: "#c9a227" }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                IIA Telangana Member
              </h3>
              <p className="text-sm mb-6" style={{ color: "rgba(245, 245, 240, 0.6)" }}>
                Exclusive rate for IIA Telangana Chapter members
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold gold-gradient">₹500</span>
                <span className="text-sm ml-2" style={{ color: "rgba(245, 245, 240, 0.5)" }}>per person</span>
              </div>
              <ul className="text-sm space-y-2 mb-8 text-left" style={{ color: "rgba(245, 245, 240, 0.7)" }}>
                <li className="flex items-center gap-2"><span style={{ color: "#c9a227" }}>✓</span> Valid IIA Membership required</li>
                <li className="flex items-center gap-2"><span style={{ color: "#c9a227" }}>✓</span> Membership number verified</li>
                <li className="flex items-center gap-2"><span style={{ color: "#c9a227" }}>✓</span> Full event access</li>
                <li className="flex items-center gap-2"><span style={{ color: "#c9a227" }}>✓</span> Gala Dinner included</li>
              </ul>
              <Link href="/register?type=member">
                <button className="btn-gold w-full py-3 rounded-xl font-semibold">Register as Member</button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass gold-border rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(255,255,255,0.06)" }}>
                <Users className="w-8 h-8" style={{ color: "rgba(245, 245, 240, 0.7)" }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                Non-Member / Other Chapter
              </h3>
              <p className="text-sm mb-6" style={{ color: "rgba(245, 245, 240, 0.6)" }}>
                Open to all architects and design professionals
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: "#f5f5f0" }}>₹3,000</span>
                <span className="text-sm ml-2" style={{ color: "rgba(245, 245, 240, 0.5)" }}>per person</span>
              </div>
              <ul className="text-sm space-y-2 mb-8 text-left" style={{ color: "rgba(245, 245, 240, 0.7)" }}>
                <li className="flex items-center gap-2"><span style={{ color: "#c9a227" }}>✓</span> Other IIA chapter members</li>
                <li className="flex items-center gap-2"><span style={{ color: "#c9a227" }}>✓</span> Non-IIA architects welcome</li>
                <li className="flex items-center gap-2"><span style={{ color: "#c9a227" }}>✓</span> Full event access</li>
                <li className="flex items-center gap-2"><span style={{ color: "#c9a227" }}>✓</span> Gala Dinner included</li>
              </ul>
              <Link href="/register?type=non-member">
                <button
                  className="w-full py-3 rounded-xl font-semibold border transition-all duration-300 hover:bg-white/5"
                  style={{ border: "1px solid rgba(201, 162, 39, 0.4)", color: "#c9a227" }}
                >
                  Register Now
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass gold-border rounded-3xl p-12 md:p-16"
          >
            <p className="uppercase tracking-[0.3em] text-sm mb-4" style={{ color: "#c9a227" }}>
              Don&apos;t Miss Out
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Secure Your Seat Today
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(245, 245, 240, 0.65)" }}>
              Limited seats available. Register now and be part of this landmark event for the
              architectural community of Telangana.
            </p>
            <Link href="/register">
              <button className="btn-gold px-12 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3">
                Register Now <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
