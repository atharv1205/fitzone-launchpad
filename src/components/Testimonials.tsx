import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Deepak R.",
    quote: "Lost 20 kg in 5 months. The coaches here don't just train you — they transform your mindset.",
    rating: 5,
  },
  {
    name: "Anjali T.",
    quote: "The Zumba and yoga classes are incredible. FitZone has become my second home.",
    rating: 5,
  },
  {
    name: "Suresh P.",
    quote: "Best gym in PCMC, hands down. Equipment is top-notch and the vibe is unmatched.",
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div className="container" ref={ref}>
        <h2
          className={`font-heading font-black text-4xl sm:text-5xl text-center text-balance mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          MEMBER <span className="text-primary">VOICES</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <p className="font-heading font-bold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
