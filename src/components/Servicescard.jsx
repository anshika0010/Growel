import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Home, Coffee } from "lucide-react";
import housekeeping from "../assets/Images/housekeeping.jpeg";
import pantryservices from "../assets/Images/pantryservices.jpg";
import securityservices from "../assets/Images/securityservices.jpeg";

const Servicescard = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Security Services",
      description:
        "From residential and commercial security to specialized event management and personal protection, our expert guards are prepared for any security challenge.",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      image: securityservices,
    },
    {
      id: 2,
      title: "Housekeeping Services",
      description:
        "Beyond security, we ensure pristine and hygienic environments with our dedicated housekeeping teams, contributing to a professional and welcoming atmosphere.",
      icon: <Home className="h-10 w-10 text-blue-600" />,
      image: housekeeping,
    },
    {
      id: 3,
      title: "Pantry Services",
      description:
        "Our efficient pantry services ensure smooth operations and convenience, adding another layer of support to your business or residential needs.",
      icon: <Coffee className="h-10 w-10 text-blue-600" />,
      image: pantryservices,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Elevating Security and Support with{" "}
            <span className="text-red-600">Growel Securitas Services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            At Growel Securitas Services, we don't just offer security; we
            provide peace of mind through a comprehensive suite of manpower
            services tailored to your unique needs. Our highly trained personnel
            are equipped to handle a diverse range of challenges, ensuring a
            safe and efficient environment for our clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-700 ease-in-out"
                  style={{
                    transform:
                      activeService === service.id ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                {/* <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-50 rounded-full">
                    {service.icon}
                  </div>
                </div> */}
                <p className="text-gray-600">{service.description}</p>
                <Link to={"/all-types-of-security"}>
                  <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Servicescard;
