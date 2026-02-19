import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Events", end: 10, suffix: "+" },
  { label: "Participants", end: 200, suffix: "+" },
  { label: "Years of Legacy", end: 12, suffix: "+" },
];

const AboutSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          stats.forEach((s, i) => {
            let current = 0;
            const step = Math.ceil(s.end / 60);
            const interval = setInterval(() => {
              current = Math.min(current + step, s.end);
              setCounts((prev) => {
                const next = [...prev];
                next[i] = current;
                return next;
              });
              if (current >= s.end) clearInterval(interval);
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Red glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(0 85% 45% / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="yuga-badge mb-4">Who We Are</p>
          <h2 className="yuga-section-title mb-4">
            About <span className="yuga-glow-text">YUGA</span>
          </h2>
          <div className="yuga-divider w-48 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
           <p className="font-rajdhani text-lg text-foreground/80 leading-relaxed mb-6">
            <span className="yuga-red font-bold text-xl">YUGA 2K26</span> is the prestigious
            Computer Science & Engineering fest conducted as part of 
            <span className="font-semibold"> AMELIORATION 2K26</span> at 
            <span className="text-foreground font-semibold"> JNTUH College of Engineering, Sultanpur</span>.
            It represents the technological powerhouse of the college, showcasing innovation,
            leadership, and student-driven excellence.
          </p>

          <p className="font-rajdhani text-lg text-foreground/70 leading-relaxed mb-6">
            Built on the pillars of <span className="yuga-red font-semibold">Innovation</span>, 
            <span className="yuga-red font-semibold"> Collaboration</span>, and 
            <span className="yuga-red font-semibold"> Holistic Development</span>, 
            YUGA creates a dynamic platform where students bridge the gap between 
            theoretical knowledge and real-world application through hackathons, 
            competitive coding, AI showcases, workshops, cultural performances, and sports events.
          </p>

          <p className="font-rajdhani text-lg text-foreground/70 leading-relaxed">
            With a legacy of <span className="yuga-red font-semibold">12+ years</span>, 
            10+ impactful events, and 200+ active participants, YUGA 2K26 stands as 
            a celebration of technology, creativity, and leadership — empowering students 
            to innovate, compete, collaborate, and lead the digital revolution.
          </p>

          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="yuga-card p-8 text-center group cursor-default"
              >
                <div
                  className="yuga-heading text-4xl md:text-5xl mb-2 transition-colors duration-300 group-hover:yuga-glow-text"
                  style={{ color: "hsl(0 85% 45%)" }}
                >
                  {counts[i]}{s.suffix}
                </div>
                <div className="font-rajdhani text-sm tracking-widest text-muted-foreground uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
