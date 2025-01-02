import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-restaurant-cream">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-5xl text-center mb-12">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Welcome to La Belle Cuisine, where traditional French culinary artistry meets modern dining excellence. 
              Established in 2010, our restaurant has been serving authentic French cuisine in an elegant and comfortable atmosphere.
            </p>
            <p className="text-lg">
              Our chef, with over 20 years of experience in French cuisine, creates dishes that celebrate the rich traditions 
              of French cooking while incorporating contemporary techniques and local ingredients.
            </p>
          </div>
          <div className="relative h-[400px]">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;