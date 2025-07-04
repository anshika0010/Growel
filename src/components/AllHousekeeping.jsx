import React, { useState, useEffect } from "react";
import { Building, Home, Factory } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AllHousekeeping = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const services = [
    {
      id: 10,
      title: "Office Housekeeping",
      description:
        "Maintain a clean and hygienic office environment with our well-trained staff for daily upkeep and sanitation.",
      icon: <Building className="h-8 w-8" />,
    },
    {
      id: 11,
      title: "Residential Housekeeping",
      description:
        "Our housekeeping services for homes and apartments ensure your spaces remain spotless and welcoming.",
      icon: <Home className="h-8 w-8" />,
    },
    {
      id: 12,
      title: "Commercial Housekeeping",
      description:
        "Perfect for malls, hospitals, schools, and retail spaces — thorough cleaning and maintenance solutions.",
      icon: <Factory className="h-8 w-8" />,
    },
  ];

  return (
    <>
      <div className="my-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Professional{" "}
          <span className="text-red-500">Housekeeping Services</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              animate={visible ? "visible" : "hidden"}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all hover:-translate-y-1 p-6 text-center"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-4 mx-auto bg-blue-100 p-3 rounded-full w-fit text-red-500">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-red-500 text-white text-center rounded-xl p-10 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Looking for Custom Security Solutions?
        </h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Let our experts design a tailored plan for your residential,
          commercial, or event security needs.
        </p>
        <Link to="/contact">
          <button className="mt-6 rounded-full bg-white border border-red-600 px-8 py-3 font-medium text-black shadow-lg shadow-red-200 transition-all">
            Request Consultation
          </button>
        </Link>
      </div>
    </>
  );
};

export default AllHousekeeping;
