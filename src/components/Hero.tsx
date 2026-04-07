import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-8 pt-20">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="King Vaughan Auto Detailing Logo"
          className="h-20 md:h-28 w-auto mb-4"
        />

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
          Premium Mobile Detailing,{" "}
          <span className="text-gradient-gold">Right to Your Driveway</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Professional auto detailing that comes to you. Serving King City, Vaughan, and surrounding areas with meticulous care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href="#booking">
            <Button
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-bold text-lg px-8 py-6 glow-gold hover:opacity-90 transition-opacity"
            >
              Book an Appointment
            </Button>
          </a>
          <a href="#services">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary font-semibold text-lg px-8 py-6 hover:bg-primary/10"
            >
              View Services
            </Button>
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
