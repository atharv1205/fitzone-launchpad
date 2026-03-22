import { useScrollReveal } from "@/hooks/useScrollReveal";

const trainers = [
  { name: "Coach Vikram", specialty: "Strength & Conditioning", exp: "12 yrs", initials: "VK" },
  { name: "Coach Sneha", specialty: "Yoga & Flexibility", exp: "8 yrs", initials: "SP" },
  { name: "Coach Arjun", specialty: "CrossFit & HIIT", exp: "10 yrs", initials: "AR" },
  { name: "Coach Meera", specialty: "Zumba & Dance Fitness", exp: "6 yrs", initials: "MJ" },
];

export default function TrainerProfiles() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="coaches" className="section-padding bg-muted/30">
      <div className="container" ref={ref}>
        <h2
          className={`font-heading font-black text-4xl sm:text-5xl text-center text-balance mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          MEET OUR <span className="text-secondary">COACHES</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
          Certified professionals dedicated to your transformation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {trainers.map((t, i) => (
            <div
              key={t.name}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-28 h-28 rounded-full bg-muted border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-black text-2xl text-primary">{t.initials}</span>
              </div>
              <h3 className="font-heading font-bold text-lg">{t.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t.specialty}</p>
              <p className="text-xs text-primary font-semibold mt-2">{t.exp} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
