"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] mb-4 opacity-50">Event begins in</p>
      <div className="flex items-center justify-center gap-3 md:gap-6">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-3 md:gap-6">
            <div className="text-center">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center glass gold-border"
              >
                <span className="text-2xl md:text-3xl font-bold tabular-nums" style={{ color: "#c9a227" }}>
                  {String(u.value).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs mt-2 uppercase tracking-widest opacity-50">{u.label}</p>
            </div>
            {i < units.length - 1 && (
              <span className="text-2xl font-bold pb-6 opacity-30" style={{ color: "#c9a227" }}>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
