 
import React, { useEffect, useRef, useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import AboutUs from "../component/About";
import Affiliations from "../component/Affiliations";
import Services from "../component/Services";
import ContactUs from "../component/Contact";
import LifeStyle from "../component/LifeStyle";
import MissionVision from "../component/Mission&Vision";
import Footer from "../component/Footer";
import Testimonials from "../component/Testimonials";
import Intro from "../component/Intro";

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
 const LandinPage = () => {
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
      <div className=" bg-[#F2F2F2] scroll-smooth">
 
        <HeroSection />
        <Intro />
        <AboutUs />
        <Affiliations />
        <Services />
        <MissionVision />
        <LifeStyle />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}


export default LandinPage

 