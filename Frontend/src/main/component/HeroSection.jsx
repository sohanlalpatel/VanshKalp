"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import banner1 from "../../../assests/banner.png";

const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center rounded-md px-6 py-3 font-medium ${className}`}
  >
    {children}
  </button>
);

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slowZoom"
        style={{
          backgroundImage: `url(${banner1})`,
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/0"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 grid md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left Content */}
        <div className="animate-fadeInUp pt-32 md:pt-48 lg:pt-40 text-center md:text-left">
          {/* Animated Gradient Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6  text-white animate-gradient">
            YOUR HEALTH IN OUR HANDS
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-lg mx-auto md:mx-0 animate-fadeIn delay-200">
            We provide top-notch healthcare solutions with personalized
            attention and expert guidance to keep you healthy and happy.
          </p>

          {/* Contact */}
          <div className="mb-8 animate-fadeIn delay-400">
            <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
            <p className="text-gray-300">www.yoursite.com</p>
          </div>

          {/* Social buttons */}
          <div className="flex flex-col md:flex-row gap-4 animate-fadeIn delay-600 justify-center md:justify-start pb-20">
            <Button className="bg-white hover:bg-transparent text-red-600 hover:border-1 border-white/30 transition-all duration-300 hover:scale-110 flex items-center gap-2">
              <Youtube className="md:w-5 md:h-5" /> YouTube
            </Button>
            <Button className="bg-white hover:bg-transparent text-blue-600 hover:border-1 border-white/30 transition-all duration-300 hover:scale-110 flex items-center gap-2">
              <Facebook className="md:w-5 md:h-5" /> Facebook
            </Button>
            <Button className="bg-white hover:bg-transparent text-pink-600 hover:border-1 border-white/30 transition-all duration-300 hover:scale-110 flex items-center gap-2">
              <Instagram className="md:w-5 md:h-5" /> Instagram
            </Button>
          </div>
        </div>

        {/* Right (Optional Image/Animation) */}
        <div className="hidden md:flex justify-center items-center">
          {/* Placeholder for future image or illustration */}
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fadeIn {
          opacity: 0;
          animation: fadeInUp 1.2s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-slowZoom {
          animation: slowZoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
