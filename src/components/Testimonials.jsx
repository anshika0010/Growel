import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react";
import Video from "./Video";
import Images from "./Images";
import servicehero from "../assets/Images/servicehero.png";
import Video2 from "./Video";

const testimonials = [
  {
    quote:
      "Growel Securitas has transformed our security infrastructure. Their team is professional, responsive, and always goes above and beyond.",
    name: "John Smith",
    title: "CEO, Tech Innovations",
  },
  {
    quote:
      "We've been using Growel Securitas for our residential complex for over 3 years. Their attention to detail and quick response time is impressive.",
    name: "Sarah Johnson",
    title: "Property Manager, Green Residences",
  },
  {
    quote:
      "The security personnel from Growel Securitas are well-trained, courteous, and vigilant. They've significantly improved our mall's security posture.",
    name: "Michael Chen",
    title: "Operations Director, Metro Mall",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[60vh] md:h-[80vh] bg-gradient-to-r from-blue-400 to-blue-700 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-50">
          <img
            src={servicehero}
            alt="Security background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Securing Your <span className="text-red-500">Future</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Professional security services tailored to your needs with
            cutting-edge technology and trained personnel.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Learn More
          </button>
        </div>
      </section>
      {/* Testimonials Grid */}
      {/* <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We take pride in delivering exceptional security services that
              meet and exceed our clients' expectations. Here's what they have
              to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="border-none shadow-lg">
                <div className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="mb-6 text-muted-foreground">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Security Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive security solutions designed to protect
              what matters most to you.
            </p>
          </div>

          {/* Cards Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=600&width=800&text=Security%20Image%20${item}`}
                    alt={`Security solution ${item}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-navy-blue mb-2">
                    Security Solution {item}
                  </h3>
                  <p className="text-gray-600">
                    Advanced security measures to protect your assets and ensure
                    peace of mind.
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          {<Images />}
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100">
              Hear from businesses and individuals who trust Growel Securitas
              for their security needs.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 p-8 rounded-lg shadow-lg relative"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="italic mb-4">"{testimonial.quote}"</p>

                  {/* Stars */}
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {<Video />}

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Security?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Contact us today for a free security assessment and discover how
            Growel Securitas can provide tailored security solutions for your
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-navy-blue text-white px-8 py-3 rounded-md font-medium transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
