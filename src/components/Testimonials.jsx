import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "Facility Manager, ABC Corporation",
    content:
      "SecureForce has provided exceptional security services for our corporate headquarters. Their guards are professional, vigilant, and always punctual. We've seen a significant improvement in overall security since partnering with them.",
    image: "/placeholder.svg?height=80&width=80&text=JS",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Event Director, City Convention Center",
    content:
      "We've used SecureForce's bouncers for multiple high-profile events, and they've consistently delivered outstanding service. Their team is well-trained in crowd management and conflict resolution, ensuring our events run smoothly.",
    image: "/placeholder.svg?height=80&width=80&text=SJ",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Property Manager, Lakeside Residences",
    content:
      "The security guards from SecureForce have been instrumental in enhancing the safety of our residential complex. Their attention to detail and proactive approach to security has given our residents peace of mind.",
    image: "/placeholder.svg?height=80&width=80&text=MC",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Operations Director, Retail Chain",
    content:
      "We've been working with SecureForce for our retail locations for over 3 years. Their security personnel are not only effective at preventing theft but also provide excellent customer service, representing our brand well.",
    image: "/placeholder.svg?height=80&width=80&text=ER",
  },
  {
    id: 5,
    name: "David Wilson",
    position: "CEO, Tech Startup",
    content:
      "As a growing company, we needed flexible security solutions that could scale with us. SecureForce understood our unique needs and provided customized security services that have grown alongside our business.",
    image: "/placeholder.svg?height=80&width=80&text=DW",
  },
  {
    id: 6,
    name: "Jennifer Lee",
    position: "Hotel General Manager",
    content:
      "Our hotel requires security staff who can maintain a safe environment while also providing excellent guest service. SecureForce's personnel have exceeded our expectations in both areas, becoming valued extensions of our team.",
    image: "/placeholder.svg?height=80&width=80&text=JL",
  },
  {
    id: 7,
    name: "Robert Thompson",
    position: "School Principal",
    content:
      "The safety of our students and staff is our top priority. SecureForce has provided us with dedicated security personnel who understand the unique challenges of school security and have become trusted members of our community.",
    image: "/placeholder.svg?height=80&width=80&text=RT",
  },
  {
    id: 8,
    name: "Amanda Garcia",
    position: "Bank Branch Manager",
    content:
      "In the financial sector, security is paramount. SecureForce's armed personnel are highly trained, professional, and provide the level of security and confidence our institution requires.",
    image: "/placeholder.svg?height=80&width=80&text=AG",
  },
  {
    id: 9,
    name: "Thomas Brown",
    position: "Construction Site Manager",
    content:
      "Our construction sites require vigilant security to prevent theft and vandalism. SecureForce's mobile patrols and on-site guards have significantly reduced incidents and protected our valuable equipment and materials.",
    image: "/placeholder.svg?height=80&width=80&text=TB",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/placeholder.svg?height=600&width=1920"
            alt="Client testimonials"
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 py-20 md:py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-slate-200">
            Hear what our clients have to say about our security manpower
            services
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 md:py-16">
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
      </section>

      {/* Featured Case Studies */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore how our security solutions have made a difference for
              these clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <img
                  src="/placeholder.svg?height=256&width=600&text=Corporate Security"
                  alt="Corporate security case study"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Corporate Headquarters Security
                </h3>
                <p className="text-muted-foreground mb-4">
                  How we implemented a comprehensive security solution for a
                  Fortune 500 company's headquarters, reducing security
                  incidents by 75%.
                </p>
                <button>
                  <Link href="#">Read Case Study</Link>
                </button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <img
                  src="/placeholder.svg?height=256&width=600&text=Event Security"
                  alt="Event security case study"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Large-Scale Event Security
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our approach to securing a major music festival with over
                  50,000 attendees, ensuring a safe and enjoyable experience for
                  all.
                </p>
                <button>
                  <Link href="#">Read Case Study</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch our clients share their experiences with SecureForce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-100 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48 bg-slate-200 flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=192&width=384&text=Video ${
                      i + 1
                    }`}
                    alt={`Video testimonial ${i + 1}`}
                    width={384}
                    height={192}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">
                    Client Success Story {i + 1}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Hear how our security services made a difference for this
                    client.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the SecureForce difference for yourself. Contact us today
            for a consultation and free quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button>
              <Link href="/contact">Get a Free Quote</Link>
            </button>
            <button className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="/services">Explore Our Services</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
