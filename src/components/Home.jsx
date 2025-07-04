import { Link } from "react-router-dom";
import ctaimage from "../assets/Images/ctaimage.png";

import Slider from "./Slider";
import Trusted from "./Trusted";
import WhyChooseUsSection from "./WhyChooseUsSection";
import OurServices from "./OurServices";
import ScrollingImageGallery from "./ScrollingImageGallery";
import Servicescard from "./Servicescard";
import { Helmet } from "react-helmet";
import ButtonAnimation from "./ButtonAnimated";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Growel Securitas & Manpower Management Pvt Ltd.</title>
        <meta
          name="description"
          content="Growel Security is one of the Best NOIDA based Indian Private Security Service industrial security company and maintenance consultants and surveyors."
        />
        <link rel="canonical" href="https://growelsecuritas4u.in" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <meta
          name="keywords"
          content="security, bouncers, security guards, security services"
        />
        {<Slider />}
        {<OurServices />}
        {<Servicescard />}
        {<ScrollingImageGallery />}
        {<WhyChooseUsSection />}
        {/* Testimonials */}

        {/* CTA Section */}
        <section
          className="relative py-16 md:py-24 text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaimage})` }}
        >
          {/* Dark Blur Overlay */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs z-0"></div>

          {/* Content on top of overlay */}
          <div className="relative z-10 container text-center mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Property?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today for a free consultation and quote. Our security
              experts are standing by to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* <Link to="/contact">
                <button className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg hover:bg-gray-200 transition">
                  Get a Free Quote
                </button>
              </Link> */}
              <ButtonAnimation className="mt-6 rounded-full  border border-red-600 px-8 py-3 bg-white font-medium text-black shadow-lg shadow-red-200 transition-all ">
                <Link to="/contact">Get a Free Quote</Link>
              </ButtonAnimation>
              {/* <a href="tel:+919811580318">
                <button className="px-6 py-3 border bg-red-600 border-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
                  Call Us Now
                </button>
              </a> */}
              <ButtonAnimation className="mt-6 rounded-full  border border-red-600 px-8 py-3 font-medium text-black bg-white shadow-lg shadow-red-200 transition-all ">
                <Link to="/contact">call Us Now</Link>
              </ButtonAnimation>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        {<Trusted />}
      </div>
    </>
  );
};

export default HomePage;
