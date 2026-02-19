import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import logo1 from "@/assets/logo1.jpeg";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "THE ULTIMATE COMPUTER SCIENCE FEST";
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setText(fullText.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(cursor);
  }, []);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Red radial glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-glow-pulse"
          style={{
            background:
              "radial-gradient(circle, hsl(0 85% 45% / 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none z-0"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(0 85% 45% / 0.4), transparent)",
          animation: "scan-line 6s linear infinite",
        }}
      />

      {/* YUGA Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src={logo1}
          alt=""
          className="w-[400px] md:w-[600px] opacity-[0.1] select-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* <div className="mb-6 animate-fade-in">
          <span className="yuga-badge text-base px-5 py-2">
            CSE Department Presents
          </span>
        </div> */}

        {/* Logo */}
        {/* <div className="flex justify-center mb-6 animate-float">
          <img
            src={logo1}
            alt="YUGA 2K26"
            className="w-48 md:w-64 lg:w-72 object-contain"
            style={{
              filter: "drop-shadow(0 0 30px hsl(0 85% 45% / 0.6)) drop-shadow(0 0 60px hsl(0 85% 45% / 0.3))",
            }}
          />
        </div> */}

        <h1
          className="yuga-heading text-6xl md:text-8xl lg:text-9xl mb-2 tracking-widest"
          style={{
            background: "linear-gradient(180deg, #fff 40%, hsl(0 85% 45%) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 30px hsl(0 85% 45% / 0.5))",
          }}
        >
          YUGA
        </h1>
        <h2
          className="yuga-heading text-4xl md:text-6xl lg:text-7xl mb-6 yuga-glow-text tracking-[0.3em]"
        >
          2K26
        </h2>

        <div className="h-12 flex items-center justify-center mb-8">
          <p className="font-mono text-sm md:text-base text-muted-foreground tracking-[0.2em] uppercase">
            {text}
            <span className={`ml-1 text-yuga-red ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
          </p>
        </div>

        <p className="font-rajdhani text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Where <span className="text-yuga-red font-semibold">Innovation</span> meets{" "}
          <span className="text-yuga-red font-semibold">Celebration</span>. Dive into the
          biggest coding extravaganza — compete, collaborate, and conquer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <button className="yuga-btn-primary animate-pulse-red relative overflow-hidden group">
            <span className="relative z-10">Register Starting Soon</span>
            <span
              className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded transition-transform duration-500 origin-center"
            />
          </button> */}
          <button
            className="yuga-btn-outline"
            onClick={() => document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Events
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { label: "Events", val: "10+" },
            { label: "Participants", val: "200+" },
            { label: "Years of Legacy", val: "12+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="yuga-heading text-2xl md:text-3xl yuga-glow-text">{s.val}</div>
              <div className="font-rajdhani text-xs tracking-widest text-muted-foreground uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-yuga-red transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
