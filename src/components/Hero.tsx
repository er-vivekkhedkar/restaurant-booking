import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden animate-fadeIn">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center space-y-6 p-8">
        <h1 className="font-playfair text-5xl md:text-7xl text-white font-bold">
          La Belle Cuisine
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Experience fine dining at its best. Book your table today and indulge in
          an unforgettable culinary journey.
        </p>
        <Button
          className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white px-8 py-6 text-lg"
          onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Reserve a Table
        </Button>
      </div>
    </div>
  );
}