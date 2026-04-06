import { Sparkles, Droplets, Car, Paintbrush } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Interior Detail",
    description: "Deep cleaning of all interior surfaces including seats, carpets, dashboard, and trim. Steam cleaning and leather conditioning available.",
    price: "From $120",
  },
  {
    icon: Droplets,
    title: "Exterior Wash & Wax",
    description: "Hand wash, clay bar treatment, and premium wax application for a mirror-like finish that protects your paint.",
    price: "From $80",
  },
  {
    icon: Car,
    title: "Full Detail Package",
    description: "Complete interior and exterior detailing for a showroom-quality finish. Our most popular service for total vehicle rejuvenation.",
    price: "From $200",
  },
  {
    icon: Paintbrush,
    title: "Paint Decontamination",
    description: "Iron removal, clay bar decontamination, and paint correction to restore your vehicle's original luster and depth.",
    price: "From $150",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional detailing packages tailored to your vehicle's needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:border-primary/40 transition-all duration-300 group hover:glow-gold"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <p className="text-primary font-bold text-lg">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
