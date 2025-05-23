import { Link } from "react-router-dom";
import Servicescard from "./Servicescard";
import securityservices from "../assets/Images/securityservices.jpeg";
import housekeeping from "../assets/Images/housekeeping.jpeg";
import eventsecurity from "../assets/Images/eventsecurity1.png";
import armedsecurity from "../assets/Images/armedsecurity.webp";
import pantryImage from "../assets/Images/pantryservices.jpg";
export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={securityservices}
            alt="Security services"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
            Our Security Services
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-slate-200">
            Comprehensive security manpower solutions tailored to your specific
            needs
          </p>
        </div>
      </section>
      {<Servicescard />}

      {/* Security Guards */}
      <section id="security-guards" className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-red-600 font-medium text-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
                <span>Security Guards</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Professional Security Guards
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our security guards are professionally trained to provide
                vigilant protection for residential complexes, commercial
                buildings, industrial facilities, and more. They are equipped
                with the skills and knowledge to prevent unauthorized access,
                monitor surveillance systems, and respond effectively to
                security incidents.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Residential Security</h3>
                    <p className="text-gray-600">
                      Protection for apartments, gated communities, and private
                      residences
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Commercial Security</h3>
                    <p className="text-gray-600">
                      Security for office buildings, retail stores, and business
                      premises
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Industrial Security</h3>
                    <p className="text-gray-600">
                      Protection for factories, warehouses, and manufacturing
                      facilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">
                      Construction Site Security
                    </h3>
                    <p className="text-gray-600">
                      Safeguarding construction sites against theft and
                      vandalism
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium inline-block"
              >
                Request Security Guards
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={securityservices}
                alt="Security services"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Housekeeping Staff */}
      <section id="housekeeping" className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={housekeeping}
                alt="Housekeeping staff"
                fill
                className="object-cover h-full w-full"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-blue-600 font-medium text-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Housekeeping</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Reliable Housekeeping Staff
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our housekeeping personnel are trained to maintain cleanliness
                and order in various settings. They are reliable, efficient, and
                committed to providing high-quality service that meets your
                specific requirements.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Residential Cleaning</h3>
                    <p className="text-gray-600">
                      Comprehensive cleaning services for homes and apartments
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Commercial Cleaning</h3>
                    <p className="text-gray-600">
                      Janitorial services for offices, retail spaces, and
                      commercial buildings
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Event Cleanup</h3>
                    <p className="text-gray-600">
                      Pre and post-event cleaning services for venues and event
                      spaces
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Specialized Cleaning</h3>
                    <p className="text-gray-600">
                      Deep cleaning, sanitization, and specialized cleaning
                      services
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium inline-block"
              >
                Request Housekeeping Staff
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bouncers */}
      <section id="bouncers" className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-red-600 font-medium text-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>Bouncers</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Professional Event Security
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our bouncers are trained in crowd management, conflict
                resolution, and emergency response. They provide a visible
                security presence at events, clubs, and venues, ensuring a safe
                environment for all attendees.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Nightclub Security</h3>
                    <p className="text-gray-600">
                      Entrance control and internal security for clubs and bars
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Event Security</h3>
                    <p className="text-gray-600">
                      Security for concerts, festivals, and public events
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">VIP Protection</h3>
                    <p className="text-gray-600">
                      Security for VIP areas and celebrity appearances
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Crowd Management</h3>
                    <p className="text-gray-600">
                      Effective crowd control for large gatherings and events
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium inline-block"
              >
                Request Security
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={eventsecurity}
                alt="Event security"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Armed Personnel */}
      <section id="armed-personnel" className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={armedsecurity}
                alt="Armed security"
                fill
                className="object-fit h-full w-full"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full text-red-600 font-medium text-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                <span>Armed Personnel</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Highly Trained Armed Security
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our armed security personnel are highly trained, licensed
                professionals with extensive experience in high-risk security
                situations. They undergo rigorous training in firearms safety,
                tactical response, and threat assessment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">
                      High-Value Asset Protection
                    </h3>
                    <p className="text-gray-600">
                      Security for valuable goods, cash-in-transit, and
                      high-value assets
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Executive Protection</h3>
                    <p className="text-gray-600">
                      Personal security for executives, dignitaries, and
                      high-profile individuals
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">
                      High-Risk Facility Security
                    </h3>
                    <p className="text-gray-600">
                      Armed security for banks, jewelry stores, and high-risk
                      facilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Emergency Response</h3>
                    <p className="text-gray-600">
                      Rapid response to security threats and emergency
                      situations
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium inline-block"
              >
                Request Armed Personnel
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="pantry-services" className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={pantryImage}
                alt="Pantry Services"
                className="object-cover h-full w-full"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full text-red-600 font-medium text-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 22c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Pantry Services</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Professional Pantry Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our pantry services provide seamless support for your workplace
                or residence, ensuring a clean, organized, and welcoming
                environment with refreshments, supplies, and attentive service.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Refreshment Management</h3>
                    <p className="text-gray-600">
                      Supplying and managing beverages and snacks for staff and
                      visitors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Inventory Control</h3>
                    <p className="text-gray-600">
                      Maintaining stock of pantry supplies to avoid shortages.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Hygiene and Cleanliness</h3>
                    <p className="text-gray-600">
                      Ensuring the pantry area is clean, tidy, and
                      well-maintained.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Customer Service</h3>
                    <p className="text-gray-600">
                      Friendly and attentive staff to assist with pantry needs
                      and requests.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium inline-block"
              >
                Request Pantry Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Additional Services */}
      <section id="additional-services" className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Additional Security Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our core offerings, we provide specialized security
              services to address specific needs and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Event Security</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security planning and personnel for events of all
                sizes, from corporate functions to large public gatherings.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">
                    Access control and ticket verification
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">Crowd management and control</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">Emergency response planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Mobile Patrols</h3>
              <p className="text-gray-600 mb-4">
                Regular security patrols for multiple locations, providing
                visible security presence and deterrence.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">Regular property checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">
                    Incident reporting and documentation
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">Lock and unlock services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Security Consulting</h3>
              <p className="text-gray-600 mb-4">
                Expert security assessments and recommendations to identify
                vulnerabilities and enhance security measures.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">Security risk assessments</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">
                    Security system recommendations
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm">Emergency response planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Security?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your security needs and receive a
            customized solution tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-center"
            >
              Get a Free Quote
            </Link>
            <Link
              href="tel:+15551234567"
              className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-center"
            >
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
