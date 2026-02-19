import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(0 85% 45% / 0.06) 0%, transparent 60%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="yuga-badge mb-4">Get In Touch</p>
          <h2 className="yuga-section-title mb-4">
            <span className="yuga-glow-text">Contact</span> Us
          </h2>
          <div className="yuga-divider w-48 mx-auto mb-6" />
          <p className="font-rajdhani text-lg text-muted-foreground max-w-xl mx-auto">
            Have questions about YUGA 2K26? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div>
            <h3 className="font-orbitron font-bold text-xl text-foreground mb-8">
              Event Information
            </h3>
            <div className="space-y-6">
              {[
                { icon: <MapPin size={20} />, label: "Venue", val: "CSE Department, College Campus" },
                { icon: <Mail size={20} />, label: "Email", val: "yuga2k26@cse.edu" },
                { icon: <Phone size={20} />, label: "Phone", val: "+91 98765 43210" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "hsl(0 85% 45% / 0.1)",
                      border: "1px solid hsl(0 85% 45% / 0.3)",
                      color: "hsl(0 85% 45%)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-rajdhani text-xs text-muted-foreground tracking-widest uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="font-rajdhani text-foreground font-semibold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 p-6 rounded-xl"
              style={{
                background: "hsl(0 85% 45% / 0.05)",
                border: "1px solid hsl(0 85% 45% / 0.2)",
              }}
            >
              <h4 className="font-orbitron font-bold text-base text-foreground mb-2">
                Registration Opening Soon
              </h4>
              <p className="font-rajdhani text-muted-foreground text-sm leading-relaxed">
                Stay tuned for registration links. Follow our social media for the latest updates
                on events, schedules, and prizes.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", placeholder: "Your Name", type: "text" },
                { name: "email", placeholder: "Your Email", type: "email" },
                { name: "subject", placeholder: "Subject", type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-lg font-rajdhani text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:ring-1"
                  style={{
                    background: "hsl(0 0% 6%)",
                    border: "1px solid hsl(var(--border))",
                    "--tw-ring-color": "hsl(0 85% 45% / 0.5)",
                  } as React.CSSProperties}
                  onFocus={(e) => {
                    e.target.style.borderColor = "hsl(0 85% 45% / 0.6)";
                    e.target.style.boxShadow = "0 0 15px hsl(0 85% 45% / 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "hsl(var(--border))";
                    e.target.style.boxShadow = "none";
                  }}
                />
              ))}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-lg font-rajdhani text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 resize-none"
                style={{
                  background: "hsl(0 0% 6%)",
                  border: "1px solid hsl(var(--border))",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "hsl(0 85% 45% / 0.6)";
                  e.target.style.boxShadow = "0 0 15px hsl(0 85% 45% / 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "hsl(var(--border))";
                  e.target.style.boxShadow = "none";
                }}
              />

              <button type="submit" className="yuga-btn-primary w-full flex items-center justify-center gap-3">
                <Send size={16} />
                {sent ? "Message Sent! ✓" : "Send Message"}
              </button>

              {sent && (
                <p className="font-rajdhani text-center text-sm" style={{ color: "hsl(0 85% 45%)" }}>
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
