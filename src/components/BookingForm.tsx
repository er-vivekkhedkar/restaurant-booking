import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { bookingService } from "@/services/bookingService";
import type { BookingData } from "@/services/bookingService";

const timeSlots = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];

type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  guests: string;
  time: string;
};

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>();

  // Fetch existing bookings for the selected date
  const { data: existingBookings } = useQuery({
    queryKey: ['bookings', date],
    queryFn: () => date ? bookingService.getBookings(date) : Promise.resolve([]),
    enabled: !!date,
  });

  // Create booking mutation
  const createBookingMutation = useMutation({
    mutationFn: (data: BookingData) => bookingService.createBooking(data),
    onSuccess: () => {
      toast({
        title: "Booking Confirmed!",
        description: `Your table has been reserved for ${format(
          date!,
          "MMMM do, yyyy"
        )}`,
      });
      reset();
    },
    onError: (error) => {
      console.error('Booking error:', error);
      toast({
        title: "Booking Failed",
        description: "Unable to complete your booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingFormData) => {
    if (!date) return;
    
    console.log("Submitting booking:", { ...data, date });
    
    createBookingMutation.mutate({
      ...data,
      date,
    });
  };

  // Filter out already booked time slots
  const availableTimeSlots = timeSlots.filter(slot => {
    if (!existingBookings) return true;
    return !existingBookings.some((booking: any) => booking.time === slot);
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto"
    >
      <div className="space-y-4">
        <div>
          <Label>Select Date</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            disabled={(date) => date < new Date()}
          />
        </div>

        <div>
          <Label htmlFor="time">Select Time</Label>
          <Select {...register("time", { required: true })}>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {availableTimeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.time && (
            <span className="text-red-500 text-sm">Time is required</span>
          )}
        </div>

        <div>
          <Label htmlFor="guests">Number of Guests</Label>
          <Select {...register("guests", { required: true })}>
            <SelectTrigger>
              <SelectValue placeholder="Select number of guests" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.guests && (
            <span className="text-red-500 text-sm">Number of guests is required</span>
          )}
        </div>

        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            {...register("name", { required: true })}
            className="w-full"
            placeholder="John Doe"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            type="email"
            className="w-full"
            placeholder="john@example.com"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Valid email is required</span>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            {...register("phone", {
              required: true,
              pattern: /^[0-9-+\s()]*$/,
            })}
            className="w-full"
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">
              Valid phone number is required
            </span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-restaurant-primary hover:bg-restaurant-primary/90"
        disabled={createBookingMutation.isPending}
      >
        {createBookingMutation.isPending ? "Booking..." : "Book Table"}
      </Button>
    </form>
  );
}