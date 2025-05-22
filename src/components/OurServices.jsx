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
  Headset,
  FileSearch,
} from "lucide-react";

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  const services = [
    {
      id: "corporate-security",
      icon: <Building className="h-5 w-5" />,
      title: "Corporate Security",
      shortDesc: "Comprehensive security solutions for corporate environments",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Our corporate security services provide comprehensive protection for your business premises, assets, and personnel. We deploy highly trained security professionals who understand the unique challenges of corporate environments.",
      features: [
        "Access control and visitor management",
        "Executive protection services",
        "Emergency response planning",
        "Security audits and risk assessments",
        "Integration with existing security systems",
      ],
    },
    {
      id: "industrial-security",
      icon: <Shield className="h-5 w-5" />,
      title: "Industrial Security",
      shortDesc:
        "Specialized security for manufacturing and industrial facilities",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Protect your industrial facilities, equipment, and operations with our specialized industrial security services. We understand the unique security challenges faced by manufacturing plants, warehouses, and industrial complexes.",
      features: [
        "Perimeter security and surveillance",
        "Material and inventory protection",
        "Fire safety and emergency response",
        "Access control for restricted areas",
        "24/7 monitoring and rapid response",
      ],
    },
    {
      id: "event-security",
      icon: <Calendar className="h-5 w-5" />,
      title: "Event Security",
      shortDesc: "Professional security personnel for events of all sizes",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Ensure the safety and security of your events with our professional event security services. From corporate gatherings to large public events, our trained personnel maintain order while providing a reassuring presence.",
      features: [
        "Crowd management and control",
        "VIP protection services",
        "Entry point screening and access control",
        "Emergency response coordination",
        "Discreet and professional security presence",
      ],
    },
    {
      id: "residential-security",
      icon: <Home className="h-5 w-5" />,
      title: "Residential Security",
      shortDesc: "Protecting homes, apartments, and residential complexes",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Our residential security services provide peace of mind for homeowners, apartment residents, and residential complex managers. We offer customized security solutions that protect your property and loved ones.",
      features: [
        "Gated community security management",
        "Apartment complex security",
        "Visitor screening and management",
        "Patrol services and incident response",
        "Security system monitoring and integration",
      ],
    },
    {
      id: "manpower-outsourcing",
      icon: <Users className="h-5 w-5" />,
      title: "Manpower Outsourcing",
      shortDesc: "Qualified personnel for various organizational needs",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Our manpower outsourcing services provide qualified personnel across various roles and industries. We handle recruitment, training, and management, allowing you to focus on your core business operations.",
      features: [
        "Skilled and semi-skilled workforce",
        "Administrative and support staff",
        "Temporary and permanent staffing solutions",
        "Payroll and compliance management",
        "Performance monitoring and quality assurance",
      ],
    },
    {
      id: "security-consulting",
      icon: <FileSearch className="h-5 w-5" />,
      title: "Security Consulting",
      shortDesc: "Expert advice on security infrastructure and protocols",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Our security consulting services provide expert guidance on developing comprehensive security strategies. We assess your current security posture and recommend improvements to protect your assets and personnel.",
      features: [
        "Security audits and vulnerability assessments",
        "Security system design and implementation",
        "Emergency response planning",
        "Security training programs",
        "Compliance with security regulations",
      ],
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
      {/* Decorative Elements */}
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

        {/* Services Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group cursor-pointer rounded-xl border-2 p-6 shadow-lg transition-all duration-300 ${
                activeTab === index
                  ? "border-red-600 bg-white shadow-red-100"
                  : "border-slate-100 bg-white hover:border-red-200"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? "bg-red-600 text-white"
                    : "bg-slate-100 text-slate-700 group-hover:bg-red-100 group-hover:text-red-600"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mb-4 text-slate-600">{service.shortDesc}</p>
              <div
                className={`flex items-center text-sm font-medium transition-colors duration-300 ${
                  activeTab === index
                    ? "text-red-600"
                    : "text-slate-500 group-hover:text-red-500"
                }`}
              >
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed View */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="overflow-hidden rounded-2xl bg-slate-50 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              key={`image-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] overflow-hidden lg:h-auto"
            >
              <img
                src={services[activeTab].image}
                alt={services[activeTab].title}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="mb-2 text-2xl font-bold">
                  {services[activeTab].title}
                </h3>
                <p className="max-w-md text-white/80">
                  {services[activeTab].shortDesc}
                </p>
              </div>
            </motion.div>
            <motion.div
              key={`details-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8"
            >
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {services[activeTab].title}
              </h3>
              <p className="mb-6 text-slate-600">
                {services[activeTab].description}
              </p>
              <h4 className="mb-3 font-semibold text-slate-900">
                Key Features:
              </h4>
              <ul className="mb-8 space-y-3">
                {services[activeTab].features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mr-3 mt-1 rounded-full bg-red-100 p-1 text-red-600">
                      <Shield className="h-3 w-3" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center rounded-full bg-red-600 px-6 py-3 font-medium text-white shadow-lg shadow-red-200 transition-all hover:bg-red-700"
              >
                Request This Service
                <ChevronRight className="ml-2 h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 grid grid-cols-1 gap-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-3"
        >
          <div>
            <Headset className="mb-4 h-8 w-8 text-red-600" />
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              Customized Solutions
            </h3>
            <p className="text-slate-600">
              We understand that every client has unique security requirements.
              Our team works closely with you to develop tailored security
              solutions that address your specific needs and challenges.
            </p>
          </div>
          <div>
            <Shield className="mb-4 h-8 w-8 text-red-600" />
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              Trained Professionals
            </h3>
            <p className="text-slate-600">
              All our security personnel undergo rigorous training and
              certification processes. We ensure that only the most qualified
              and reliable professionals are assigned to your security detail.
            </p>
          </div>
          <div>
            <Calendar className="mb-4 h-8 w-8 text-red-600" />
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              Flexible Scheduling
            </h3>
            <p className="text-slate-600">
              Whether you need security services for a one-time event or ongoing
              protection, we offer flexible scheduling options to accommodate
              your timeline and budget requirements.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900">
            Need a customized security solution?
          </h3>
          <p className="mt-3 text-slate-600">
            Contact our team for a detailed consultation and personalized
            security assessment.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 rounded-full bg-red-600 px-8 py-3 font-medium text-white shadow-lg shadow-red-200 transition-all hover:bg-red-700"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
export default OurServices;
