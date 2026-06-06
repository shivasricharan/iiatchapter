"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2, ArrowLeft, User, Mail, Phone, Building2, CreditCard } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MemberType = "iia-telangana" | "other-chapter" | "non-member";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  memberType: MemberType;
  membershipNumber: string;
  city: string;
}

interface MemberVerification {
  status: "idle" | "verifying" | "valid" | "invalid";
  memberName?: string;
  message?: string;
}

function RegisterContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") === "member" ? "iia-telangana" : "non-member";

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    memberType: initialType,
    membershipNumber: "",
    city: "",
  });

  const [verification, setVerification] = useState<MemberVerification>({ status: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState<"form" | "review" | "payment">("form");

  const memberPrice = 500;
  const nonMemberPrice = 5000;

  const getPrice = () => {
    if (form.memberType === "iia-telangana") {
      return memberPrice;
    }
    return nonMemberPrice;
  };

  const verifyMember = useCallback(async (memberNumber: string) => {
    if (!memberNumber.trim()) {
      setVerification({ status: "idle" });
      return;
    }
    setVerification({ status: "verifying" });
    try {
      const res = await fetch("/api/verify-member", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ membershipNumber: memberNumber.trim().toUpperCase() }),
      });
      const data = await res.json();
      if (data.valid) {
        setVerification({ status: "valid", memberName: data.memberName, message: data.message });
      } else {
        setVerification({ status: "invalid", message: data.message });
      }
    } catch {
      setVerification({ status: "invalid", message: "Verification failed. Please try again." });
    }
  }, []);

  useEffect(() => {
    if (form.memberType !== "iia-telangana") {
      setVerification({ status: "idle" });
      return;
    }
    const timeout = setTimeout(() => {
      if (form.membershipNumber.length >= 5) {
        verifyMember(form.membershipNumber);
      }
    }, 600);
    return () => clearTimeout(timeout);
  }, [form.membershipNumber, form.memberType, verifyMember]);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    if (!form.name || !form.email || !form.phone) return false;
    if (form.memberType === "iia-telangana") {
      return verification.status === "valid";
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;
    setStep("review");
  };

  const handlePayment = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          amount: getPrice(),
          memberVerified: verification.status === "valid",
          memberName: verification.memberName,
        }),
      });
      const data = await res.json();
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else if (data.error) {
        alert(data.error);
        setSubmitting(false);
      }
    } catch {
      alert("Payment initiation failed. Please try again.");
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 outline-none focus:ring-1";
  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(201, 162, 39, 0.2)",
    color: "#f5f5f0",
  };
  const inputFocusStyle = { boxShadow: "0 0 0 1px rgba(201,162,39,0.5)" };

  return (
    <main className="min-h-screen pt-24 pb-16 px-6" style={{ background: "#0f2060", color: "#f5f5f0" }}>
      <Navbar />
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-yellow-400 transition-colors" style={{ color: "rgba(245,245,240,0.5)" }}>
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.3em] text-sm mb-2" style={{ color: "#c9a227" }}>
              Telangana Architecture Festival 2026
            </p>
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              Event Registration
            </h1>
            <p className="mt-2 text-sm" style={{ color: "rgba(245,245,240,0.5)" }}>
              12th June 2026 · Hyderabad, Telangana
            </p>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {["Details", "Review", "Payment"].map((s, i) => {
              const isActive = (step === "form" && i === 0) || (step === "review" && i === 1) || (step === "payment" && i === 2);
              const isDone = (step === "review" && i === 0) || (step === "payment" && i <= 1);
              return (
                <div key={s} className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: isDone ? "#c9a227" : isActive ? "rgba(201,162,39,0.2)" : "rgba(255,255,255,0.05)",
                        border: isActive || isDone ? "1px solid #c9a227" : "1px solid rgba(255,255,255,0.1)",
                        color: isDone ? "#0f2060" : isActive ? "#c9a227" : "rgba(245,245,240,0.4)",
                      }}
                    >
                      {isDone ? "✓" : i + 1}
                    </div>
                    <span className="text-xs" style={{ color: isActive ? "#c9a227" : "rgba(245,245,240,0.4)" }}>
                      {s}
                    </span>
                  </div>
                  {i < 2 && <div className="w-8 h-px mx-1" style={{ background: "rgba(201,162,39,0.2)" }} />}
                </div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {step === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Member Type */}
                  <div className="glass gold-border rounded-2xl p-6">
                    <label className="text-xs uppercase tracking-widest mb-4 block" style={{ color: "#c9a227" }}>
                      Membership Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { value: "iia-telangana", label: "IIA Telangana Member" },
                        { value: "other-chapter", label: "Other IIA Chapter" },
                        { value: "non-member", label: "Non-Member" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleChange("memberType", opt.value)}
                          className="p-4 rounded-xl text-left transition-all duration-200"
                          style={{
                            background: form.memberType === opt.value ? "rgba(201,162,39,0.15)" : "rgba(255,255,255,0.04)",
                            border: form.memberType === opt.value ? "1px solid rgba(201,162,39,0.6)" : "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <div className="text-sm font-semibold">{opt.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Membership Number (only for IIA Telangana) */}
                  <AnimatePresence>
                    {form.memberType === "iia-telangana" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="glass gold-border rounded-2xl p-6 overflow-hidden"
                      >
                        <label className="text-xs uppercase tracking-widest mb-3 block" style={{ color: "#c9a227" }}>
                          IIA Membership Number
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="e.g. A30656 or F30492"
                            value={form.membershipNumber}
                            onChange={(e) => handleChange("membershipNumber", e.target.value.toUpperCase())}
                            className={inputClass}
                            style={{ ...inputStyle, paddingRight: "3rem" }}
                            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                            onBlur={(e) => Object.assign(e.target.style, { boxShadow: "none" })}
                          />
                          <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            {verification.status === "verifying" && <Loader2 className="w-4 h-4 animate-spin" style={{ color: "#c9a227" }} />}
                            {verification.status === "valid" && <CheckCircle className="w-4 h-4" style={{ color: "#22c55e" }} />}
                            {verification.status === "invalid" && <AlertCircle className="w-4 h-4" style={{ color: "#ef4444" }} />}
                          </div>
                        </div>
                        <AnimatePresence>
                          {verification.status === "valid" && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-3 p-3 rounded-xl text-sm"
                              style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}
                            >
                              ✓ Verified: <strong>{verification.memberName}</strong> · Member rate ₹500 applied
                            </motion.div>
                          )}
                          {verification.status === "invalid" && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-3 p-3 rounded-xl text-sm"
                              style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#ef4444" }}
                            >
                              ✗ {verification.message || "Membership number not found"}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Personal Details */}
                  <div className="glass gold-border rounded-2xl p-6 space-y-4">
                    <label className="text-xs uppercase tracking-widest block" style={{ color: "#c9a227" }}>
                      Personal Details
                    </label>

                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(201,162,39,0.5)" }} />
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className={inputClass}
                        style={{ ...inputStyle, paddingLeft: "2.75rem" }}
                        onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", ...inputFocusStyle })}
                        onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", boxShadow: "none" })}
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(201,162,39,0.5)" }} />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className={inputClass}
                        style={{ ...inputStyle, paddingLeft: "2.75rem" }}
                        onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", ...inputFocusStyle })}
                        onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", boxShadow: "none" })}
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(201,162,39,0.5)" }} />
                      <input
                        type="tel"
                        placeholder="Mobile Number *"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className={inputClass}
                        style={{ ...inputStyle, paddingLeft: "2.75rem" }}
                        onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", ...inputFocusStyle })}
                        onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", boxShadow: "none" })}
                      />
                    </div>

                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(201,162,39,0.5)" }} />
                      <input
                        type="text"
                        placeholder="Firm / Organization"
                        value={form.organization}
                        onChange={(e) => handleChange("organization", e.target.value)}
                        className={inputClass}
                        style={{ ...inputStyle, paddingLeft: "2.75rem" }}
                        onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", ...inputFocusStyle })}
                        onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", boxShadow: "none" })}
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="City"
                      value={form.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, ...inputFocusStyle })}
                      onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, boxShadow: "none" })}
                    />
                  </div>

                  {/* Price Summary */}
                  <div
                    className="rounded-2xl p-5 flex items-center justify-between"
                    style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.25)" }}
                  >
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(245,245,240,0.5)" }}>
                        Registration Fee
                      </p>
                      <p className="text-sm font-medium">
                        {!form.memberType
                          ? "Select a category above"
                          : form.memberType === "iia-telangana" && verification.status === "valid"
                          ? "IIA Telangana Member Rate"
                          : form.memberType === "iia-telangana"
                          ? "Pending verification"
                          : form.memberType === "other-chapter"
                          ? "Other IIA Chapter Rate"
                          : "Non-Member Rate"}
                      </p>
                    </div>
                    <div className="text-right">
                      {form.memberType ? (
                        <p className="text-3xl font-bold gold-gradient">
                          ₹{getPrice().toLocaleString("en-IN")}
                        </p>
                      ) : (
                        <p className="text-3xl font-bold" style={{ color: "rgba(245,245,240,0.2)" }}>—</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid()}
                    className="btn-gold w-full py-4 rounded-xl font-bold text-base disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={!isFormValid() ? { background: "rgba(201,162,39,0.3)", color: "rgba(0,0,0,0.5)" } : {}}
                  >
                    <CreditCard className="w-5 h-5" />
                    Proceed to Review
                  </button>
                </form>
              </motion.div>
            )}

            {step === "review" && (
              <motion.div
                key="review"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass gold-border rounded-2xl p-8 space-y-6"
              >
                <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Review Your Details
                </h2>

                <div className="space-y-4">
                  {[
                    { label: "Name", value: form.name },
                    { label: "Email", value: form.email },
                    { label: "Phone", value: form.phone },
                    { label: "Organization", value: form.organization || "—" },
                    { label: "City", value: form.city || "—" },
                    {
                      label: "Category",
                      value:
                        form.memberType === "iia-telangana"
                          ? "IIA Telangana Chapter Member"
                          : form.memberType === "other-chapter"
                          ? "Other IIA Chapter Member"
                          : "Non-Member",
                    },
                    ...(form.memberType === "iia-telangana"
                      ? [
                          { label: "Membership No.", value: form.membershipNumber },
                          { label: "Verified Name", value: verification.memberName || "—" },
                        ]
                      : []),
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="text-sm" style={{ color: "rgba(245,245,240,0.5)" }}>{item.label}</span>
                      <span className="text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-xl p-5 flex items-center justify-between"
                  style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.3)" }}
                >
                  <span className="font-semibold">Total Amount</span>
                  <span className="text-3xl font-bold gold-gradient">₹{getPrice().toLocaleString("en-IN")}</span>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep("form")}
                    className="flex-1 py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-white/5"
                    style={{ border: "1px solid rgba(201,162,39,0.3)", color: "#c9a227" }}
                  >
                    Edit Details
                  </button>
                  <button
                    onClick={handlePayment}
                    disabled={submitting}
                    className="btn-gold flex-1 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                  >
                    {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                    Pay ₹{getPrice().toLocaleString("en-IN")}
                  </button>
                </div>

                <p className="text-xs text-center" style={{ color: "rgba(245,245,240,0.35)" }}>
                  Secured by PhonePe Payment Gateway · SSL Encrypted
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0f2060" }}>
        <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#c9a227" }} />
      </div>
    }>
      <RegisterContent />
    </Suspense>
  );
}
