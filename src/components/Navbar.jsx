import { useState, useEffect } from "react";
// import logo from "../assets/logo.webp";
import logo from "/images/logo.webp";
import { Link } from "react-router-dom";
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
      <div className="max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
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
            <svg
              className="h-4 w-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 5h2l3.6 7.59-1.35 2.44A1 1 0 008 17h10v-2H9.42a1 1 0 01-.94-.66L14 9h4a1 1 0 000-2h-5.42" />
            </svg>
            <span>+91 9811580318 </span>
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
              <svg
                className="h-4 w-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 5h2l3.6 7.59-1.35 2.44A1 1 0 008 17h10v-2H9.42a1 1 0 01-.94-.66L14 9h4a1 1 0 000-2h-5.42" />
              </svg>
              <span>+91 9811580318 </span>
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

// import React from "react";
// import { Link } from "react-router-dom"; // Use this if you're using React Router

// const Header = () => {
//   return (
//     <header className="bg-navy-blue text-white">
//       <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//         {/* Logo and Brand Name */}
//         <div className="flex items-center space-x-2">
//           <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
//             <span className="font-bold text-white">GS</span>
//           </div>
//           <h1 className="text-xl md:text-2xl font-bold">Growel Securitas</h1>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-blue-300 transition-colors">
//             Home
//           </Link>
//           <Link to="/services" className="hover:text-blue-300 transition-colors">
//             Services
//           </Link>
//           <Link to="/gallery" className="hover:text-blue-300 transition-colors">
//             Gallery
//           </Link>
//           <Link to="/testimonials" className="hover:text-blue-300 transition-colors">
//             Testimonials
//           </Link>
//           <Link to="/contact" className="hover:text-blue-300 transition-colors">
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-white">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
