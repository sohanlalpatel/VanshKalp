"use client";

import { useEffect, useState } from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const Card = ({ children, className, ...props }) => (
  <div
    {...props}
    className={`rounded-2xl border bg-white shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div {...props} className={`p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

export default function MissionVision() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-animate]");
      const newVisibility = {};
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          newVisibility[el.id] = true;
        }
      });
      setIsVisible((prev) => ({ ...prev, ...newVisibility }));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F9FAFB] via-white to-[#E5E7EB]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Mission Card */}
        <Card
          id="mission-card"
          data-animate
          className={`border-l-8 border-[#2A86BF] ${
            isVisible["mission-card"]
              ? "animate-slideInLeft opacity-100"
              : "opacity-0"
          }`}
        >
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#2A86BF] text-white rounded-full p-4 text-2xl">
                <FaBullseye />
              </div>
              <h2 className="text-3xl font-bold text-[#2A86BF]">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To provide accessible, high-quality medical care through
              innovative online and in-clinic consultation services. We ensure
              every patient receives personalized attention and expert guidance
              tailored to their unique health needs.
            </p>
          </CardContent>
        </Card>

        {/* Vision Card */}
        <Card
          id="vision-card"
          data-animate
          className={`border-l-8 border-[#407338] ${
            isVisible["vision-card"]
              ? "animate-slideInRight opacity-100"
              : "opacity-0"
          }`}
        >
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#407338] text-white rounded-full p-4 text-2xl">
                <FaEye />
              </div>
              <h2 className="text-3xl font-bold text-[#407338]">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the leading provider of specialized healthcare, bridging
              the gap between patients and doctors through compassion, advanced
              technology, and clinical excellence — empowering a healthier
              tomorrow.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
