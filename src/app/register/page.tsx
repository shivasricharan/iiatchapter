"use client";

import { useState, useEffect, useCallback, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2, ArrowLeft, User, Mail, Phone, Building2, Upload } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MemberType = "iia-telangana" | "other-chapter" | "non-member";

const DESIGNATIONS = [
  "Architect",
  "Interior Designer",
  "Student",
  "Builder / Developer",
  "Engineer",
  "Consultant",
  "Government Official",
  "Vendor / Supplier",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  memberType: MemberType;
  membershipNumber: string;
  city: string;
  state: string;
  designation: string;
}

interface MemberVerification {
  status: "idle" | "verifying" | "valid" | "invalid";
  memberName?: string;
  message?: string;
}

interface ScreenshotState {
  file: File | null;
  url: string;
  uploading: boolean;
  error: string;
}

const CLOUDINARY_CLOUD = "drzt7irdt";
const CLOUDINARY_PRESET = "iiatchapter";

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
    state: "",
    designation: "",
  });

  const [verification, setVerification] = useState<MemberVerification>({ status: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<"form" | "review" | "payment">("form");
  const [screenshot, setScreenshot] = useState<ScreenshotState>({ file: null, url: "", uploading: false, error: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const memberPrice = 500;
  const iiaOtherPrice = 3000;
  const nonMemberPrice = 5000;

  const getPrice = () => {
    if (form.memberType === "iia-telangana") return memberPrice;
    if (form.memberType === "other-chapter") return iiaOtherPrice;
    return nonMemberPrice;
  };

  const verifyMember = useCallback(async (memberNumber: string) => {
    if (!memberNumber.trim()) { setVerification({ status: "idle" }); return; }
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
    if (form.memberType !== "iia-telangana") { setVerification({ status: "idle" }); return; }
    const timeout = setTimeout(() => {
      if (form.membershipNumber.length >= 5) verifyMember(form.membershipNumber);
    }, 600);
    return () => clearTimeout(timeout);
  }, [form.membershipNumber, form.memberType, verifyMember]);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    if (!form.name || !form.email || !form.phone || !form.state || !form.designation) return false;
    if (form.memberType === "iia-telangana") return verification.status === "valid";
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;
    setStep("review");
  };

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", CLOUDINARY_PRESET);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, {
      method: "POST",
      body: fd,
    });
    if (!res.ok) throw new Error("Upload failed");
    const data = await res.json();
    return data.secure_url as string;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setScreenshot({ file, url: "", uploading: true, error: "" });
    try {
      const url = await uploadToCloudinary(file);
      setScreenshot({ file, url, uploading: false, error: "" });
    } catch {
      setScreenshot({ file: null, url: "", uploading: false, error: "Upload failed. Please try again." });
    }
  };

  const handleFinalSubmit = async () => {
    if (!screenshot.url || submitting || submitted) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          designation: form.designation,
          organization: form.organization,
          city: form.city,
          state: form.state,
          memberType: form.memberType,
          membershipNumber: form.membershipNumber,
          memberName: verification.memberName,
          amount: getPrice(),
          screenshotUrl: screenshot.url,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setSubmitting(false);
      } else {
        alert("Submission failed. Please try again.");
        setSubmitting(false);
      }
    } catch {
      alert("Submission failed. Please try again.");
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 outline-none";
  const inputStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,162,39,0.2)", color: "#f5f5f0" };
  const inputFocusStyle = { boxShadow: "0 0 0 1px rgba(201,162,39,0.5)" };

  return (
    <main className="min-h-screen pt-24 pb-16 px-6" style={{ background: "#0f2060", color: "#f5f5f0" }}>
      <Navbar />
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-yellow-400 transition-colors" style={{ color: "rgba(245,245,240,0.5)" }}>
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.3em] text-sm mb-2" style={{ color: "#c9a227" }}>Telangana Architecture Festival 2026</p>
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Event Registration</h1>
            <p className="mt-2 text-sm" style={{ color: "rgba(245,245,240,0.5)" }}>12th June 2026 · Hyderabad, Telangana</p>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {["Details", "Review", "Payment"].map((s, i) => {
              const isActive = (step === "form" && i === 0) || (step === "review" && i === 1) || (step === "payment" && i === 2);
              const isDone = (step === "review" && i === 0) || (step === "payment" && i <= 1);
              return (
                <div key={s} className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: isDone ? "#c9a227" : isActive ? "rgba(201,162,39,0.2)" : "rgba(255,255,255,0.05)", border: isActive || isDone ? "1px solid #c9a227" : "1px solid rgba(255,255,255,0.1)", color: isDone ? "#0f2060" : isActive ? "#c9a227" : "rgba(245,245,240,0.4)" }}>
                      {isDone ? "✓" : i + 1}
                    </div>
                    <span className="text-xs" style={{ color: isActive ? "#c9a227" : "rgba(245,245,240,0.4)" }}>{s}</span>
                  </div>
                  {i < 2 && <div className="w-8 h-px mx-1" style={{ background: "rgba(201,162,39,0.2)" }} />}
                </div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {/* ── Step 1: Details ── */}
            {step === "form" && (
              <motion.div key="form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Membership Category */}
                  <div className="glass gold-border rounded-2xl p-6">
                    <label className="text-xs uppercase tracking-widest mb-4 block" style={{ color: "#c9a227" }}>Membership Category</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { value: "iia-telangana", label: "IIA Telangana Member" },
                        { value: "other-chapter", label: "IIA Member" },
                        { value: "non-member", label: "Non-Member" },
                      ].map((opt) => (
                        <button key={opt.value} type="button" onClick={() => handleChange("memberType", opt.value)}
                          className="p-4 rounded-xl text-left transition-all duration-200"
                          style={{ background: form.memberType === opt.value ? "rgba(201,162,39,0.15)" : "rgba(255,255,255,0.04)", border: form.memberType === opt.value ? "1px solid rgba(201,162,39,0.6)" : "1px solid rgba(255,255,255,0.08)" }}>
                          <div className="text-sm font-semibold">{opt.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Membership Number */}
                  <AnimatePresence>
                    {form.memberType === "iia-telangana" && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="glass gold-border rounded-2xl p-6 overflow-hidden">
                        <label className="text-xs uppercase tracking-widest mb-3 block" style={{ color: "#c9a227" }}>IIA Membership Number</label>
                        <div className="relative">
                          <input type="text" placeholder="e.g. A30656 or F30492" value={form.membershipNumber}
                            onChange={(e) => handleChange("membershipNumber", e.target.value.toUpperCase())}
                            className={inputClass} style={{ ...inputStyle, paddingRight: "3rem" }}
                            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                            onBlur={(e) => Object.assign(e.target.style, { boxShadow: "none" })} />
                          <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            {verification.status === "verifying" && <Loader2 className="w-4 h-4 animate-spin" style={{ color: "#c9a227" }} />}
                            {verification.status === "valid" && <CheckCircle className="w-4 h-4" style={{ color: "#22c55e" }} />}
                            {verification.status === "invalid" && <AlertCircle className="w-4 h-4" style={{ color: "#ef4444" }} />}
                          </div>
                        </div>
                        <AnimatePresence>
                          {verification.status === "valid" && (
                            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-3 p-3 rounded-xl text-sm"
                              style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}>
                              ✓ Verified: <strong>{verification.memberName}</strong> · Member rate ₹500 applied
                            </motion.div>
                          )}
                          {verification.status === "invalid" && (
                            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-3 p-3 rounded-xl text-sm"
                              style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#ef4444" }}>
                              ✗ {verification.message || "Membership number not found"}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Personal Details */}
                  <div className="glass gold-border rounded-2xl p-6 space-y-4">
                    <label className="text-xs uppercase tracking-widest block" style={{ color: "#c9a227" }}>Personal Details</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(201,162,39,0.5)" }} />
                      <input type="text" placeholder="Full Name *" value={form.name} onChange={(e) => handleChange("name", e.target.value)} required className={inputClass} style={{ ...inputStyle, paddingLeft: "2.75rem" }} onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", ...inputFocusStyle })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", boxShadow: "none" })} />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(201,162,39,0.5)" }} />
                      <input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => handleChange("email", e.target.value)} required className={inputClass} style={{ ...inputStyle, paddingLeft: "2.75rem" }} onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", ...inputFocusStyle })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", boxShadow: "none" })} />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(201,162,39,0.5)" }} />
                      <input type="tel" placeholder="Mobile Number *" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} required className={inputClass} style={{ ...inputStyle, paddingLeft: "2.75rem" }} onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", ...inputFocusStyle })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", boxShadow: "none" })} />
                    </div>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(201,162,39,0.5)" }} />
                      <input type="text" placeholder="Firm / Organization" value={form.organization} onChange={(e) => handleChange("organization", e.target.value)} className={inputClass} style={{ ...inputStyle, paddingLeft: "2.75rem" }} onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", ...inputFocusStyle })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, paddingLeft: "2.75rem", boxShadow: "none" })} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="City *" value={form.city} onChange={(e) => handleChange("city", e.target.value)} required className={inputClass} style={inputStyle} onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, ...inputFocusStyle })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, boxShadow: "none" })} />
                      <input type="text" placeholder="State *" value={form.state} onChange={(e) => handleChange("state", e.target.value)} required className={inputClass} style={inputStyle} onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, ...inputFocusStyle })} onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, boxShadow: "none" })} />
                    </div>
                    <select
                      value={form.designation}
                      onChange={(e) => handleChange("designation", e.target.value)}
                      required
                      className={inputClass}
                      style={{ ...inputStyle, appearance: "none", cursor: "pointer", color: form.designation ? "#f5f5f0" : "rgba(245,245,240,0.35)" }}
                      onFocus={(e) => Object.assign(e.target.style, { ...inputStyle, appearance: "none", cursor: "pointer", color: form.designation ? "#f5f5f0" : "rgba(245,245,240,0.35)", ...inputFocusStyle })}
                      onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, appearance: "none", cursor: "pointer", color: form.designation ? "#f5f5f0" : "rgba(245,245,240,0.35)", boxShadow: "none" })}
                    >
                      <option value="" disabled style={{ background: "#0f2060" }}>Designation *</option>
                      {DESIGNATIONS.map((d) => (
                        <option key={d} value={d} style={{ background: "#0f2060", color: "#f5f5f0" }}>{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Summary */}
                  <div className="rounded-2xl p-5 flex items-center justify-between" style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.25)" }}>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(245,245,240,0.5)" }}>Registration Fee</p>
                      <p className="text-sm font-medium">
                        {form.memberType === "iia-telangana" && verification.status === "valid" ? "IIA Telangana Member Rate" : form.memberType === "iia-telangana" ? "Pending verification" : form.memberType === "other-chapter" ? "IIA Member Rate" : "Non-Member Rate"}
                      </p>
                    </div>
                    <p className="text-3xl font-bold gold-gradient">₹{getPrice().toLocaleString("en-IN")}</p>
                  </div>

                  <button type="submit" disabled={!isFormValid()}
                    className="btn-gold w-full py-4 rounded-xl font-bold text-base disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={!isFormValid() ? { background: "rgba(201,162,39,0.3)", color: "rgba(0,0,0,0.5)" } : {}}>
                    Proceed to Review
                  </button>
                </form>
              </motion.div>
            )}

            {/* ── Step 2: Review ── */}
            {step === "review" && (
              <motion.div key="review" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="glass gold-border rounded-2xl p-8 space-y-6">
                <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Review Your Details</h2>
                <div className="space-y-4">
                  {[
                    { label: "Name", value: form.name },
                    { label: "Email", value: form.email },
                    { label: "Phone", value: form.phone },
                    { label: "Designation", value: form.designation },
                    { label: "Organization", value: form.organization || "—" },
                    { label: "City", value: form.city },
                    { label: "State", value: form.state },
                    { label: "Category", value: form.memberType === "iia-telangana" ? "IIA Telangana Chapter Member" : form.memberType === "other-chapter" ? "Other IIA Chapter Member" : "Non-Member" },
                    ...(form.memberType === "iia-telangana" ? [{ label: "Membership No.", value: form.membershipNumber }, { label: "Verified Name", value: verification.memberName || "—" }] : []),
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="text-sm" style={{ color: "rgba(245,245,240,0.5)" }}>{item.label}</span>
                      <span className="text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-5 flex items-center justify-between" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.3)" }}>
                  <span className="font-semibold">Total Amount</span>
                  <span className="text-3xl font-bold gold-gradient">₹{getPrice().toLocaleString("en-IN")}</span>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep("form")} className="flex-1 py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-white/5" style={{ border: "1px solid rgba(201,162,39,0.3)", color: "#c9a227" }}>
                    Edit Details
                  </button>
                  <button onClick={() => setStep("payment")} className="btn-gold flex-1 py-3 rounded-xl font-bold text-sm">
                    Proceed to Pay
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── Step 3: Payment + Screenshot ── */}
            {step === "payment" && (
              <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-5">
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Complete Payment</h2>
                  <p className="text-sm" style={{ color: "rgba(245,245,240,0.5)" }}>Scan the QR code, pay the exact amount, then upload your screenshot</p>
                </div>

                {/* Amount banner */}
                <div className="rounded-2xl p-5 text-center" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.4)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(245,245,240,0.5)" }}>Pay Exactly</p>
                  <p className="text-5xl font-bold" style={{ color: "#c9a227" }}>₹{getPrice().toLocaleString("en-IN")}</p>
                  <p className="text-xs mt-2" style={{ color: "rgba(245,245,240,0.4)" }}>IIA Telangana Chapter · TAF 2026</p>
                </div>

                {/* QR Code */}
                <div className="glass gold-border rounded-2xl p-6 text-center">
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#c9a227" }}>Scan &amp; Pay via Any UPI App</p>
                  <div className="flex justify-center mb-3">
                    <img src="/bharatqr.png" alt="BharatQR" style={{ width: 190, height: 190, imageRendering: "crisp-edges" }} />
                  </div>
                  <p className="text-xs" style={{ color: "rgba(245,245,240,0.4)" }}>Google Pay · PhonePe · Paytm · BHIM · Any UPI app</p>
                </div>

                {/* Screenshot Upload */}
                <div className="glass gold-border rounded-2xl p-6 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#c9a227" }}>Upload Payment Screenshot *</p>
                    <p className="text-sm" style={{ color: "rgba(245,245,240,0.5)" }}>After paying, take a screenshot from your UPI app and upload it here to confirm your registration.</p>
                  </div>

                  {!screenshot.url ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="rounded-xl cursor-pointer transition-all flex flex-col items-center justify-center gap-3 py-10"
                      style={{ border: "2px dashed rgba(201,162,39,0.3)", background: "rgba(201,162,39,0.04)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.6)"; (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.08)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.04)"; }}
                    >
                      {screenshot.uploading ? (
                        <>
                          <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#c9a227" }} />
                          <p className="text-sm" style={{ color: "rgba(245,245,240,0.5)" }}>Uploading screenshot…</p>
                        </>
                      ) : (
                        <>
                          <Upload className="w-8 h-8" style={{ color: "rgba(201,162,39,0.6)" }} />
                          <p className="text-sm font-medium">Click to upload screenshot</p>
                          <p className="text-xs" style={{ color: "rgba(245,245,240,0.35)" }}>JPG, PNG, or WEBP · Max 10 MB</p>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(34,197,94,0.4)" }}>
                      <img src={screenshot.url} alt="Payment screenshot" style={{ width: "100%", maxHeight: 280, objectFit: "contain", background: "rgba(0,0,0,0.3)" }} />
                      <div className="p-3 flex items-center justify-between" style={{ background: "rgba(34,197,94,0.08)" }}>
                        <span className="text-sm flex items-center gap-2" style={{ color: "#22c55e" }}>
                          <CheckCircle className="w-4 h-4" /> Screenshot uploaded
                        </span>
                        <button onClick={() => { setScreenshot({ file: null, url: "", uploading: false, error: "" }); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                          className="text-xs underline" style={{ color: "rgba(245,245,240,0.4)" }}>
                          Change
                        </button>
                      </div>
                    </div>
                  )}

                  {screenshot.error && (
                    <p className="text-sm" style={{ color: "#ef4444" }}>✗ {screenshot.error}</p>
                  )}

                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setStep("review")} className="py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-white/5 px-6" style={{ border: "1px solid rgba(201,162,39,0.3)", color: "#c9a227" }}>
                    Back
                  </button>
                </div>

                <button
                  onClick={handleFinalSubmit}
                  disabled={!screenshot.url || submitting || submitted}
                  className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  style={{
                    background: screenshot.url && !submitting && !submitted ? "linear-gradient(135deg,#c9a227,#e8c547)" : "rgba(201,162,39,0.3)",
                    color: screenshot.url && !submitting && !submitted ? "#0f2060" : "rgba(0,0,0,0.4)",
                    fontSize: "1rem",
                    letterSpacing: "0.02em",
                    boxShadow: screenshot.url && !submitting && !submitted ? "0 4px 24px rgba(201,162,39,0.35)" : "none",
                  }}
                >
                  {submitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Submitting…</>
                  ) : submitted ? (
                    <><CheckCircle className="w-5 h-5" /> Registration Submitted</>
                  ) : (
                    <><CheckCircle className="w-5 h-5" /> Submit to Complete Registration</>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: "rgba(245,245,240,0.3)" }}>
                  Your screenshot is stored securely. Our team will verify payment within 24 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Thank You Overlay ── */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              style={{ background: "#0f2060", border: "1px solid rgba(201,162,39,0.4)", borderRadius: "1.5rem", padding: "3rem 2.5rem", maxWidth: 500, width: "100%", textAlign: "center" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "2px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}
              >
                <CheckCircle style={{ width: 40, height: 40, color: "#22c55e" }} />
              </motion.div>

              <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a227", marginBottom: "0.75rem" }}>Registration Complete</p>
              <h2 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "1.75rem", fontWeight: 700, marginBottom: "1rem" }}>
                Thank You, {form.name.split(" ")[0]}!
              </h2>
              <p style={{ color: "rgba(245,245,240,0.7)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "0.75rem" }}>
                Your registration for <strong style={{ color: "#c9a227" }}>Telangana Architecture Festival 2026</strong> is received.
              </p>
              <p style={{ color: "rgba(245,245,240,0.55)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                A confirmation email has been sent to <strong>{form.email}</strong>.<br />
                Our team will verify your payment within 24 hours.
              </p>

              <div style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.2)", borderRadius: "0.875rem", padding: "1rem 1.25rem", marginBottom: "2rem", textAlign: "left" }}>
                {[
                  ["Event", "Telangana Architecture Festival 2026"],
                  ["Date", "12th June 2026, Friday"],
                  ["Venue", "Avasa Hotel, Madhapur, Hyderabad"],
                  ["Amount", `₹${getPrice().toLocaleString("en-IN")}`],
                ].map(([l, v]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "0.4rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "0.85rem" }}>
                    <span style={{ color: "rgba(245,245,240,0.5)" }}>{l}</span>
                    <span style={{ fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => { window.location.href = `/register/success?name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}&amount=${getPrice()}`; }}
                className="btn-gold w-full py-3 rounded-xl font-bold text-sm"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
