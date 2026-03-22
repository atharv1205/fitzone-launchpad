import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const transformations = [
  { name: "Rahul S.", age: 28, duration: "6 months", weightLost: "18 kg", before: 95, after: 77 },
  { name: "Priya M.", age: 32, duration: "4 months", weightLost: "12 kg", before: 78, after: 66 },
  { name: "Amit K.", age: 35, duration: "8 months", weightLost: "25 kg", before: 110, after: 85 },
];

export default function TransformationGallery() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollReveal();
  const t = transformations[current];

  return (
    <section id="results" className="section-padding bg-muted/30">
      <div className="container" ref={ref}>
        <h2
          className={`font-heading font-black text-4xl sm:text-5xl text-center text-balance mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          REAL <span className="text-secondary">TRANSFORMATIONS</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
          Our members' journeys speak louder than words.
        </p>

        <div
          className={`glass-card max-w-3xl mx-auto p-8 sm:p-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.15s" }}
        >
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            {/* Before / After visual */}
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <div className="w-28 h-28 rounded-full bg-muted flex items-center justify-center mb-2">
                  <span className="font-heading font-black text-2xl text-muted-foreground">{t.before} kg</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Before</span>
              </div>
              <div className="flex items-center text-primary font-heading font-black text-2xl">→</div>
              <div className="text-center">
                <div className="w-28 h-28 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-2">
                  <span className="font-heading font-black text-2xl text-primary">{t.after} kg</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-primary">After</span>
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 className="font-heading font-black text-2xl mb-1">{t.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">Age {t.age}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">{t.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Weight Lost</span>
                  <span className="font-semibold text-primary">{t.weightLost}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + transformations.length) % transformations.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {transformations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/40"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % transformations.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
