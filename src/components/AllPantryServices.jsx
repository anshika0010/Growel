"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import pantryImg from "../assets/Images/pantryImage.jpeg";
import pantryImg2 from "../assets/Images/beverage.jpg";
import pantryImg3 from "../assets/Images/guest.jpeg";

import { Coffee, Utensils, Users } from "lucide-react";
import { Helmet } from "react-helmet";
import ButtonAnimation from "./ButtonAnimated";
import { Link } from "react-router-dom";

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
        "Our staff ensures your office pantry remains clean, stocked, and functional at all times.",
      icon: <Coffee className="h-8 w-8" />,
      image: pantryImg,
    },
    {
      id: 2,
      title: "Beverage Preparation",
      description:
        "Trained staff to prepare and serve tea, coffee, and refreshments for meetings and daily operations.",
      icon: <Utensils className="h-8 w-8" />,
      image: pantryImg2,
    },
    {
      id: 3,
      title: "Guest Hospitality",
      description:
        "We provide courteous and well-mannered pantry boys to serve guests and employees professionally.",
      icon: <Users className="h-8 w-8" />,
      image: pantryImg3,
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
    <>
      <Helmet>
        <title>Professional Pantry Services | Growel Securitas</title>
        <meta
          name="description"
          content="Hire professional pantry staff for beverage preparation, guest service, and pantry management. Growel Securitas provides trained hospitality manpower across offices and facilities."
        />
        <link
          rel="canonical"
          href="https://growelsecuritas4u.in/pantry-services"
        />
      </Helmet>

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
              Ensure your workplace runs smoothly with our well-trained pantry
              staff offering reliable support in beverage preparation, pantry
              maintenance, and guest service.
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
                  <h4 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h4>
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
              Contact our team today to deploy professional pantry staff
              tailored to your business needs.
            </p>
            <ButtonAnimation className="mt-6 rounded-full border border-red-600 px-8 py-3 font-medium text-black shadow-lg shadow-red-200 transition-all">
              <Link to="/contact">Contact Us Now</Link>
            </ButtonAnimation>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AllPantryServices;
