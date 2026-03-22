import { useScrollReveal } from "@/hooks/useScrollReveal";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const classes: Record<string, { time: string; name: string; color: string }[]> = {
  Mon: [
    { time: "6:00 AM", name: "CrossFit", color: "bg-primary/20 text-primary" },
    { time: "5:00 PM", name: "Strength", color: "bg-secondary/20 text-secondary" },
    { time: "7:00 PM", name: "Yoga", color: "bg-blue-500/20 text-blue-400" },
  ],
  Tue: [
    { time: "7:00 AM", name: "Zumba", color: "bg-pink-500/20 text-pink-400" },
    { time: "6:00 PM", name: "CrossFit", color: "bg-primary/20 text-primary" },
  ],
  Wed: [
    { time: "6:00 AM", name: "Strength", color: "bg-secondary/20 text-secondary" },
    { time: "5:00 PM", name: "Yoga", color: "bg-blue-500/20 text-blue-400" },
    { time: "7:00 PM", name: "Zumba", color: "bg-pink-500/20 text-pink-400" },
  ],
  Thu: [
    { time: "7:00 AM", name: "CrossFit", color: "bg-primary/20 text-primary" },
    { time: "6:00 PM", name: "Strength", color: "bg-secondary/20 text-secondary" },
  ],
  Fri: [
    { time: "6:00 AM", name: "Yoga", color: "bg-blue-500/20 text-blue-400" },
    { time: "5:00 PM", name: "Zumba", color: "bg-pink-500/20 text-pink-400" },
    { time: "7:00 PM", name: "CrossFit", color: "bg-primary/20 text-primary" },
  ],
  Sat: [
    { time: "8:00 AM", name: "CrossFit", color: "bg-primary/20 text-primary" },
    { time: "10:00 AM", name: "Zumba", color: "bg-pink-500/20 text-pink-400" },
  ],
};

export default function ClassSchedule() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="schedule" className="section-padding bg-background">
      <div className="container" ref={ref}>
        <h2
          className={`font-heading font-black text-4xl sm:text-5xl text-center text-balance mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          WEEKLY <span className="text-primary">SCHEDULE</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
          Find the class that fits your vibe and schedule.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {days.map((day, di) => (
            <div
              key={day}
              className={`glass-card p-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${di * 80}ms` }}
            >
              <h3 className="font-heading font-bold text-center mb-4 text-sm uppercase tracking-wider">
                {day}
              </h3>
              <div className="space-y-3">
                {classes[day].map((c, ci) => (
                  <div key={ci} className={`rounded-lg p-2.5 text-center ${c.color}`}>
                    <p className="text-xs font-semibold">{c.name}</p>
                    <p className="text-[10px] opacity-70 mt-0.5">{c.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
