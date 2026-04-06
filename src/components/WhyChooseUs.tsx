import { Truck, Eye, MapPin, Calendar } from "lucide-react";

const features = [
  { icon: Truck, title: "Mobile & Convenient", desc: "We come to your home or office — no need to drive anywhere." },
  { icon: Eye, title: "Attention to Detail", desc: "Every surface is meticulously cleaned and treated with care." },
  { icon: MapPin, title: "Serving Vaughan & King City", desc: "Local experts who know and serve your community." },
  { icon: Calendar, title: "Flexible Scheduling", desc: "Book a time that works for you — we're available 7 days a week." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Why Choose <span className="text-gradient-gold">Us</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
