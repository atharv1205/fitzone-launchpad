import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container" ref={ref}>
        <h2
          className={`font-heading font-black text-4xl sm:text-5xl text-center text-balance mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          GET IN <span className="text-secondary">TOUCH</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map + Info */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="glass-card overflow-hidden rounded-xl aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60531.90456357063!2d73.7679!3d18.6279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f4b8555555%3A0x2dcf7dc81b89d645!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FitZone Gym Location"
              />
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Near Aundh-Ravet BRT Road, Pimpri-Chinchwad, Pune 411017</p>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Mon–Sat: 5:00 AM – 11:00 PM | Sun: 7:00 AM – 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`glass-card p-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-3xl">✓</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">We'll Call You Back!</h3>
                  <p className="text-sm text-muted-foreground">Expect a call within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading font-bold text-xl mb-2">Book a Free Trial</h3>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full h-11 rounded-lg bg-muted border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full h-11 rounded-lg bg-muted border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Interested In</label>
                  <select
                    className="w-full h-11 rounded-lg bg-muted border border-border px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select a program</option>
                    <option>General Fitness</option>
                    <option>CrossFit</option>
                    <option>Yoga</option>
                    <option>Zumba</option>
                    <option>Personal Training</option>
                  </select>
                </div>
                <Button variant="hero" size="lg" className="w-full" type="submit">
                  Book Free Trial
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
