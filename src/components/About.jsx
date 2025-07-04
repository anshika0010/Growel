import {
  ShieldCheck,
  Users,
  Briefcase,
  Star,
  Award,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  Target,
  Eye,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import ceoimage from "../../src/assets/Images/ceoimage.jpeg";
import gaurav from "../../src/assets/Images/gaurav.jpeg";
import manager from "../../src/assets/Images/manager.jpeg";
import image from "../../src/assets/Images/GuardImage2.jpg";
import image2 from "../../src/assets/Images/GuardImage16.jpeg";
import certificate from "../../src/assets/Images/certificate.jpg";
export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our Company
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Your trusted partner in comprehensive security solutions,
            housekeeping services, and professional manpower management since
            2015
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Company Overview Section with Image */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Established in 2015 as a leading security and manpower solutions
                provider, we have built our reputation on delivering exceptional
                service quality and unwavering reliability. Our comprehensive
                approach ensures that every client receives personalized
                attention and tailored solutions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                From corporate offices to residential complexes, from
                high-profile events to industrial facilities, we provide trained
                professionals who understand the importance of safety,
                discretion, and excellence in service delivery.
              </p>
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">
                  Our Core Values
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                    Integrity and Professionalism
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                    Client-Centric Approach
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                    Continuous Training & Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                    24/7 Reliability
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src={image}
                alt="Professional security team in uniform"
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-500 text-white p-4 rounded-xl shadow-lg">
                <p className="font-bold text-2xl">9+ Years</p>
                <p className="text-sm opacity-90">of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="text-red-500 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">100%</h3>
            <p className="text-red-500 font-semibold mb-2">
              Verified Personnel
            </p>
            <p className="text-gray-600 text-sm">
              Comprehensive background checks and security clearances
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-red-500 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">750+</h3>
            <p className="text-red-500 font-semibold mb-2">Trained Staff</p>
            <p className="text-gray-600 text-sm">
              Security guards, housekeeping, and pantry service professionals
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="text-red-500 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">400+</h3>
            <p className="text-red-500 font-semibold mb-2">Happy Clients</p>
            <p className="text-gray-600 text-sm">
              Businesses, residential complexes, and event organizers
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-red-500 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">4.9/5</h3>
            <p className="text-red-500 font-semibold mb-2">Client Rating</p>
            <p className="text-gray-600 text-sm">
              Consistently high satisfaction across all service categories
            </p>
          </div>
        </div>

        {/* Our Journey Section */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Company headquarters building"
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  2015 - Foundation
                </h3>
                <p className="text-gray-600">
                  Started with a vision to provide reliable security services
                  with just 25 trained personnel.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  2018 - Expansion
                </h3>
                <p className="text-gray-600">
                  Expanded services to include housekeeping and pantry services,
                  growing our team to 200+ professionals.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  2021 - Recognition
                </h3>
                <p className="text-gray-600">
                  Received industry recognition for excellence in service
                  delivery and client satisfaction.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  2024 - Present
                </h3>
                <p className="text-gray-600">
                  Now serving 400+ clients with 750+ trained professionals
                  across multiple cities.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Services Overview with Images */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Our Service Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Professional security guard on duty"
                className="rounded-xl shadow-md w-full h-48 object-cover mb-4"
              />
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-red-500 w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Security Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional security guards, armed personnel, bouncers, and
                event security. All personnel undergo rigorous training in
                conflict resolution, emergency response, and customer service.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Professional housekeeping staff at work"
                className="rounded-xl shadow-md w-full h-48 object-cover mb-4"
              />
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-red-500 w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Housekeeping Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive cleaning and maintenance services for offices,
                residential complexes, and commercial spaces. Our staff is
                trained in modern cleaning techniques and safety protocols.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Professional pantry service staff"
                className="rounded-xl shadow-md w-full h-48 object-cover mb-4"
              />
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-red-500 w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Pantry Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional pantry management including tea/coffee service,
                kitchen maintenance, and refreshment coordination. Ensuring
                hygiene and quality in every service interaction.
              </p>
            </div>
          </div>
        </div> */}

        {/* Leadership Team */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={ceoimage}
                alt="CEO and Founder"
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mr. R.K Yadav
              </h3>
              <p className="text-red-500 font-medium mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                He is the Owner of Growel Securitas. "Yadav has been in the
                Security business for 25+ years. Mr Yadav is Education
                B.sc,B.ed. He runs a professional organization dedicated to
                developing long-term client partnerships.
              </p>
            </div>
            <div className="text-center">
              <img
                src={gaurav}
                alt="Operations Director"
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mr.Gaurav Yadav
              </h3>
              <p className="text-red-500 font-medium mb-3">Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With over 7 years of experience in security management, Gaurav
                leads our company with a focus on operational excellence and
                client satisfaction.
              </p>
            </div>
            <div className="text-center">
              <img
                src={manager}
                alt="Training Head"
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mr.Sudhir Kumar Sharma
              </h3>
              <p className="text-red-500 font-medium mb-3">
                Senior oprational manager
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                10+ years in security training and development. Certified
                instructor with expertise in modern security protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Training & Certifications */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-lg p-8 md:p-12 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Training & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={certificate}
                alt="Training facility and certification programs"
                className="rounded-xl shadow-lg h-[500px]"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Comprehensive Training Programs
                </h3>
                <ul className="space-y-2 opacity-90">
                  <li>• 40-hour basic security training certification</li>
                  <li>• First aid and emergency response training</li>
                  <li>• Customer service and communication skills</li>
                  <li>• Modern cleaning techniques and safety protocols</li>
                  <li>• Food safety and hygiene certification</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Industry Certifications
                </h3>
                <ul className="space-y-2 opacity-90">
                  <li>• ISO 9001:2015 Quality Management</li>
                  <li>• Private Security Agency License</li>
                  <li>• Labour License and Compliance</li>
                  <li>• Insurance Coverage for All Personnel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Client testimonial"
                  className="rounded-full w-12 h-12 object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Suresh Patel</h4>
                  <p className="text-sm text-gray-600">
                    Facility Manager, Tech Corp
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Exceptional service quality! Their security team is
                professional, punctual, and highly trained. We've been working
                with them for 3 years and couldn't be happier."
              </p>
              <div className="flex text-yellow-400 mt-3">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Client testimonial"
                  className="rounded-full w-12 h-12 object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Meera Gupta</h4>
                  <p className="text-sm text-gray-600">
                    Residential Society Secretary
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Their housekeeping staff is incredibly reliable and thorough.
                The pantry services have made our community events so much more
                organized and professional."
              </p>
              <div className="flex text-yellow-400 mt-3">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>
        </div> */}

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={image2}
                alt="Professional team in action"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Award className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Certified Excellence
                  </h3>
                  <p className="text-gray-600">
                    All our personnel are certified, insured, and regularly
                    evaluated for performance standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    24/7 Availability
                  </h3>
                  <p className="text-gray-600">
                    Round-the-clock service availability with emergency response
                    capabilities.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Wide Coverage
                  </h3>
                  <p className="text-gray-600">
                    Serving multiple cities with local expertise and
                    understanding of regional requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600">
                    Dedicated account managers and 24/7 customer support for all
                    your queries and concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To provide exceptional security and manpower services that exceed
              client expectations through professional excellence, innovative
              solutions, and unwavering commitment to safety and reliability. We
              strive to be the most trusted partner in protecting what matters
              most to our clients.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To become the leading security and manpower solutions provider,
              recognized for our innovation, integrity, and impact. We envision
              a future where every client feels completely secure and satisfied
              with our comprehensive service offerings.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their security
            and service needs. Contact us today for a free consultation.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center"> */}
          <Link to="/contact">
            <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
          </Link>
          {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors">
              Call Now: +91 98765 43210
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
