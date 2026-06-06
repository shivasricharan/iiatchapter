"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, MapPin, Download, Home } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    transactionId: "",
    amount: "",
  });

  useEffect(() => {
    setDetails({
      name: searchParams.get("name") || "Participant",
      email: searchParams.get("email") || "",
      transactionId: searchParams.get("txnId") || "",
      amount: searchParams.get("amount") || "",
    });
  }, [searchParams]);

  return (
    <main className="min-h-screen pt-24 pb-16 px-6" style={{ background: "#0d0d0d", color: "#f5f5f0" }}>
      <Navbar />
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.7 }}
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: "rgba(34,197,94,0.1)", border: "2px solid rgba(34,197,94,0.4)" }}
        >
          <CheckCircle className="w-12 h-12" style={{ color: "#22c55e" }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm mb-2" style={{ color: "#c9a227" }}>
            Registration Confirmed
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            You&apos;re Registered!
          </h1>
          <p className="text-base mb-2" style={{ color: "rgba(245,245,240,0.7)" }}>
            Welcome, <strong>{details.name}</strong>!
          </p>
          <p className="text-sm mb-8" style={{ color: "rgba(245,245,240,0.5)" }}>
            A confirmation email has been sent to <strong>{details.email}</strong>
          </p>

          <div className="glass gold-border rounded-2xl p-6 mb-8 text-left space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#c9a227" }}>
              Booking Summary
            </h3>
            {[
              { label: "Event", value: "Telangana Architecture Festival 2026" },
              { label: "Date", value: "12th June 2026, Friday" },
              { label: "Time", value: "5:00 PM Onwards" },
              { label: "Venue", value: "Hyderabad, Telangana" },
              ...(details.transactionId ? [{ label: "Transaction ID", value: details.transactionId }] : []),
              ...(details.amount ? [{ label: "Amount Paid", value: `₹${parseInt(details.amount).toLocaleString("en-IN")}` }] : []),
            ].map((item) => (
              <div key={item.label} className="flex justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-sm" style={{ color: "rgba(245,245,240,0.5)" }}>{item.label}</span>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button
                className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-white/5"
                style={{ border: "1px solid rgba(201,162,39,0.3)", color: "#c9a227" }}
              >
                <Home className="w-4 h-4" /> Back to Home
              </button>
            </Link>
          </div>

          <div className="mt-10 p-4 rounded-xl text-sm" style={{ background: "rgba(201,162,39,0.06)", border: "1px solid rgba(201,162,39,0.15)" }}>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#c9a227" }} />
              <div className="text-left">
                <p className="font-semibold mb-1">See you on June 12!</p>
                <p style={{ color: "rgba(245,245,240,0.55)" }}>
                  Please carry a printed or digital copy of your confirmation email to the venue.
                  Doors open at 5:00 PM.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0d0d0d" }}>
        <div style={{ color: "#c9a227" }}>Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
