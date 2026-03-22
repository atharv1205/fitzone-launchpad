import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Basic",
    price: "₹1,499",
    period: "/month",
    features: ["Gym Floor Access", "Locker Room", "1 Group Class/week", "Fitness Assessment"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹2,999",
    period: "/month",
    features: ["Unlimited Gym Access", "All Group Classes", "Personal Diet Chart", "Body Composition Analysis", "Steam & Sauna"],
    popular: true,
  },
  {
    name: "Elite",
    price: "₹4,999",
    period: "/month",
    features: ["Everything in Pro", "Personal Trainer (12 sessions)", "Nutrition Consultation", "Priority Booking", "Guest Passes (2/month)"],
    popular: false,
  },
];

export default function MembershipPlans() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="plans" className="section-padding bg-background">
      <div className="container" ref={ref}>
        <h2 className="font-heading font-black text-4xl sm:text-5xl text-center text-balance mb-4">
          CHOOSE YOUR <span className="text-primary">PLAN</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
          Flexible memberships designed around your fitness goals. No hidden fees, cancel anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`glass-card p-8 flex flex-col transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } ${plan.popular ? "ring-2 ring-primary scale-[1.03]" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <span className="bg-primary text-primary-foreground text-xs font-heading uppercase tracking-wider px-3 py-1 rounded-full self-start mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-black text-2xl mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-heading font-black text-4xl">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? "hero" : "outline"} size="lg" className="w-full">
                Join Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
