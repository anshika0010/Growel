import { Link } from "react-router-dom";
import Image from "../assets/Group.webp";
import Image2 from "../assets/group2.jpeg";
import {
  Shield,
  Users,
  Home,
  Award,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={Image}
            alt="Security personnel"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container mx-auto relative z-10 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
            Professional Security Manpower Services You Can Trust
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-slate-200">
            Providing highly trained security guards, housekeeping staff,
            bouncers, and armed personnel for all your security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition">
                Get a Free Quote
              </button>
            </Link>
            <Link to="/services">
              <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Security Services
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We offer a comprehensive range of security manpower services
              tailored to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Security Guards",
                text: "Professionally trained security personnel for residential, commercial, and industrial properties.",
                link: "/services#security-guards",
              },
              {
                icon: <Home className="h-8 w-8 text-blue-600" />,
                title: "Housekeeping Staff",
                text: "Reliable and efficient housekeeping personnel for maintaining cleanliness and order.",
                link: "/services#housekeeping",
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Bouncers",
                text: "Professional event security personnel for clubs, parties, and special events.",
                link: "/services#bouncers",
              },
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Armed Personnel",
                text: "Highly trained and licensed armed security professionals for high-risk environments.",
                link: "/services#armed-personnel",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 text-center rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 mb-4">{service.text}</p>
                <Link
                  to={service.link}
                  className="text-blue-600 font-medium inline-flex items-center hover:underline"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose SecureForce?
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                With over 15 years of experience in the security industry, we
                provide reliable, professional, and customized security
                solutions.
              </p>

              {[
                "Highly Trained Personnel",
                "24/7 Availability",
                "Customized Solutions",
                "Licensed & Insured",
              ].map((point, i) => (
                <div key={i} className="flex gap-4 mb-6">
                  <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{point}</h3>
                    <p className="text-gray-500">
                      {point === "Highly Trained Personnel"
                        ? "All our security staff undergo rigorous training and background checks."
                        : point === "24/7 Availability"
                        ? "Round-the-clock service to ensure your security needs are always met."
                        : point === "Customized Solutions"
                        ? "Tailored security plans designed to address your specific requirements."
                        : "Fully licensed, bonded, and insured for your peace of mind."}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <Link to="/about">
                  <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                    Learn More About Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={Image2}
                alt="Security team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Don't just take our word for it. Here's what our clients have to say
            about our security services.
          </p>

          {/* You can add a basic carousel here or just list testimonials directly */}
          <div className="italic text-gray-600">
            “SecureForce provided excellent bouncers for our event. Very
            professional and reliable.”
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
                View All Testimonials
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and quote. Our security
            experts are standing by to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
                Get a Free Quote
              </button>
            </Link>
            <a href="tel:+15551234567">
              <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
                Call Us Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 md:py-16 border-t">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 w-32 relative">
                <img
                  src={`/placeholder.svg`}
                  alt={`Client ${i + 1}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
