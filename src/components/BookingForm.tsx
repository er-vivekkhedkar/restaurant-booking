import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  guests: string;
  time: string;
};

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

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log("Booking submitted:", { ...data, date });
    toast({
      title: "Booking Confirmed!",
      description: `Your table has been reserved for ${format(
        date!,
        "MMMM do, yyyy"
      )} at ${data.time}`,
    });
  };

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
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
      >
        Book Table
      </Button>
    </form>
  );
}