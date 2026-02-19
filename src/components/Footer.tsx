import { Instagram, Linkedin } from "lucide-react";
import logo2 from "@/assets/logo.jpeg";
import logoWatermark from "@/assets/logo.jpeg";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t" style={{ borderColor: "hsl(0 85% 45% / 0.2)" }}>
      {/* Watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={logoWatermark} alt="" className="w-72 opacity-[0.03] select-none" />
      </div>

      {/* Top red line */}
      <div className="yuga-divider" />

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo + about */}
          <div>
            <img src={logo2} alt="YUGA 2K26" className="h-16 object-contain mb-4" />
            <p className="font-rajdhani text-muted-foreground text-sm leading-relaxed mb-6">
              YUGA 2K26 — The ultimate Computer Science Fest by the CSE Department.
              Innovation, passion, and celebration of technology.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/yuga.2k26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/yuga2026/" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-yuga-red transition-all duration-300 hover:scale-110"
                  style={{
                    background: "hsl(0 0% 8%)",
                    border: "1px solid hsl(var(--border))",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 85% 45% / 0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px hsl(0 85% 45% / 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-orbitron font-bold text-sm tracking-widest text-foreground uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About YUGA", href: "#about" },
                { label: "Events", href: "#events" },
                { label: "CS Hub", href: "#cshub" },
                { label: "Gallery", href: "#gallery" },
                { label: "Sports", href: "#sports" },
                // { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-rajdhani text-muted-foreground hover:text-yuga-red transition-colors duration-200 text-sm tracking-wide flex items-center gap-2 group"
                  >
                    <span
                      className="w-0 h-px group-hover:w-4 transition-all duration-300"
                      style={{ background: "hsl(0 85% 45%)" }}
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Event info */}
          <div>
            <h4 className="font-orbitron font-bold text-sm tracking-widest text-foreground uppercase mb-6">
              Event Info
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-rajdhani text-xs text-muted-foreground tracking-widest uppercase mb-1">Date</p>
                <p className="font-rajdhani text-foreground font-semibold">March 24-25, 2026</p>
              </div>
              <div>
                <p className="font-rajdhani text-xs text-muted-foreground tracking-widest uppercase mb-1">Venue</p>
                <p className="font-rajdhani text-foreground font-semibold">JNTUH College of Engineering, Sultanpur, CSE Department</p>
              </div>
              <div>
                <p className="font-rajdhani text-xs text-muted-foreground tracking-widest uppercase mb-1">Organized By</p>
                <p className="font-rajdhani text-foreground font-semibold">Department of CSE</p>
              </div>
              <div
                className="p-3 rounded-lg mt-4"
                style={{
                  background: "hsl(0 85% 45% / 0.08)",
                  border: "1px solid hsl(0 85% 45% / 0.2)",
                }}
              >
                <p className="font-rajdhani text-sm" style={{ color: "hsl(0 85% 45%)" }}>
                  🔴 Registration Opening Soon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid hsl(0 0% 15%)" }}
        >
          <p className="font-rajdhani text-xs text-muted-foreground tracking-wider">
            © 2026 YUGA — CSE Department. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
