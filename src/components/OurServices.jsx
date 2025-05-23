import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Shield,
  Users,
  Building,
  Briefcase,
  Home,
  Calendar,
  FileSearch,
} from "lucide-react";

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: "corporate-security",
      icon: <Building className="h-5 w-5" />,
      title: "Corporate Security",
      shortDesc: "Comprehensive security solutions for corporate environments",
    },
    {
      id: "industrial-security",
      icon: <Shield className="h-5 w-5" />,
      title: "Industrial Security",
      shortDesc:
        "Specialized security for manufacturing and industrial facilities",
    },
    {
      id: "event-security",
      icon: <Calendar className="h-5 w-5" />,
      title: "Event Security",
      shortDesc: "Professional security personnel for events of all sizes",
    },
    {
      id: "residential-security",
      icon: <Home className="h-5 w-5" />,
      title: "Residential Security",
      shortDesc: "Protecting homes, apartments, and residential complexes",
    },
    {
      id: "manpower-outsourcing",
      icon: <Users className="h-5 w-5" />,
      title: "Manpower Outsourcing",
      shortDesc: "Qualified personnel for various organizational needs",
    },
    {
      id: "security-consulting",
      icon: <FileSearch className="h-5 w-5" />,
      title: "Security Consulting",
      shortDesc: "Expert advice on security infrastructure and protocols",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Decorative Background */}
      <div className="absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-red-50 opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-red-50 opacity-70 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700"
        >
          <Briefcase className="mr-2 h-4 w-4" />
          Comprehensive Security Solutions
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Our <span className="text-red-600">Professional Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
        >
          Discover our range of specialized security and manpower solutions
          designed to meet the unique needs of your organization.
        </motion.p>

        {/* Services Cards Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer rounded-xl border-2 border-red-300g-white p-6 shadow-lg hover:border-red-200 transition-all duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700 group-hover:bg-red-100 group-hover:text-red-600 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mb-4 text-slate-600">{service.shortDesc}</p>
              <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-red-500 transition-colors duration-300">
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
