import heroImg from "@/assets/hero-gym.jpg";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroImg}
        alt="Modern gym interior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-16">
        <p className="text-primary font-heading text-sm uppercase tracking-[0.3em] mb-4 animate-fade-up">
          Pimpri-Chinchwad's Premier Transformation Hub
        </p>
        <h1
          className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] text-balance text-foreground mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          NO EXCUSES.
          <br />
          <span className="text-primary">ONLY RESULTS.</span>
        </h1>
        <p
          className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          World-class equipment, expert coaches, and a community that pushes you beyond limits.
        </p>
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">Book a Free Trial Session</a>
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
