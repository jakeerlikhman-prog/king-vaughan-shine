import { Star, Quote } from "lucide-react";

const Reviews = () => {
  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Customer <span className="text-gradient-gold">Reviews</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-4 rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative">
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />

            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
              ))}
            </div>

            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
              "King Vaughan Auto Detailing is a mobile detailing service proudly serving King City, Vaughan, and the surrounding area. We bring convenient, high-quality car cleaning right to your driveway, saving you time while keeping your vehicle looking its best."
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">G</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Google Review</p>
                <p className="text-xs text-muted-foreground">5.0 Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
