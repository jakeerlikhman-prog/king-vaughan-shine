import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronRight, Sparkles, Droplets, Car, Paintbrush } from "lucide-react";
import { saveBooking } from "@/lib/bookings";
import { toast } from "sonner";

const services = [
  { id: "interior", label: "Interior Detail", icon: Sparkles, price: "From $120" },
  { id: "exterior", label: "Exterior Wash & Wax", icon: Droplets, price: "From $80" },
  { id: "full", label: "Full Detail Package", icon: Car, price: "From $200" },
  { id: "paint", label: "Paint Decontamination", icon: Paintbrush, price: "From $150" },
];

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
];

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^[\d\s\-().+]+$/.test(phone)) newErrors.phone = "Invalid phone number";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email";
    if (!vehicle.trim()) newErrors.vehicle = "Vehicle info is required";
    if (!address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    saveBooking({
      service: services.find((s) => s.id === selectedService)?.label || "",
      date: date ? format(date, "PPP") : "",
      time,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      vehicle: vehicle.trim(),
      address: address.trim(),
    });
    setSubmitted(true);
    toast.success("Booking confirmed!");
  };

  const stepLabels = ["Service", "Date & Time", "Your Info", "Confirm"];

  if (submitted) {
    return (
      <section id="booking" className="py-24">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
            <div className="text-left space-y-3 bg-surface rounded-xl p-6 mb-6 text-sm">
              <p><span className="text-muted-foreground">Service:</span> <span className="font-medium">{services.find((s) => s.id === selectedService)?.label}</span></p>
              <p><span className="text-muted-foreground">Date:</span> <span className="font-medium">{date ? format(date, "PPP") : ""}</span></p>
              <p><span className="text-muted-foreground">Time:</span> <span className="font-medium">{time}</span></p>
              <p><span className="text-muted-foreground">Name:</span> <span className="font-medium">{name}</span></p>
              <p><span className="text-muted-foreground">Phone:</span> <span className="font-medium">{phone}</span></p>
              <p><span className="text-muted-foreground">Vehicle:</span> <span className="font-medium">{vehicle}</span></p>
              <p><span className="text-muted-foreground">Address:</span> <span className="font-medium">{address}</span></p>
            </div>
            <p className="text-muted-foreground text-sm">We'll reach out to confirm your appointment shortly.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Book Your <span className="text-gradient-gold">Appointment</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-4 rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {stepLabels.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                    step > i + 1 ? "bg-primary text-primary-foreground" :
                    step === i + 1 ? "bg-primary text-primary-foreground" :
                    "bg-muted text-muted-foreground"
                  )}
                >
                  {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className="text-xs text-muted-foreground hidden sm:inline">{label}</span>
                {i < 3 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-10">
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-6">Select a Service</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={cn(
                        "p-5 rounded-xl border text-left transition-all",
                        selectedService === service.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/40"
                      )}
                    >
                      <service.icon className={cn("w-6 h-6 mb-2", selectedService === service.id ? "text-primary" : "text-muted-foreground")} />
                      <p className="font-semibold">{service.label}</p>
                      <p className="text-sm text-primary mt-1">{service.price}</p>
                    </button>
                  ))}
                </div>
                <div className="flex justify-end pt-4">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!selectedService}
                    className="bg-gradient-gold text-primary-foreground font-semibold"
                  >
                    Next <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Pick a Date & Time</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div>
                    <Label className="mb-2 block text-sm text-muted-foreground">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full md:w-[260px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(d) => d < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex-1">
                    <Label className="mb-2 block text-sm text-muted-foreground">Time Slot</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setTime(slot)}
                          className={cn(
                            "px-3 py-2 rounded-lg border text-sm transition-all",
                            time === slot ? "border-primary bg-primary/10 text-primary font-medium" : "border-border hover:border-primary/40 text-muted-foreground"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button onClick={() => setStep(3)} disabled={!date || !time} className="bg-gradient-gold text-primary-foreground font-semibold">
                    Next <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-5">
                <h3 className="text-xl font-semibold mb-6">Your Information</h3>
                {[
                  { id: "name", label: "Full Name", value: name, setter: setName, placeholder: "John Doe" },
                  { id: "phone", label: "Phone Number", value: phone, setter: setPhone, placeholder: "(647) 000-0000" },
                  { id: "email", label: "Email", value: email, setter: setEmail, placeholder: "john@example.com" },
                  { id: "vehicle", label: "Vehicle Make & Model", value: vehicle, setter: setVehicle, placeholder: "e.g. 2023 BMW X5" },
                  { id: "address", label: "Service Address", value: address, setter: setAddress, placeholder: "123 Main St, Vaughan, ON" },
                ].map((field) => (
                  <div key={field.id}>
                    <Label htmlFor={field.id} className="text-sm mb-1.5 block">{field.label}</Label>
                    <Input
                      id={field.id}
                      value={field.value}
                      onChange={(e) => { field.setter(e.target.value); setErrors((prev) => ({ ...prev, [field.id]: "" })); }}
                      placeholder={field.placeholder}
                      className="bg-surface border-border"
                    />
                    {errors[field.id] && <p className="text-destructive text-xs mt-1">{errors[field.id]}</p>}
                  </div>
                ))}
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                  <Button onClick={() => { if (validateStep3()) setStep(4); }} className="bg-gradient-gold text-primary-foreground font-semibold">
                    Review Booking <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Confirm Your Booking</h3>
                <div className="space-y-3 bg-surface rounded-xl p-6 text-sm">
                  <p><span className="text-muted-foreground">Service:</span> <span className="font-medium">{services.find((s) => s.id === selectedService)?.label}</span></p>
                  <p><span className="text-muted-foreground">Date:</span> <span className="font-medium">{date ? format(date, "PPP") : ""}</span></p>
                  <p><span className="text-muted-foreground">Time:</span> <span className="font-medium">{time}</span></p>
                  <p><span className="text-muted-foreground">Name:</span> <span className="font-medium">{name}</span></p>
                  <p><span className="text-muted-foreground">Phone:</span> <span className="font-medium">{phone}</span></p>
                  <p><span className="text-muted-foreground">Email:</span> <span className="font-medium">{email}</span></p>
                  <p><span className="text-muted-foreground">Vehicle:</span> <span className="font-medium">{vehicle}</span></p>
                  <p><span className="text-muted-foreground">Address:</span> <span className="font-medium">{address}</span></p>
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(3)}>Back</Button>
                  <Button onClick={handleSubmit} className="bg-gradient-gold text-primary-foreground font-bold px-8">
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
