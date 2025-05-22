import { Link } from "react-router-dom";
import Image2 from "/images/group2.jpg";

import Slider from "./Slider";
import Trusted from "./Trusted";
import WhyChooseUsSection from "./WhyChooseUsSection";
import OurServices from "./OurServices";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}

      {<Slider />}
      {/* Services Overview */}
      {<OurServices />}

      {/* Why Choose Us */}
      {<WhyChooseUsSection />}

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
      <section className="py-16 md:py-24 bg-red-600 text-white">
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
      {<Trusted />}
    </div>
  );
};

export default HomePage;
