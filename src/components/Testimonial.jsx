import { useState, useEffect } from "react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "Facility Manager, ABC Corporation",
    content:
      "SecureForce has provided exceptional security services for our corporate headquarters. Their guards are professional, vigilant, and always punctual. We've seen a significant improvement in overall security since partnering with them.",
    image: "https://via.placeholder.com/80?text=JS",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Event Director, City Convention Center",
    content:
      "We've used SecureForce's bouncers for multiple high-profile events, and they've consistently delivered outstanding service. Their team is well-trained in crowd management and conflict resolution, ensuring our events run smoothly.",
    image: "https://via.placeholder.com/80?text=SJ",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Property Manager, Lakeside Residences",
    content:
      "The security guards from SecureForce have been instrumental in enhancing the safety of our residential complex. Their attention to detail and proactive approach to security has given our residents peace of mind.",
    image: "https://via.placeholder.com/80?text=MC",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Operations Director, Retail Chain",
    content:
      "We've been working with SecureForce for our retail locations for over 3 years. Their security personnel are not only effective at preventing theft but also provide excellent customer service, representing our brand well.",
    image: "https://via.placeholder.com/80?text=ER",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      let count = 1;
      if (window.innerWidth >= 1024) {
        count = 3;
      } else if (window.innerWidth >= 640) {
        count = 2;
      }

      const indices = [];
      for (let i = 0; i < count; i++) {
        indices.push((currentIndex + i) % testimonials.length);
      }
      setVisibleTestimonials(indices);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Client Testimonials</h3>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="p-2 border rounded hover:bg-gray-100"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="p-2 border rounded hover:bg-gray-100"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((index) => {
          const testimonial = testimonials[index];
          return (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <svg
                className="w-8 h-8 text-blue-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17h.01M15 17h.01M8 21a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H8z"
                />
              </svg>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
