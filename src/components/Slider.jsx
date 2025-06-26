import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedHeading from "./AnimatedHeading";
import Image from "/images/Group.webp";
import Image1 from "/images/group2.jpg";
import Image2 from "../assets/Images/GuardImage7.jpeg";
import Image4 from "../assets/Images/hero.jpeg";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-full mx-auto"
      >
        <SwiperSlide>
          <section className="relative bg-slate-900 text-white">
            <div className="absolute inset-0 z-0 opacity-50">
              <img
                src="https://content.jdmagicbox.com/v2/comp/hyderabad/q8/040pxx40.xx40.140128101125.r3q8/catalogue/s-g-manpower-suppliers-shamirpet-hyderabad-security-services-1rp0vwyj8v.jpg"
                alt="Security personnel"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="container mx-auto relative z-10 py-10 md:py-10 flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
                Professional Security Manpower Services You Can Trust
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl text-slate-200">
                Providing highly trained security guards, housekeeping staff,
                bouncers, and armed personnel for all your security needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg hover:bg-red-200 transition">
                    Get a Free Quote
                  </button>
                </Link>
                <Link to="/services">
                  <button className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg hover:bg-red-200 transition">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative bg-slate-900 text-white">
            <div className="absolute inset-0 z-0 opacity-50">
              <img
                src={Image1}
                alt="Security personnel"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="container mx-auto relative z-10 py-10 md:py-10 flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
                Professional Security Manpower Services You Can Trust
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl text-slate-200">
                Providing highly trained security guards, housekeeping staff,
                bouncers, and armed personnel for all your security needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg hover:bg-red-200 transition">
                    Get a Free Quote
                  </button>
                </Link>
                <Link to="/services">
                  <button className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg hover:bg-red-200 transition">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative bg-slate-900 text-white">
            <div className="absolute inset-0 z-0 opacity-50">
              <img
                src={Image2}
                alt="Security personnel"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="container mx-auto relative z-10 py-10 md:py-10 flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
                Professional Security Manpower Services You Can Trust
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl text-slate-200">
                Providing highly trained security guards, housekeeping staff,
                bouncers, and armed personnel for all your security needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg hover:bg-red-200 transition">
                    Get a Free Quote
                  </button>
                </Link>
                <Link to="/services">
                  <button className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg hover:bg-red-200 transition">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>

      <section className="w-full bg-white py-12 px-6 md:px-16">
        <div className="inline-flex items-center rounded-full bg-red-50 px-4 py-2  text-sm font-medium text-red-700">
          Welcome to Growel Securitas
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left Side - About Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <AnimatedHeading
              text="About Us"
              as="h2"
              className="text-2xl md:text-4xl font-bold text-red-600 my-8"
            />

            <p class="text-gray-600 mb-6">
              <strong className="text-red-600">
                Growel Securitas & Manpower Management Services Pvt. Ltd.
              </strong>{" "}
              is a leading provider of comprehensive security solutions across
              India.Our mission is to exceed expectations and build long-term
              relationships through transparency, quality, and reliability. We
              provide trusted security and manpower services across India,
              including trained guards, armed personnel, VIP protection,
              bouncers, and event security. We specialize in delivering highly
              trained personnel for a wide range of security requirements,
              including:
            </p>
            <ul class="text-left text-gray-700 text-sm md:text-base grid gap-2 md:grid-cols-2 list-disc list-inside">
              <li>Security & Armed Guards</li>
              <li>VIP Protection & Bouncers</li>
              <li>Event & Corporate Security</li>
              <li>Lady Officers & Supervisors</li>
              <li>Ex-Servicemen & Training</li>
            </ul>
            <Link to="/about">
              {" "}
              <button className="text-black border-2 border-red-600 px-4 py-2 cursor-pointer hover:bg-red-600 mt-4 rounded-lg">
                Read More...
              </button>
            </Link>
          </div>

          {/* Right Side - Image */}

          <div className="md:w-1/2">
            <img
              src={Image4}
              alt="About us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Slider;
