import { useState, useEffect } from "react";
// import logo from "../assets/logo.webp";
import logo from "/images/logo.webp";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-1 flex h-16 items-center justify-between">
        <div className="flex items-center ">
          <Link to="/">
            {/* <h1 className="text-xl md:text-2xl font-bold">Growel Securitas</h1> */}
            <img src={logo} alt="logo" className="w-24" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                pathname === link.href ? "text-red-600" : "text-gray-500"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Contact + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Phone className="mr-3 h-5 w-5 text-red-500" />
            <span>+91 9811972456</span>
          </div>
          <Link
            to="/contact"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-400 text-sm font-medium"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-sm z-40">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setPathname(link.href);
                }}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === link.href ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Phone className="mr-3 h-5 w-5 text-red-500" />
              <span>+91 9811972456 </span>
            </div>
            <a
              to="/contact"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded text-center hover:bg-blue-700 text-sm font-medium"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
