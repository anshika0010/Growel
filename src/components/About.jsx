import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button"
import { Shield, Award, CheckCircle, Target, Briefcase } from "lucide-react";
import Image from "/images/Group.webp";
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 h-full w-full">
          <img
            src={Image}
            alt="Security team"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container relative z-10 py-20 md:py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About SecureForce
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-slate-200">
            Your trusted partner in professional security manpower services
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary font-medium text-sm mb-4">
                <Shield className="h-4 w-4" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                A Legacy of Trust and Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2008, SecureForce has grown to become a leading
                provider of security manpower services, trusted by businesses,
                organizations, and individuals across the country. Our journey
                began with a simple mission: to provide reliable, professional
                security services that give our clients peace of mind.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we have expanded our services to meet the
                evolving security needs of our clients, while maintaining our
                commitment to excellence, integrity, and professionalism. Today,
                we are proud to offer a comprehensive range of security manpower
                solutions delivered by highly trained personnel who share our
                dedication to quality service.
              </p>
              <p className="text-lg text-muted-foreground">
                At SecureForce, we believe that security is not just about
                protection—it's about creating environments where people feel
                safe, confident, and free to focus on what matters most to them.
                This belief drives everything we do, from the rigorous training
                of our staff to the personalized service we provide to each
                client.
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Company history"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our operations and define our approach
              to security services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide exceptional security manpower services that protect
                people, property, and assets, delivered with professionalism,
                integrity, and a commitment to excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and respected security manpower provider,
                recognized for our exceptional service, innovative solutions,
                and the positive impact we make on the safety and security of
                our communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>Integrity in all our actions and decisions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>Excellence in service delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>
                    Respect for our clients, employees, and communities
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>Accountability for our actions and results</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>Innovation in our approach to security challenges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals who lead our organization and
              drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=256&width=256&text=CEO"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">John Anderson</h3>
              <p className="text-primary font-medium mb-3">
                Chief Executive Officer
              </p>
              <p className="text-muted-foreground mb-4">
                With over 25 years of experience in security management, John
                leads our company with a focus on operational excellence and
                client satisfaction.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=256&width=256&text=COO"
                  alt="COO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Mitchell</h3>
              <p className="text-primary font-medium mb-3">
                Chief Operations Officer
              </p>
              <p className="text-muted-foreground mb-4">
                Sarah oversees our day-to-day operations, ensuring that our
                security services meet the highest standards of quality and
                efficiency.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=256&width=256&text=Director"
                  alt="Training Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Rodriguez</h3>
              <p className="text-primary font-medium mb-3">
                Director of Training
              </p>
              <p className="text-muted-foreground mb-4">
                Michael leads our comprehensive training programs, ensuring that
                all our security personnel are equipped with the skills and
                knowledge they need to excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary font-medium text-sm mb-4">
                <Briefcase className="h-4 w-4" />
                <span>Our Approach</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                How We Deliver Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At SecureForce, we follow a systematic approach to security that
                ensures we deliver tailored, effective solutions for each
                client. Our methodology combines thorough assessment, strategic
                planning, professional execution, and continuous improvement.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Comprehensive Assessment
                    </h3>
                    <p className="text-muted-foreground">
                      We begin by thoroughly understanding your security needs,
                      risks, and objectives through detailed consultations and
                      site assessments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Customized Security Planning
                    </h3>
                    <p className="text-muted-foreground">
                      Based on our assessment, we develop a tailored security
                      plan that addresses your specific requirements and
                      challenges.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Professional Implementation
                    </h3>
                    <p className="text-muted-foreground">
                      We deploy carefully selected and trained security
                      personnel who are equipped to execute your security plan
                      effectively.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Ongoing Monitoring & Improvement
                    </h3>
                    <p className="text-muted-foreground">
                      We continuously monitor performance, gather feedback, and
                      make adjustments to ensure optimal security outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Security approach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Certifications & Credentials
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SecureForce maintains the highest industry standards through
              professional certifications and affiliations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="bg-slate-50 p-6 rounded-lg h-40 flex items-center justify-center mb-4">
                  <img
                    src={`/placeholder.svg?height=120&width=120&text=Cert ${
                      i + 1
                    }`}
                    alt={`Certification ${i + 1}`}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold">
                  Security Certification {i + 1}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Issued by Security Association
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium mb-6">
              We are proud members of these professional organizations:
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-16 w-40 relative">
                  <img
                    src={`/placeholder.svg?height=64&width=160&text=Association ${
                      i + 1
                    }`}
                    alt={`Association ${i + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss how our professional security services
            can meet your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </button>
            <button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/services">Explore Our Services</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
