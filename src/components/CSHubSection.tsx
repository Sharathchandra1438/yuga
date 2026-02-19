import { Code2, Cpu, Brain, BookOpen, Presentation, Zap } from "lucide-react";

// Import images
import codingContestImg from "../assets/events/c8.jpg";
import ideathonImg from "../assets/events/ideathon.jpg";
import workshopImg from "../assets/events/c.jpg";
import careerImg from "../assets/events/collector.jpg";
import alumniImg from "../assets/events/alumini.jpg";
import cshubLaunchImg from "../assets/events/c1.jpg";
import appreciationImg from "../assets/events/cs3.jpg";

const hubEvents = [
  {
    icon: <Presentation size={28} />,
    name: "Career Guidance Session",
    tag: "CS Hub",
    desc: "Expert interaction session focused on career opportunities, higher studies, placements, and skill development.",
    level: "Career",
    image: careerImg,
  },
  {
    icon: <Code2 size={28} />,
    name: "Coding Contest Championship",
    tag: "CS Hub",
    desc: "A multi-round competitive programming contest testing problem-solving, DSA, and logical thinking under time pressure.",
    level: "Technical",
    image: codingContestImg,
  },
  {
    icon: <Brain size={28} />,
    name: "Ideathon Innovation Challenge",
    tag: "CS Hub",
    desc: "A creative idea pitching competition encouraging innovation, teamwork, and real-world problem-solving.",
    level: "Innovation",
    image: ideathonImg,
  },
  {
    icon: <BookOpen size={28} />,
    name: "Technical Workshop Series",
    tag: "CS Hub",
    desc: "Hands-on workshops covering programming, AI/ML, Web Development, and emerging technologies.",
    level: "Beginner Friendly",
    image: workshopImg,
  },
  {
    icon: <Cpu size={28} />,
    name: "CS Hub Launch Event",
    tag: "CS Hub",
    desc: "Official inauguration of CS Hub under YUGA 2K26 with faculty members and student leadership.",
    level: "Special Event",
    image: cshubLaunchImg,
  },
  {
    icon: <Zap size={28} />,
    name: "Alumni Interaction Meet",
    tag: "CS Hub",
    desc: "A networking session connecting students with successful alumni to share guidance and industry insights.",
    level: "Networking",
    image: alumniImg,
  },
  {
    icon: <Presentation size={28} />,
    name: "Appreciation & Recognition Ceremony",
    tag: "CS Hub",
    desc: "Celebrating outstanding performers, coordinators, and contributors of CS Hub events.",
    level: "Recognition",
    image: appreciationImg,
  },
];

const CSHubSection = () => {
  return (
    <section id="cshub" className="relative py-24 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(0 85% 45% / 0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(0 85% 45% / 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="yuga-badge mb-4">Technical Wing of YUGA 2K26</p>
          <h2 className="yuga-section-title mb-4">
            CS <span className="yuga-glow-text">Hub</span> Events
          </h2>
          <div className="yuga-divider w-48 mx-auto mb-6" />
          <p className="font-rajdhani text-lg text-muted-foreground max-w-3xl mx-auto">
            The CS Hub of JNTUH University College of Engineering Sultanpur 
            proudly organizes all major technical events under YUGA 2K26. 
            These events aim to enhance innovation, technical excellence, 
            leadership, and collaboration among students.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {hubEvents.map((ev, i) => (
            <div
              key={ev.name}
              className="yuga-card overflow-hidden group transition-all duration-300 hover:-translate-y-2"
            >
              
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="p-3 rounded-lg"
                    style={{
                      background: "hsl(0 85% 45% / 0.08)",
                      color: "hsl(0 85% 45%)",
                    }}
                  >
                    {ev.icon}
                  </div>
                  <h3 className="font-orbitron font-bold text-lg group-hover:text-yuga-red transition-colors">
                    {ev.name}
                  </h3>
                </div>

                <p className="font-rajdhani text-muted-foreground text-sm leading-relaxed mb-4">
                  {ev.desc}
                </p>

                <div className="flex items-center gap-3">
                  <span className="yuga-badge text-xs">{ev.tag}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {ev.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSHubSection;
