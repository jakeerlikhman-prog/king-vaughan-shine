import { useEffect, useState } from "react";
import { getBookings, Booking } from "@/lib/bookings";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    setBookings(getBookings().reverse());
  }, []);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Site
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Booking Submissions</h1>
          <span className="text-sm text-muted-foreground">({bookings.length} total)</span>
        </div>

        {bookings.length === 0 ? (
          <div className="glass-card rounded-xl p-12 text-center">
            <p className="text-muted-foreground">No bookings yet.</p>
          </div>
        ) : (
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date Booked</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Appt Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Vehicle</TableHead>
                    <TableHead>Address</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((b) => (
                    <TableRow key={b.id}>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(b.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-medium">{b.service}</TableCell>
                      <TableCell>{b.date}</TableCell>
                      <TableCell>{b.time}</TableCell>
                      <TableCell>{b.name}</TableCell>
                      <TableCell>{b.phone}</TableCell>
                      <TableCell>{b.email}</TableCell>
                      <TableCell>{b.vehicle}</TableCell>
                      <TableCell>{b.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
