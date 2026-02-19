import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo2 from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "CS Hub", href: "#cshub" },
  { label: "Gallery", href: "#gallery" },
  { label: "Sports", href: "#sports" },
  // { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-yuga-red/30 py-2 shadow-glow-red-soft"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group"
        >
          <img
            src={logo2}
            alt="YUGA 2K26 Logo"
            className={`transition-all duration-300 bg-transparent opacity-100 rounded-full object-cover ${
              scrolled ? "h-10 w-10" : "h-14 w-14"
            }`}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="relative font-rajdhani font-semibold tracking-widest uppercase text-sm text-foreground/80 hover:text-yuga-red transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yuga-red group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          {/* <button
            onClick={() => handleNav("#contact")}
            className="yuga-btn-outline text-sm px-5 py-2"
          >
            Register
          </button> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground hover:text-yuga-red transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-black/95 backdrop-blur-md border-b border-yuga-red/20`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left font-rajdhani font-semibold tracking-widest uppercase text-sm text-foreground/80 hover:text-yuga-red transition-colors py-2 border-b border-border/30"
            >
              {link.label}
            </button>
          ))}
          {/* <button
            onClick={() => handleNav("#contact")}
            className="yuga-btn-primary mt-2 text-center"
          >
            Register
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
