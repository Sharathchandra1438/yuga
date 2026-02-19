import { useEffect, useRef, useState } from "react";

// Import gallery images
import g1 from "../assets/gallery/g1.jpeg";
import g2 from "../assets/gallery/g2.jpeg";
import g3 from "../assets/gallery/g3.jpeg";
import g4 from "../assets/gallery/g4.jpeg";
import g5 from "../assets/gallery/g5.jpeg";
import g6 from "../assets/gallery/g6.jpeg";
import g7 from "../assets/gallery/g7.jpeg";
import g8 from "../assets/gallery/g8.jpeg";
import g9 from "../assets/gallery/g9.jpeg";
import g10 from "../assets/gallery/g10.jpeg";
import g11 from "../assets/gallery/g11.jpeg";
import g12 from "../assets/gallery/g12.jpeg";
import g13 from "../assets/gallery/g13.jpeg";

const galleryImages = [
  g1, g2, g3, g4, g5, g6, g7,
  g8, g9, g10, g11, g12, g13
];

const GallerySection = () => {
  const [selected, setSelected] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, hsl(0 85% 45% / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="yuga-badge mb-4">YUGA</p>
          <h2 className="yuga-section-title mb-4">
            <span className="yuga-glow-text">Gallery</span>
          </h2>
          <div className="yuga-divider w-48 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="reveal relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
              style={{ transitionDelay: `${i * 0.05}s` }}
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Red overlay hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "hsl(0 85% 45% / 0.12)" }}
              />

              {/* Glow border */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                style={{
                  boxShadow:
                    "inset 0 0 0 2px hsl(0 85% 45% / 0.6)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt=""
            className="max-w-5xl max-h-[85vh] w-full object-contain rounded-lg"
            style={{
              boxShadow:
                "0 0 60px hsl(0 85% 45% / 0.3)",
            }}
          />

          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-red-600 transition-colors"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;