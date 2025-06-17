import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Clock,
  Users,
  BadgeCheck,
  Headphones,
  Zap,
  Award,
  FileCheck,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Experienced Personnel",
      description:
        "Our security staff undergoes rigorous training and certification, ensuring the highest level of professionalism and expertise.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description:
        "Round-the-clock security services with immediate response capabilities to address any situation at any time.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customized Solutions",
      description:
        "Tailored security and manpower solutions designed specifically to meet your organization's unique requirements.",
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "Verified Professionals",
      description:
        "Comprehensive background checks and verification processes for all personnel to ensure reliability and trustworthiness.",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Dedicated Support",
      description:
        "Responsive customer service and dedicated account managers to address your concerns promptly and efficiently.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Response Time",
      description:
        "Rapid deployment and emergency response protocols to handle security incidents with minimal delay.",
    },
  ];

  const coreValues = [
    {
      value: "Integrity",
      description:
        "Upholding the highest ethical standards in all our operations",
    },
    {
      value: "Excellence",
      description: "Continuously striving to exceed client expectations",
    },
    {
      value: "Reliability",
      description: "Consistent and dependable service delivery",
    },
    {
      value: "Vigilance",
      description: "Maintaining constant awareness and preparedness",
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
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24"
    >
      {/* Decorative Backgrounds */}
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-red-50 opacity-70 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-red-50 opacity-70 blur-3xl" />
      <div className="absolute right-0 top-20 -z-10 opacity-5">
        <Shield className="h-96 w-96 rotate-12 text-red-900" />
      </div>
      <div className="absolute bottom-20 left-0 -z-10 opacity-5">
        <Shield className="h-72 w-72 -rotate-12 text-red-900" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700"
          >
            <Award className="mr-2 h-4 w-4" />
            Our Commitment to Excellence
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Why Choose <span className="text-red-600">Growel Securitas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
          >
            With over two decades of experience in security and manpower
            management, we deliver unparalleled service excellence and
            customized solutions for your unique needs.
          </motion.p>
        </div>

        {/* Benefits */}
        <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-xl bg-white p-6 shadow-xl shadow-slate-100"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                {benefit.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {benefit.title}
              </h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Approach */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              Our Comprehensive Approach
            </h3>
            <p className="mb-6 text-slate-600">
              At Growel Securitas, we understand that security is not just about
              physical presence but a comprehensive strategy that integrates
              people, processes, and technology.
            </p>

            <div className="space-y-4">
              {[
                "Thorough risk assessment and security audit",
                "Strategic deployment of trained personnel",
                "Integration of advanced security technologies",
                "Regular performance monitoring and reporting",
                "Continuous training and skill enhancement",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 rounded-full bg-red-100 p-1 text-red-600">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/contact">
              <motion.button
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 flex items-center rounded-full bg-red-600 px-6 py-3 font-medium text-white shadow-lg shadow-red-200 hover:bg-red-700"
              >
                Learn About Our Process
                <ChevronRight className="ml-2 h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative h-[400px] overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-90" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
              <FileCheck className="mb-6 h-16 w-16" />
              <h3 className="mb-4 text-2xl font-bold">
                ISO 9001:2015 Certified
              </h3>
              <p className="mb-6 max-w-md">
                Our quality management systems and processes are certified to
                international standards, ensuring consistent, high-quality
                service delivery.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Compliance Rate", value: "99.8%" },
                  { label: "Client Retention", value: "95%" },
                  { label: "Response Time", value: "<15 min" },
                  { label: "Service Uptime", value: "24/7/365" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="rounded-lg bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="rounded-2xl bg-slate-900 p-10 text-white"
        >
          <h3 className="mb-8 text-center text-2xl font-bold">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center rounded-xl bg-slate-800 p-6 text-center"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-red-500"></div>
                <h4 className="mb-2 text-xl font-semibold text-white">
                  {value.value}
                </h4>
                <p className="text-sm text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900">
            Ready to enhance your security infrastructure?
          </h3>
          <p className="mt-3 text-slate-600">
            Contact us today for a comprehensive security assessment and
            customized solution.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-red-600 px-8 py-3 font-medium text-white shadow-lg shadow-red-200 hover:bg-red-700"
            >
              Schedule a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-slate-300 bg-white px-8 py-3 font-medium text-slate-900 hover:border-red-600 hover:text-red-600"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
