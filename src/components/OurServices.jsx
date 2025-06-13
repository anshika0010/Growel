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
import GuardImage7 from "../assets/Images/GuardImage7.jpeg";
import GuardImage8 from "../assets/Images/GuardImage8.jpeg";
import GuardImage9 from "../assets/Images/GuardImage9.jpeg";
import GuardImage10 from "../assets/Images/GuardImage10.jpeg";
import GuardImage11 from "../assets/Images/GuardImage11.jpeg";
import GuardImage12 from "../assets/Images/GuardImage12.jpeg";
import GuardImage13 from "../assets/Images/GuardImage13.jpeg";
import GuardImage14 from "../assets/Images/GuardImage14.jpeg";
import GuardImage15 from "../assets/Images/GuardImage15.jpeg";

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: "corporate-security",
      icon: <Building className="h-5 w-5" />,
      title: "Corporate Security",
      shortDesc: "Comprehensive security solutions for corporate environments",
      bgImage: GuardImage7,
    },
    {
      id: "industrial-security",
      icon: <Shield className="h-5 w-5" />,
      title: "Industrial Security",
      shortDesc:
        "Specialized security for manufacturing and industrial facilities",
      bgImage: GuardImage9,
    },
    {
      id: "event-security",
      icon: <Calendar className="h-5 w-5" />,
      title: "Event Security",
      shortDesc: "Professional security personnel for events of all sizes",
      bgImage: GuardImage10,
    },
    {
      id: "residential-security",
      icon: <Home className="h-5 w-5" />,
      title: "Residential Security",
      shortDesc: "Protecting homes, apartments, and residential complexes",
      bgImage: GuardImage11,
    },
    {
      id: "manpower-outsourcing",
      icon: <Users className="h-5 w-5" />,
      title: "Manpower Outsourcing",
      shortDesc: "Qualified personnel for various organizational needs",
      bgImage: GuardImage12,
    },
    {
      id: "security-consulting",
      icon: <FileSearch className="h-5 w-5" />,
      title: "Security Consulting",
      shortDesc: "Expert advice on security infrastructure and protocols",
      bgImage: GuardImage13,
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

        {/* Service Cards */}
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:border-red-600 transition-all duration-300 border-2 border-red-200"
            >
              {/* Image Section */}
              <div
                className="relative h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/40 group-hover:bg-white/10 transition-all duration-300 z-0"></div>

                {/* Icon */}
                <div className="relative z-10 flex h-full items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-red-100 group-hover:text-red-600 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Text Below the Image */}
              <div className="bg-white p-4">
                <h3 className="mb-2 text-xl font-semibold text-red-600">
                  {service.title}
                </h3>
                <p className="text-black">{service.shortDesc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
