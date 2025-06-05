import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Users,
  Award,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "/images/logo.webp";
export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
    alert("Thanks for subscribing to Growel Securitas updates!");
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 to-red-900 text-white">
      <div className="h-2 w-full bg-gradient-to-r from-red-600 to-red-800"></div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src={logo} className="h-12" alt="logo" />
              <p className="mt-1 text-sm text-slate-400">
                Manpower Management Pvt Ltd
              </p>
            </div>
            <p className="mb-6 text-slate-300">
              Providing professional security services and manpower solutions
              with integrity, reliability and excellence since 1995.
            </p>
            <div className="flex items-center space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  href="#"
                  key={idx}
                  className="group flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition hover:bg-red-600"
                >
                  <Icon className="h-4 w-4 text-slate-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 h-0.5 w-12 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              {[
                {
                  icon: <Shield className="h-4 w-4" />,
                  label: "Security Services",
                },
                {
                  icon: <Users className="h-4 w-4" />,
                  label: "Manpower Outsourcing",
                },
                {
                  icon: <Award className="h-4 w-4" />,
                  label: "Professional Staffing",
                },
                {
                  icon: <Clock className="h-4 w-4" />,
                  label: "24/7 Security Solutions",
                },
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="group flex items-center text-slate-300 hover:text-white"
                  >
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-red-500 group-hover:bg-red-600 group-hover:text-white">
                      {service.icon}
                    </span>
                    <span className="relative">
                      {service.label}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 h-0.5 w-12 bg-red-600"></span>
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {["About Us", "Our Team", "Gallery", "Contact Us"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="group inline-flex items-center text-slate-300 hover:text-white"
                    >
                      <ArrowRight className="mr-2 h-3 w-3 text-red-500 group-hover:translate-x-1 transition-transform" />
                      <span className="relative">
                        {link}
                        <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="mb-6 text-lg font-semibold relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 h-0.5 w-12 bg-red-600"></span>
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-red-500" />
                <span>
                  Address: Growel Complex, Main, Dadri Main Rd, Block I,
                  <br></br>Sector 41, Noida, Uttar Pradesh 201303
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-red-500" />
                <a href="tel:+9195826 68190" className="hover:text-white">
                  +9195826 68190
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-red-500" />
                <a
                  href="mailto:info@growelsecuritas.com"
                  className="hover:text-white"
                >
                  info@growelsecuritas.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 text-red-500" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              "ISO 9001:2015 Certified",
              "PSARA Compliant",
              "MSME Registered",
              "Trusted by 500+ Clients",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center rounded-lg bg-slate-800 px-4 py-2"
              >
                <Shield className="mr-2 h-5 w-5 text-red-500" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Growel Securitas & Manpower Management
            Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
