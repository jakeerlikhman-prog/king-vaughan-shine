import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="King Vaughan Auto Detailing Logo" className="h-8 w-auto" />
            <div>
              <p className="font-semibold text-sm">King Vaughan Auto Detailing</p>
              <p className="text-xs text-muted-foreground">Premium Mobile Detailing</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a href="tel:6473816523" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              (647) 381-6523
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Vaughan & King City, ON
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} King Vaughan Auto Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
