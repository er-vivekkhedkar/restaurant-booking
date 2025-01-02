import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-restaurant-cream">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-5xl text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Location</h2>
              <p>123 Gourmet Street</p>
              <p>Culinary District</p>
              <p>Foodie City, FC 12345</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-2">Hours</h2>
              <p>Monday - Friday: 5:00 PM - 10:00 PM</p>
              <p>Saturday - Sunday: 4:00 PM - 11:00 PM</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@labellecuisine.com</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input id="name" required />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input id="email" type="email" required />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea id="message" required className="min-h-[150px]" />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;