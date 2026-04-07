export interface Booking {
  id: string;
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  address: string;
  customInquiry?: string;
  createdAt: string;
}

export const saveBooking = (booking: Omit<Booking, "id" | "createdAt">): Booking => {
  const bookings = getBookings();
  const newBooking: Booking = {
    ...booking,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  bookings.push(newBooking);
  localStorage.setItem("kv-bookings", JSON.stringify(bookings));
  return newBooking;
};

export const getBookings = (): Booking[] => {
  const data = localStorage.getItem("kv-bookings");
  return data ? JSON.parse(data) : [];
};
