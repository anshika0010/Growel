import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Award, Users, Building, CheckCircle } from "lucide-react";

const Trusted = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const trustedCompanies = [
    { name: "Tech Solutions Inc.", industry: "Technology" },
    { name: "Global Finance Ltd.", industry: "Banking" },
    { name: "Metro Hospitals", industry: "Healthcare" },
    { name: "Horizon Hotels", industry: "Hospitality" },
    { name: "Pinnacle Properties", industry: "Real Estate" },
    { name: "Evergreen Retail", industry: "Retail" },
    { name: "Skyline Manufacturing", industry: "Manufacturing" },
    { name: "Quantum Logistics", industry: "Logistics" },
    { name: "Elite Educational Institutes", industry: "Education" },
    { name: "Secure Pharmaceuticals", industry: "Pharmaceutical" },
  ];

  const stats = [
    {
      icon: <Building className="h-6 w-6" />,
      value: "500+",
      label: "Clients Nationwide",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "5,000+",
      label: "Security Personnel",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      value: "25+",
      label: "Years of Excellence",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      value: "100%",
      label: "Client Satisfaction",
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

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700"
          >
            <Award className="mr-2 h-4 w-4" />
            Trusted Security Partner
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Trusted by Leading Organizations{" "}
            <span className="text-red-600">Across India</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
          >
            For over two decades, Growel Securitas has been the preferred
            security and manpower partner for businesses that demand excellence
            and reliability.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg shadow-slate-100"
            >
              <div className="mb-3 rounded-full bg-red-50 p-3 text-red-600">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                {stat.value}
              </h3>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted Companies Carousel */}
        <div className="mb-12 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12 text-2xl font-semibold text-slate-900"
          >
            Our Esteemed Clientele
          </motion.h3>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent" />

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex w-fit"
            >
              {[...Array(2)].map((_, groupIndex) => (
                <div className="flex gap-16 px-8" key={groupIndex}>
                  {trustedCompanies.map((company, index) => (
                    <motion.div
                      key={`${groupIndex}-${index}`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex h-24 w-48 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
                        <Shield className="h-6 w-6" />
                      </div>
                      <p className="mt-2 text-sm font-medium text-slate-900">
                        {company.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {company.industry}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-1"
        >
          <div className="rounded-xl bg-white p-8">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                <div className="flex h-full w-full items-center justify-center bg-red-100 text-red-600">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Rajesh Kumar</h4>
                <p className="text-sm text-slate-600">
                  Chief Security Officer, Global Finance Ltd.
                </p>
              </div>
            </div>
            <blockquote className="text-slate-700">
              "Growel Securitas has been our trusted security partner for over 8
              years. Their professionalism, attention to detail, and exceptional
              manpower management have significantly enhanced our security
              infrastructure. We highly recommend their services."
            </blockquote>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-slate-900">
            Ready to enhance your security?
          </h3>
          <p className="mt-2 text-slate-600">
            Join our growing list of satisfied clients
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 rounded-full bg-red-600 px-8 py-3 font-medium text-white shadow-lg shadow-red-200 transition-all hover:bg-red-700"
          >
            Request a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Trusted;
