"use client";
import logo from "/images/logoai.png";
import { Link } from "react-router-dom";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Overview */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Growel" className="h-28" />
            </div>
            <p className="text-slate-400 mb-6">
              Professional security manpower services providing trained
              personnel for all your security needs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Security Guards", href: "/services#security-guards" },
                { name: "Housekeeping Staff", href: "/services#housekeeping" },
                { name: "Bouncers", href: "/services#bouncers" },
                { name: "Armed Personnel", href: "/services#armed-personnel" },
                { name: "Event Security", href: "/services#event-security" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-blue-600"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact Us", href: "/contact" },
                { name: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Growel Complex ,Dadri Road, Sector-41, Noida-201303
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-slate-400">+91 9811580318</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-slate-400">
                  sales@growelsecuritas4u.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Growel Securitas & Manpower
            Management Services Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
