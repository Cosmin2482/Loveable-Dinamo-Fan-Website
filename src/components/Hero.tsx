import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-stadium.jpg";
import clubLogo from "@/assets/club-logo.png";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dinamo București Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <img
          src={clubLogo}
          alt="Dinamo București Logo"
          className="w-32 h-32 mx-auto mb-8 drop-shadow-[var(--shadow-glow)] animate-pulse"
        />
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary-foreground drop-shadow-lg">
          DINAMO BUCUREȘTI
        </h1>
        <p className="text-xl md:text-3xl mb-8 text-primary-foreground/90 font-semibold">
          Câinii Roșii • Peste 75 de Ani de Glorie
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg">
            Ultimele Știri
          </Button>
          <Button variant="outline" size="lg" className="text-lg bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
            Program Meciuri
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/80 hover:text-primary-foreground transition-[var(--transition-smooth)]"
        aria-label="Scroll to content"
      >
        <ChevronDown size={48} />
      </button>
    </section>
  );
};

export default Hero;
