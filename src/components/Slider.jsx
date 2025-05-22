import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "/images/Group.webp";
import Image1 from "/images/group2.jpg";
import Image2 from "/images/group2.jpg";

import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
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
                  <button className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg hover:bg-gray-100 transition">
                    Get a Free Quote
                  </button>
                </Link>
                <Link to="/services">
                  <button className="px-6 py-3 border border-red-600 text-white font-semibold rounded-lg hover:bg-white/10 transition">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative bg-slate-900 text-white">
            <div className="absolute inset-0 z-0 opacity-30">
              <img
                src={Image1}
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
                  <button className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg hover:bg-gray-100 transition">
                    Get a Free Quote
                  </button>
                </Link>
                <Link to="/services">
                  <button className="px-6 py-3 border border-red-600 text-white font-semibold rounded-lg hover:bg-white/10 transition">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative bg-slate-900 text-white">
            <div className="absolute inset-0 z-0 opacity-30">
              <img
                src={Image2}
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
                  <button className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg hover:bg-gray-100 transition">
                    Get a Free Quote
                  </button>
                </Link>
                <Link to="/services">
                  <button className="px-6 py-3 border border-red-600 text-white font-semibold rounded-lg hover:bg-white/10 transition">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
