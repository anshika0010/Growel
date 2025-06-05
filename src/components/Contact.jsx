import { useState } from "react";
import { motion } from "framer-motion";
import ContactUsImage from "../../public/images/contact.jpg";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Loader2,
  MessageSquare,
  Building,
  Users,
} from "lucide-react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
// Animated Section Component
const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

// Contact Info Card Component
const ContactInfoCard = ({ icon, title, details, delay }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-red-50 rounded-full text-red-500">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <div className="text-gray-600 text-center">
        {Array.isArray(details) ? (
          details.map((detail, index) => (
            <p key={index} className="mb-1">
              {detail}
            </p>
          ))
        ) : (
          <p>{details}</p>
        )}
      </div>
    </motion.div>
  );
};

// Form Input Component
const FormInput = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-medium mb-2"
        htmlFor={name}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
          id={name}
          name={name}
          rows="5"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        ></textarea>
      ) : (
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

// Main Component
function ContactUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Growel Securitas – Security & Manpower Services in India</title>
        <meta
          name="description"
          content="Growel Securitas provides trained security guards, bouncers, housekeeping staff, and event security services. Trusted by leading brands across India."
        />
        <link rel="canonical" href="https://growelsecuritas4u.in" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 ">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center text-white py-28 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.2, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: `url(${ContactUsImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl  text-red-600 font-bold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're here to answer any questions you have about our services.
              Reach out to us and we'll respond as soon as we can.
            </motion.p>
          </div>
        </section>

        {/* Contact Information */}
        <AnimatedSection>
          <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-block p-2 px-4 bg-red-50 rounded-full text-red-600 font-medium text-sm mb-4">
                Contact Information
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Reach Out To Us
              </h2>
              <div className="w-20 h-1 bg-red-500 mx-auto mb-12 rounded-full"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ContactInfoCard
                  icon={<MapPin size={24} />}
                  title="Our Location"
                  details={[
                    "Growel Complex",
                    "Main, Dadri Main Rd",
                    "Block I, Sector 41",
                    "Noida, Uttar Pradesh 201303",
                  ]}
                  delay={0.1}
                />
                <ContactInfoCard
                  icon={<Phone size={24} />}
                  title="Phone Number"
                  details={["9582668293"]}
                  delay={0.2}
                />
                <ContactInfoCard
                  icon={<Mail size={24} />}
                  title="Email Address"
                  details={["info@growelsecuritas.com"]}
                  delay={0.3}
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Form Section */}
        <section className="py-20 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection delay={0.2}>
                <div>
                  <div className="inline-block p-2 px-4 bg-red-50 rounded-full text-red-600 font-medium text-sm mb-4">
                    Send Message
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Drop Us a Line
                  </h2>
                  <div className="w-20 h-1 bg-red-500 mb-8 rounded-full"></div>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and our team will get back to you
                    within 24 hours. We're excited to hear from you and discuss
                    your project needs.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-red-50 rounded-full text-red-500 mr-4 mt-1">
                        <Building size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Office Hours
                        </h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600">
                          Saturday: 10:00 AM - 2:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 bg-red-50 rounded-full text-red-500 mr-4 mt-1">
                        <Users size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Customer Support
                        </h3>
                        <p className="text-gray-600">
                          24/7 emergency support available
                        </p>
                        <p className="text-gray-600">
                          Regular inquiries: 1-2 business days
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 bg-red-50 rounded-full text-red-500 mr-4 mt-1">
                        <MessageSquare size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Follow Up
                        </h3>
                        <p className="text-gray-600">
                          Our team will follow up with you within 24 hours of
                          receiving your message.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  {formStatus.isSubmitted ? (
                    <motion.div
                      className="text-center py-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="inline-flex items-center justify-center p-4 bg-green-50 rounded-full text-green-500 mb-6">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We've received your message
                        and will get back to you shortly.
                      </p>
                      <button
                        onClick={() =>
                          setFormStatus((prev) => ({
                            ...prev,
                            isSubmitted: false,
                          }))
                        }
                        className="inline-block bg-red-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormInput
                          label="Full Name"
                          name="name"
                          placeholder="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                        <FormInput
                          label="Email Address"
                          type="email"
                          name="email"
                          placeholder="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormInput
                          label="Phone Number"
                          type="tel"
                          name="phone"
                          placeholder="phone number"
                          value={formState.phone}
                          onChange={handleChange}
                        />
                        <FormInput
                          label="Subject"
                          name="subject"
                          placeholder="Project Inquiry"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <FormInput
                        label="Message"
                        type="textarea"
                        name="message"
                        placeholder="Tell us about your project or inquiry..."
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />

                      <button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className="w-full bg-red-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
                      >
                        {formStatus.isSubmitting ? (
                          <>
                            <Loader2 size={20} className="mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <AnimatedSection>
          <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-block p-2 px-4 bg-red-50 rounded-full text-red-600 font-medium text-sm mb-4">
                Our Location
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Find Us On The Map
              </h2>
              <div className="w-20 h-1 bg-red-500 mx-auto mb-12 rounded-full"></div>

              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[400px] md:h-[500px]">
                <iframe
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Growel%20Complex,%20Main,%20Dadri%20Main%20Rd,%20Block%20I,%20Sector%2041,%20Noida,%20Uttar%20Pradesh%20201303+(Growel%20Securitas%20&amp;%20Manpower%20Management%20Services%20Pvt.%20Ltd.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <section className="bg-red-600 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Secure Your Property?
            </motion.h2>
            <motion.p
              className="text-lg mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get a free consultation and custom quote today — our expert
              security team is ready 24/7 to protect what matters most to you.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/about"
                className="inline-block bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Learn More About Us
              </Link>
              <Link
                href="#"
                className="inline-block bg-transparent text-white border-2 border-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Our Projects
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
