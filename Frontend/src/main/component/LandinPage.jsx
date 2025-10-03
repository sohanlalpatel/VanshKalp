"use client";

import { useEffect, useRef, useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutUs from "./About";
import Affiliations from "./Affiliations";
import Services from "./Services";
import ContactUs from "./Contact";
import Welcom from "./welcome";
import LifeStyle from "./LifeStyle";
import MissionVision from "./Mission&Vision";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

// Inline Button component
const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium ${className}`}
  >
    {children}
  </button>
);

// Inline Card component
const Card = ({ children, className, ...props }) => (
  <div
    {...props}
    className={`rounded-xl border bg-white shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div {...props} className={`p-4 ${className}`}>
    {children}
  </div>
);

export default function DoctorLandingPage() {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F2F2F2] scroll-smooth">
        {/* Hero Section */}

        <HeroSection />

        <Welcom />
        <AboutUs />
        <Affiliations />

        {/* <section className="relative bg-gradient-to-br from-[#2A86BF] to-[#5EA8CD] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
              Expert Care, Anytime, Anywhere
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              Providing specialized medical consultation and care with compassion and expertise
            </p>
            <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/30 hover:scale-110 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/30 hover:scale-110 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/30 hover:scale-110 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section> */}
        <Services />

        {/* lifestyle */}

        <MissionVision />

        <LifeStyle />

        {/* Mission & Vision */}
        {/* <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <Card
              id="mission-card"
              data-animate
              className={`border-[#5EA8CD] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                isVisible["mission-card"]
                  ? "animate-in fade-in slide-in-from-left-8 duration-700"
                  : "opacity-0"
              }`}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#2A86BF] mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To provide accessible, high-quality medical care through
                  innovative online consultation services, ensuring every
                  patient receives personalized attention and expert guidance
                  for their health concerns.
                </p>
              </CardContent>
            </Card>
            <Card
              id="vision-card"
              data-animate
              className={`border-[#407338] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                isVisible["vision-card"]
                  ? "animate-in fade-in slide-in-from-right-8 duration-700 delay-200"
                  : "opacity-0"
              }`}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#407338] mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading provider of specialized medical
                  consultations, bridging the gap between patients and expert
                  healthcare through technology, compassion, and clinical
                  excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* About Us Section */}

        {/* <section className="py-16 px-4 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto">
          <h2
            id="specialists-title"
            data-animate
            className={`text-3xl md:text-4xl font-bold text-center text-[#2A86BF] mb-12 ${
              isVisible["specialists-title"] ? "animate-in fade-in zoom-in-95 duration-700" : "opacity-0"
            }`}
          >
            Meet Our Specialists
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
             {[
              {
                id: "doctor-jignesh",
                name: "Dr. Jignesh Sharma",
                role: "Pediatric Specialist",
                gradient: "from-[#2A86BF] to-[#5EA8CD]",
                initials: "JS",
                color: "#2A86BF",
                services: [
                  "Online Genetic Counselling",
                  "Pediatric Allergy & Asthma Consultation",
                  "Non-Invasive Pediatric Cardiology",
                  "ECHO & ECG Review",
                ],
                description:
                  "With years of clinical experience and a passion for pediatric care, Dr. Sharma provides comprehensive consultation services for children's health concerns, specializing in genetic counseling and cardiac assessments.",
                whatsapp: "https://wa.me/1234567890",
              },
              {
                id: "doctor-vaishali",
                name: "Dr. Vaishali Sharma",
                role: "Fertility & Women's Health",
                gradient: "from-[#407338] to-[#98BF45]",
                initials: "VS",
                color: "#407338",
                services: [
                  "Online Fertility Counselling",
                  "IVF Consultation & Planning",
                  "Antenatal Care & Support",
                  "Women's Health Counselling",
                ],
                description:
                  "Dr. Vaishali Sharma brings extensive experience in reproductive medicine and women's health, offering compassionate care and expert guidance for fertility treatments and antenatal support.",
                whatsapp: "https://wa.me/1234567890",
              },
            ].map((doc, idx) => (
              <Card
                key={doc.id}
                id={doc.id}
                data-animate
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                  isVisible[doc.id] ? `animate-in fade-in slide-in-from-bottom-8 duration-700 ${idx === 1 ? "delay-200" : ""}` : "opacity-0"
                }`}
              >
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${doc.gradient} p-6 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                        {doc.initials}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{doc.name}</h3>
                        <p className="text-white/90">{doc.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className={`font-semibold mb-2`} style={{ color: doc.color }}>
                      Qualifications & Expertise
                    </h4>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      {doc.services.map((service, sidx) => (
                        <li key={sidx} className="hover:translate-x-2 transition-transform duration-300">
                          • {service}
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-600 leading-relaxed">{doc.description}</p>
                    <a href={doc.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block w-full mt-4">
                      <Button className={`w-full bg-[${doc.color}] hover:scale-105 transition-all duration-300 text-white shadow-lg hover:shadow-xl`}>
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Book Consultation via WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
        {/* Services Section */}
        {/* <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 id="services-title" data-animate className={`text-3xl md:text-4xl font-bold text-center text-[#2A86BF] mb-12 ${isVisible["services-title"] ? "animate-in fade-in zoom-in-95 duration-700" : "opacity-0"}`}>
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
             <div id="services-jignesh" data-animate className={`${isVisible["services-jignesh"] ? "animate-in fade-in slide-in-from-left-8 duration-700" : "opacity-0"}`}>
              <div className="bg-gradient-to-r from-[#2A86BF] to-[#5EA8CD] text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold mb-2">Dr. Jignesh Sharma</h3>
                <p className="text-white/90">Pediatric Consultation Services</p>
              </div>
              <Card className="rounded-t-none border-t-0 hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <p>• Online Genetic Counselling</p>
                    <p>• Pediatric Allergy & Asthma Consultation</p>
                    <p>• Non-Invasive Pediatric Cardiology</p>
                    <p>• ECHO & ECG Review</p>
                  </div>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                    <Button className="w-full bg-[#2A86BF] hover:bg-[#5EA8CD] text-white"> 
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book Consultation via WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

             <div id="services-vaishali" data-animate className={`${isVisible["services-vaishali"] ? "animate-in fade-in slide-in-from-right-8 duration-700 delay-200" : "opacity-0"}`}>
              <div className="bg-gradient-to-r from-[#407338] to-[#98BF45] text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold mb-2">Dr. Vaishali Sharma</h3>
                <p className="text-white/90">Fertility & Women's Health Services</p>
              </div>
              <Card className="rounded-t-none border-t-0 hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <p>• Online Fertility Counselling</p>
                    <p>• IVF Consultation & Planning</p>
                    <p>• Antenatal Care & Support</p>
                    <p>• Women's Health Counselling</p>
                  </div>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                    <Button className="w-full bg-[#407338] hover:bg-[#98BF45] text-white">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book Consultation via WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

        {/* Contact Section */}
        <Testimonials />
        <ContactUs />
        {/* 
      <section className="py-16 px-4 bg-gradient-to-br from-[#2A86BF] to-[#5EA8CD] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 id="contact-title" data-animate className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isVisible["contact-title"] ? "animate-in fade-in zoom-in-95 duration-700" : "opacity-0"}`}>
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card id="contact-phone" data-animate className={`bg-white/10 border-white/20 text-white ${isVisible["contact-phone"] ? "animate-in fade-in slide-in-from-bottom-6 duration-700" : "opacity-0"}`}>
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p>+91 123 456 7890</p>
              </CardContent>
            </Card>

            <Card id="contact-email" data-animate className={`bg-white/10 border-white/20 text-white ${isVisible["contact-email"] ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150" : "opacity-0"}`}>
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p>contact@drsharma.com</p>
              </CardContent>
            </Card>

            <Card id="contact-whatsapp" data-animate className={`bg-white/10 border-white/20 text-white ${isVisible["contact-whatsapp"] ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300" : "opacity-0"}`}>
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p>Quick Consultation</p>
              </CardContent>
            </Card>
          </div>

          <div id="social-links" data-animate className={`flex justify-center gap-6 ${isVisible["social-links"] ? "animate-in fade-in zoom-in-95 duration-700 delay-500" : "opacity-0"}`}>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-white/30 hover:scale-125 rounded-full transition-all duration-300" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-white/30 hover:scale-125 rounded-full transition-all duration-300" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-white/30 hover:scale-125 rounded-full transition-all duration-300" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section> */}
        <Footer />
        {/* Footer */}
        {/* <footer className="bg-gradient-to-r from-[#407338] to-[#98BF45] text-white py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p>
              © 2025 Dr. Jignesh Sharma & Dr. Vaishali Sharma. All rights
              reserved.
            </p>
          </div>
        </footer> */}
      </div>
    </>
  );
}
