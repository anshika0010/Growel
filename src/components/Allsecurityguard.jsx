"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import parkingguard from "../assets/Images/parkingguard.jpeg";
import residentialguard from "../assets/Images/residentialguard.webp";
import eventguard from "../assets/Images/eventsecurity1.png";
import securityservices from "../assets/Images/securityservices.jpeg";
import GuardImage13 from "../assets/Images/GuardImage13.jpeg";
import mallguard from "../assets/Images/mallguard.jpeg";
import {
  Shield,
  Building,
  Car,
  ShoppingBag,
  Home,
  Factory,
  Calendar,
  Coffee,
} from "lucide-react";

const AllSecurityGuard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const coreServices = [
    {
      id: 1,
      title: "Security Manpower",
      description:
        "From residential and commercial security to events and personal protection, our trained guards ensure top-tier safety.",
      icon: <Shield className="h-8 w-8" />,
      image: "/images/security.jpg",
    },
    {
      id: 2,
      title: "Housekeeping Services",
      description:
        "We maintain clean and hygienic environments through professional housekeeping tailored to homes and offices.",
      icon: <Home className="h-8 w-8" />,
      image: "/images/housekeeping.jpg",
    },
    {
      id: 3,
      title: "Pantry Management",
      description:
        "Boost operational efficiency with our reliable pantry staff trained for hospitality and office support.",
      icon: <Coffee className="h-8 w-8" />,
      image: "/images/pantry.jpg",
    },
  ];

  const securitySpecialties = [
    {
      id: 4,
      title: "Residential Security",
      description:
        "24/7 trained guards for housing societies, villas, and apartments.",
      icon: <Home className="h-8 w-8" />,
      image: residentialguard,
    },
    {
      id: 5,
      title: "Corporate & Office Security",
      description: "Access control, asset protection, and visitor monitoring.",
      icon: <Building className="h-8 w-8" />,
      image: securityservices,
    },
    {
      id: 6,
      title: "Parking & Vehicle Security",
      description:
        "Safeguarding parking lots and ensuring organized vehicle flow.",
      icon: <Car className="h-8 w-8" />,
      image: parkingguard,
    },
    {
      id: 7,
      title: "Retail & Mall Security",
      description:
        "Loss prevention and customer protection in commercial spaces.",
      icon: <ShoppingBag className="h-8 w-8" />,
      image: mallguard,
    },
    {
      id: 8,
      title: "Industrial Security",
      description:
        "Comprehensive coverage for factories, plants, and warehouses.",
      icon: <Factory className="h-8 w-8" />,
      image: GuardImage13,
    },
    {
      id: 9,
      title: "Event Security",
      description: "Crowd control, entry management, and VVIP protection.",
      icon: <Calendar className="h-8 w-8" />,
      image: eventguard,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Comprehensive{" "}
            <span className="text-red-500">Security & Support</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From elite security guards to facility support like housekeeping and
            pantry staff, Growel Securitas is your trusted partner for safety
            and efficiency.
          </p>
        </motion.div>

        {/* Specialized Security Services */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
            Specialized <span className="text-red-500">Guard Services</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {securitySpecialties.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all hover:-translate-y-1"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-500"
                    style={{
                      transform:
                        hoveredCard === service.id ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="mb-4 mx-auto bg-blue-100 p-3 rounded-full w-fit text-red-500">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-red-500 text-white text-center rounded-xl p-10 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Looking for Custom Security Solutions?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Let our experts design a tailored plan for your residential,
            commercial, or event security needs.
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all duration-300">
            Request Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AllSecurityGuard;
