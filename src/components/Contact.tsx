import { Phone, MapPin, Clock } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xlgozyvq");

  if (state.succeeded) {
    return (
      <div className="glass-card rounded-2xl p-8 text-center max-w-xl mx-auto mt-16">
        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-primary text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground text-sm">Thanks for reaching out. We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 max-w-xl mx-auto mt-16 space-y-5">
      <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>

      <div>
        <Label htmlFor="name" className="text-sm mb-1.5 block">Full Name</Label>
        <Input id="name" type="text" name="name" placeholder="John Doe" required className="bg-surface border-border" />
        <ValidationError field="name" prefix="Name" errors={state.errors} className="text-destructive text-xs mt-1" />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm mb-1.5 block">Email</Label>
        <Input id="email" type="email" name="email" placeholder="john@example.com" required className="bg-surface border-border" />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="text-destructive text-xs mt-1" />
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm mb-1.5 block">Phone <span className="text-muted-foreground font-normal">(optional)</span></Label>
        <Input id="phone" type="tel" name="phone" placeholder="(647) 000-0000" className="bg-surface border-border" />
      </div>

      <div>
        <Label htmlFor="message" className="text-sm mb-1.5 block">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us about your vehicle and what you need..." required className="bg-surface border-border min-h-[120px]" />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="text-destructive text-xs mt-1" />
      </div>

      {state.errors && state.errors.length > 0 && (
        <div className="text-destructive text-sm bg-destructive/10 rounded-lg p-3">
          {state.errors.map((err, i) => (
            <p key={i}>{err.message}</p>
          ))}
        </div>
      )}

      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-gold text-primary-foreground font-semibold"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

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

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
