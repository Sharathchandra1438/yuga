import { useState } from "react";
import { Code2, Music, Trophy, Gamepad2, Mic2, Film, Terminal, Cpu, Brain } from "lucide-react";

type EventCategory = "technical" | "nontechnical";

const technicalEvents = [
  { icon: <Terminal size={24} />, name: "Code Sprint", desc: "Race against time in this high-speed competitive coding challenge." },
  { icon: <Cpu size={24} />, name: "Hackathon", desc: "24-hour innovation marathon to build solutions for real-world problems." },
  { icon: <Brain size={24} />, name: "Tech Quiz", desc: "Test your CS knowledge across algorithms, networks, and beyond." },
  { icon: <Code2 size={24} />, name: "Debug Wars", desc: "Find and fix bugs faster than your competitors in this nerve-wracking event." },
  { icon: <Code2 size={24} />,name: "Workshop", desc: "Hands-on technical sessions on AI, Web Development, Cybersecurity, and Cloud Technologies led by experts to enhance practical skills and industry readiness." },
  { icon: <Cpu size={24} />, name: "Project Expo", desc: "Showcase your innovative tech projects to expert panel judges." },
];

const nonTechnicalEvents = [
  { icon: <Mic2 size={24} />, name: "Treasure Hunt", desc: "Decode clues and race through tech-themed riddles to find the treasure." },
  { icon: <Film size={24} />, name: "Short Film", desc: "Express tech stories through the lens of creativity and cinema." },
  { icon: <Music size={24} />, name: "Photography", desc: "Capture the essence of technology through your unique perspective." },
  { icon: <Gamepad2 size={24} />, name: "Gaming", desc: "Compete in popular eSports and online gaming tournaments." },
  { icon: <Mic2 size={24} />, name: "Debate", desc: "Argue tech ethics, AI futures, and digital rights with eloquence." },
  { icon: <Music size={24} />, name: "Poster Design", desc: "Create compelling visual designs on tech and CSE themes." },
];

// const sportsEvents = [
//   { icon: <Trophy size={24} />, name: "Cricket", desc: "Inter-department cricket tournament in YUGA league format." },
//   { icon: <Trophy size={24} />, name: "Football", desc: "Fast-paced five-a-side football battles on the court." },
//   { icon: <Trophy size={24} />, name: "Volleyball", desc: "Compete in exciting volleyball matches across departments." },
//   { icon: <Trophy size={24} />, name: "Kho-Kho", desc: "Fast-paced inter-department Kho-Kho matches that test agility, teamwork, and strategy to crown the campus champions." },
//   { icon: <Trophy size={24} />,name: "Indoor Games", desc: "Exciting indoor competitions including chess, carrom, and other strategic games that challenge focus, precision, and quick thinking." },
//   { icon: <Trophy size={24} />, name: "Athletics", desc: "Track & field events including sprints and relay races." },
// ];

const tabs: { key: EventCategory; label: string; icon: React.ReactNode }[] = [
  { key: "technical", label: "💻 Technical", icon: <Terminal size={16} /> },
  { key: "nontechnical", label: "🎭 Non-Technical", icon: <Music size={16} /> },
  // { key: "sports", label: "🏆 Sports", icon: <Trophy size={16} /> },
];

const eventMap: Record<EventCategory, typeof technicalEvents> = {
  technical: technicalEvents,
  nontechnical: nonTechnicalEvents,
  // sports: sportsEvents,
};

const EventsSection = () => {
  const [active, setActive] = useState<EventCategory>("technical");

  return (
    <section id="events" className="relative py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(0 85% 45% / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="yuga-badge mb-4">What's In Store</p>
          <h2 className="yuga-section-title mb-4">
            <span className="yuga-glow-text">Events</span>
          </h2>
          <div className="yuga-divider w-48 mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`font-orbitron text-xs tracking-widest uppercase px-6 py-3 rounded border transition-all duration-300 ${
                active === tab.key
                  ? "border-yuga-red bg-yuga-red/10 text-yuga-red shadow-glow-red-soft"
                  : "border-border text-muted-foreground hover:border-yuga-red/50 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventMap[active].map((event) => (
            <div key={event.name} className="yuga-card p-6 group cursor-pointer relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="absolute top-0 right-0 w-0 h-0"
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0 40px 40px 0",
                    borderColor: `transparent hsl(0 85% 45% / 0.3) transparent transparent`,
                  }}
                />
              </div>

              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-glow-red-soft"
                style={{
                  background: "hsl(0 85% 45% / 0.1)",
                  border: "1px solid hsl(0 85% 45% / 0.3)",
                  color: "hsl(0 85% 45%)",
                }}
              >
                {event.icon}
              </div>

              <h3 className="font-orbitron text-base font-bold mb-2 text-foreground group-hover:text-yuga-red transition-colors duration-300">
                {event.name}
              </h3>
              <p className="font-rajdhani text-sm text-muted-foreground leading-relaxed mb-4">
                {event.desc}
              </p>

              <span className="yuga-badge text-xs">Registration Starting Soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
