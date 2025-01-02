import { Hero } from "@/components/Hero";
import { BookingForm } from "@/components/BookingForm";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-restaurant-cream">
      <Navbar />
      <Hero />
      
      <section
        id="booking-section"
        className="py-16 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl text-center text-restaurant-dark mb-12">
            Reserve Your Table
          </h2>
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default Index;