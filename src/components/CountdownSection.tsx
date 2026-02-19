import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

// ✅ Updated Target Date: March 24, 2026
const TARGET_DATE = new Date("2026-03-24T09:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calc = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  const pads = (n: number) => String(n).padStart(2, "0");

  const units = [
    { label: "Days", val: pads(timeLeft.days) },
    { label: "Hours", val: pads(timeLeft.hours) },
    { label: "Minutes", val: pads(timeLeft.minutes) },
    { label: "Seconds", val: pads(timeLeft.seconds) },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, hsl(0 85% 45% / 0.06) 50%, transparent)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Clock style={{ color: "hsl(0 85% 45%)" }} size={28} />
          <p className="yuga-badge text-base px-5 py-2">Event Countdown</p>
          <Clock style={{ color: "hsl(0 85% 45%)" }} size={28} />
        </div>

        <h2 className="yuga-section-title mb-4">
          YUGA <span className="yuga-glow-text">2K26</span> Begins In
        </h2>

        {/* ✅ Updated Date Text */}
        <p className="font-rajdhani text-muted-foreground mb-12 text-lg tracking-wider">
          March 24, 2026 • The countdown is live!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {units.map((u, i) => (
            <div key={u.label} className="flex items-center gap-4 md:gap-8">
              <div className="text-center">
                <div
                  className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-xl mb-3 animate-pulse-red"
                  style={{
                    background: "hsl(0 0% 6%)",
                    border: "1px solid hsl(0 85% 45% / 0.4)",
                  }}
                >
                  <span
                    className="font-orbitron font-black text-4xl md:text-5xl"
                    style={{ color: "hsl(0 85% 45%)" }}
                  >
                    {u.val}
                  </span>
                </div>
                <span className="font-rajdhani text-sm tracking-widest text-muted-foreground uppercase">
                  {u.label}
                </span>
              </div>

              {i < units.length - 1 && (
                <span
                  className="font-orbitron text-3xl font-black mb-4"
                  style={{ color: "hsl(0 85% 45% / 0.5)" }}
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="font-rajdhani text-foreground/60 text-lg">
            The ultimate CS experience begins on March 24. Get ready!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
