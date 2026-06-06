"use client";

import { useEffect, useState } from "react";

interface T { days: number; hours: number; minutes: number; seconds: number; }

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [t, setT] = useState<T>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) { setT({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setT({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "Days",    v: t.days },
    { label: "Hours",   v: t.hours },
    { label: "Minutes", v: t.minutes },
    { label: "Seconds", v: t.seconds },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,237,230,0.35)", marginBottom: "1.25rem" }}>
        Event begins in
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
        {units.map((u, i) => (
          <div key={u.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 72, height: 72,
                borderRadius: "0.875rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,162,39,0.22)",
                display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(8px)",
              }}>
                <span style={{ fontSize: "1.75rem", fontWeight: 700, fontVariantNumeric: "tabular-nums", color: "#c9a227" }}>
                  {String(u.v).padStart(2, "0")}
                </span>
              </div>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,230,0.35)", marginTop: "0.5rem" }}>
                {u.label}
              </p>
            </div>
            {i < 3 && (
              <span style={{ fontSize: "1.5rem", fontWeight: 300, color: "rgba(201,162,39,0.35)", paddingBottom: "1.5rem" }}>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
