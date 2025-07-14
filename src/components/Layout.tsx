import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Get Involved", href: "/get-involved" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/cropped-Untitled-1.png" className="w-24 h-30" alt="Josey's Health Corner" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-foreground/80"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="hero" size="sm" className="ml-4">
                Donate Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "text-base font-medium px-2 py-1 rounded-md transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="hero" size="sm" className="w-fit mx-2">
                  Donate Now
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* WhatsApp and Call Widgets */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        <Button
          variant="floating"
          size="icon"
          className="h-12 w-12 rounded-full shadow-floating hover:scale-110 transition-transform"
          onClick={() => window.open("https://wa.me/233XXXXXXXXX", "_blank")}
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full shadow-floating hover:scale-110 transition-transform border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={() => window.open("tel:+233XXXXXXXXX", "_blank")}
        >
          <Phone className="h-5 w-5" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Link to="/" className="flex items-center space-x-2">
                <img src="/cropped-Untitled-1.png" className="w-24 h-30" alt="Josey's Health Corner" />
              </Link>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Empowering health in Ghana through education, outreach, and community initiatives
                tailored for those in need.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  LinkedIn
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-white/80">
                <p>Accra, Ghana</p>
                <p>+233 XX XXX XXXX</p>
                <p>info@joseyshealth.org</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80">© 2025 Josey's Health Corner. All rights reserved.</p>
            <p className="text-white/60 text-sm mt-2 md:mt-0">
              Powered by: Josey's Health Corner.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}