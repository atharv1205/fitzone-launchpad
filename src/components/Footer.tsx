export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container text-center">
        <p className="font-heading font-bold text-lg mb-2">
          <span className="text-primary">FIT</span>ZONE
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FitZone Gym & Fitness, Pimpri-Chinchwad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
