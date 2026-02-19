import { Trophy } from "lucide-react";

const sportsData = [
  {
    emoji: "🏏",
    name: "Cricket",
    desc: "Experience thrilling inter-department cricket battles filled with energy, strategy, and team spirit.",
  },
  {
    emoji: "⚽",
    name: "Football",
    desc: "High-energy football matches showcasing teamwork, quick passes, and competitive campus rivalry.",
  },
  {
    emoji: "🏐",
    name: "Volleyball",
    desc: "Intense volleyball showdowns highlighting coordination, reflexes, and powerful spikes.",
  },
  {
    emoji: "🤾",
    name: "Kho-Kho",
    desc: "Traditional Indian sport demanding agility, speed, and sharp tactical moves.",
  },
  {
    emoji: "🎯",
    name: "Indoor Games",
    desc: "Engaging indoor competitions including carrom, table tennis, and other strategic games.",
  },
  {
    emoji: "🏃",
    name: "Athletics",
    desc: "Track and field events featuring sprints, relays, and individual athletic excellence.",
  },
];

const SportsSection = () => {
  return (
    <section id="sports" className="relative py-24 overflow-hidden">
      
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, hsl(0 85% 45% / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="yuga-badge mb-4">Get Active</p>
          <h2 className="yuga-section-title mb-4">
            <span className="yuga-glow-text">Sports</span> Events
          </h2>
          <div className="yuga-divider w-48 mx-auto mb-6" />
          <p className="font-rajdhani text-lg text-muted-foreground max-w-2xl mx-auto">
            YUGA celebrates not just technical brilliance but also athletic excellence and team spirit.
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsData.map((sport) => (
            <div
              key={sport.name}
              className="yuga-card p-8 text-center group transition-all duration-300 hover:-translate-y-2"
            >
              {/* Sport Icon */}
              <div
                className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "hsl(0 85% 45% / 0.08)",
                  border: "1px solid hsl(0 85% 45% / 0.2)",
                  borderRadius: "16px",
                  width: "90px",
                  height: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                {sport.emoji}
              </div>

              {/* Sport Name */}
              <h3 className="font-orbitron font-bold text-xl text-foreground group-hover:text-yuga-red transition-colors duration-300 mb-3">
                {sport.name}
              </h3>

              {/* Description */}
              <p className="font-rajdhani text-muted-foreground leading-relaxed">
                {sport.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="mt-20 p-10 rounded-xl text-center"
          style={{
            background:
              "linear-gradient(135deg, hsl(0 85% 45% / 0.05), hsl(0 85% 45% / 0.1))",
            border: "1px solid hsl(0 85% 45% / 0.2)",
          }}
        >
          <Trophy
            className="mx-auto mb-4"
            size={48}
            style={{ color: "hsl(0 85% 45%)" }}
          />
          <h3 className="font-orbitron font-bold text-2xl text-foreground mb-2">
            Strength. Spirit. Sportsmanship.
          </h3>
          <p className="font-rajdhani text-muted-foreground text-lg">
            Celebrate the competitive energy of YUGA 2K26 through thrilling sports events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
