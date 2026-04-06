import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <a href="tel:6473816523" className="text-primary font-medium hover:underline">
              (647) 381-6523
            </a>
          </div>

          <div className="glass-card rounded-xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Service Area</h3>
            <p className="text-sm text-muted-foreground">Vaughan, King City & surrounding areas</p>
          </div>

          <div className="glass-card rounded-xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Hours</h3>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open 24 Hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
