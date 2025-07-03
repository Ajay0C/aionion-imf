import { Link, useLocation } from "wouter";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import aionionLogo from "@assets/ 01 Logo_1751215843230.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Renewals", href: "/renewals" },
  { name: "Claims", href: "/claims" },
  { name: "Knowledge Centre", href: "/knowledge" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="glassmorphism dark:glassmorphism-dark sticky top-0 z-50 border-b border-n70/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center">
              <img 
                src={aionionLogo} 
                alt="Aionion Logo" 
                className="w-20 h-12 object-contain"
              />
              <span className="ml-3 text-blue-brand dark:text-blue-400 font-bold text-lg">
                Aionion Insurance
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  location === item.href
                    ? "text-blue-brand dark:text-blue-400"
                    : "text-n20 dark:text-gray-300 hover:text-blue-brand dark:hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                console.log("Theme toggle clicked, current theme:", theme);
                const newTheme = theme === "light" ? "dark" : "light";
                console.log("Setting theme to:", newTheme);
                setTheme(newTheme);
              }}
              className="glassmorphism dark:glassmorphism-dark hover:bg-blue-brand/10 dark:hover:bg-gray-700"
            >
              {theme === "light" ? (
                <i className="fas fa-moon text-n20 dark:text-gray-300" />
              ) : (
                <i className="fas fa-sun text-yellow-400" />
              )}
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden glassmorphism dark:glassmorphism-dark hover:bg-blue-brand/10 dark:hover:bg-gray-700"
                >
                  <i className="fas fa-bars text-n20 dark:text-gray-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-n5 dark:bg-gray-900 border-gray-700 text-white">
                <div className="space-y-6 pt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-xl font-medium transition-colors ${
                        location === item.href
                          ? "text-blue-400"
                          : "text-white hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
