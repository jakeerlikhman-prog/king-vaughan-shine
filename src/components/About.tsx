import { Shield, Award, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient-gold">Us</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            King Vaughan Auto Detailing is a mobile detailing service proudly serving King City, Vaughan, and the surrounding area. We bring convenient, high-quality car cleaning right to your driveway, saving you time while keeping your vehicle looking its best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Shield, title: "Trusted Quality", desc: "Premium products and proven techniques for a flawless finish every time." },
            { icon: Award, title: "Experienced Team", desc: "Years of detailing expertise ensuring your vehicle receives the best care." },
            { icon: MapPin, title: "Local Service", desc: "Proudly serving King City, Vaughan, and the Greater Toronto Area." },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-8 text-center hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
