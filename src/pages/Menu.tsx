import { Navbar } from "@/components/Navbar";

const Menu = () => {
  return (
    <div className="min-h-screen bg-restaurant-cream">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-5xl text-center mb-12">Our Menu</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Starters */}
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl mb-6">Starters</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">French Onion Soup</h3>
                  <p className="text-gray-600">Caramelized onions, beef broth, crusty bread</p>
                </div>
                <span className="font-semibold">$12</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Escargots de Bourgogne</h3>
                  <p className="text-gray-600">Burgundy snails, garlic herb butter</p>
                </div>
                <span className="font-semibold">$16</span>
              </div>
            </div>
          </div>

          {/* Main Courses */}
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl mb-6">Main Courses</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Coq au Vin</h3>
                  <p className="text-gray-600">Braised chicken in red wine sauce</p>
                </div>
                <span className="font-semibold">$32</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Beef Bourguignon</h3>
                  <p className="text-gray-600">Classic French beef stew</p>
                </div>
                <span className="font-semibold">$36</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;