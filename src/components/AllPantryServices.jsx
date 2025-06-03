"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import pantryImg from "../assets/Images/pantryservices.jpg";
import { Coffee } from "lucide-react";

const AllPantryServices = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const pantryServices = [
    {
      id: 1,
      title: "Pantry Management",
      description:
        "Boost operational efficiency with our reliable pantry staff trained for hospitality and office support.",
      icon: <Coffee className="h-8 w-8" />,
      image: pantryImg,
    },
    {
      id: 1,
      title: "Pantry Management",
      description:
        "Boost operational efficiency with our reliable pantry staff trained for hospitality and office support.",
      icon: <Coffee className="h-8 w-8" />,
      image: pantryImg,
    },
    {
      id: 1,
      title: "Pantry Management",
      description:
        "Boost operational efficiency with our reliable pantry staff trained for hospitality and office support.",
      icon: <Coffee className="h-8 w-8" />,
      image: pantryImg,
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
            Professional <span className="text-red-500">Pantry Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ensure a smooth office experience with our well-trained pantry staff
            offering top-notch hospitality and support services.
          </p>
        </motion.div>

        {/* Pantry Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 justify-center">
          {pantryServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              animate={visible ? "visible" : "hidden"}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all hover:-translate-y-1"
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-500"
                  style={{
                    transform:
                      hovered === service.id ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <div className="mb-4 mx-auto bg-blue-100 p-3 rounded-full w-fit text-red-500">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-red-500 text-white text-center rounded-xl p-10 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Trained Pantry Staff?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact our team today to deploy experienced pantry professionals
            tailored for your office, facility, or organization.
          </p>
          <a href="/contact">
            <button className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all duration-300">
              Contact Us Now
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AllPantryServices;
