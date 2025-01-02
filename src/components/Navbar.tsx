import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-playfair text-2xl font-bold text-restaurant-primary">
              La Belle Cuisine
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-restaurant-dark hover:text-restaurant-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="bg-restaurant-primary hover:bg-restaurant-primary/90"
              onClick={() =>
                document
                  .getElementById("booking-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Table
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-restaurant-dark hover:text-restaurant-primary"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-restaurant-dark hover:text-restaurant-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="w-full mt-2 bg-restaurant-primary hover:bg-restaurant-primary/90"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document
                    .getElementById("booking-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Table
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}