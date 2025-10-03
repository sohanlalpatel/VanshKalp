"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import banner1 from "../../../assests/bgHero.png";
import image from "../../../assests/cut.png";

const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center font-medium transition-all duration-300 md:px-2 md:py-2 ${className}`}
  >
    {children}
  </button>
);
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slowZoom"
        style={{ backgroundImage: `url(${banner1})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="order-2 md:order-1 animate-fadeInUp pt-28 md:pt-40 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white animate-gradient">
            YOUR HEALTH IN OUR HANDS
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-lg mx-auto md:mx-0 animate-fadeIn delay-200">
            We provide top-notch healthcare solutions with personalized
            attention and expert guidance to keep you healthy and happy.
          </p>

          {/* Image should appear right below paragraph in mobile */}
          <div className=" md:hidden flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full md:border-4 border-[#98BF45] shadow-lg animate-pulse"></div>
              <img
                src={image}
                alt="Healthcare illustration"
                className="relative w-49 sm:w-56 h-auto object-contain rounded-full p-1 md:p-2 md:bg-white/10 md:backdrop-blur-md"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="mb-8 animate-fadeIn delay-400">
            <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
            <p className="text-gray-300">www.vanshkalp.com</p>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-row gap-4 animate-fadeIn delay-600 justify-center md:justify-start pb-10">
            {/* YouTube */}
            <Button
              className="bg-white text-red-600 border border-transparent 
               hover:bg-red-50 hover:border-red-200 hover:scale-110 
               rounded-full md:rounded-lg 
               w-10 h-10 md:w-auto md:h-auto 
               shadow-md hover:shadow-xl 
               group"
            >
              <Youtube className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span className="hidden md:inline ml-2">YouTube</span>
            </Button>

            {/* Facebook */}
            <Button
              className="bg-white text-blue-600 border border-transparent 
               hover:bg-blue-50 hover:border-blue-200 hover:scale-110 
               rounded-full md:rounded-lg 
               w-10 h-10 md:w-auto md:h-auto 
               shadow-md hover:shadow-xl 
               group"
            >
              <Facebook className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
              <span className="hidden md:inline ml-2">Facebook</span>
            </Button>

            {/* Instagram */}
            <Button
              className="bg-white text-pink-600 border border-transparent 
               hover:bg-pink-50 hover:border-pink-200 hover:scale-110 
               rounded-full md:rounded-lg 
               w-10 h-10 md:w-auto md:h-auto 
               shadow-md hover:shadow-xl 
               group"
            >
              <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              <span className="hidden md:inline ml-2">Instagram</span>
            </Button>
          </div>
        </div>

        {/* Right Image (only visible on md and above) */}
        <div className="order-1 md:order-2 hidden md:flex justify-center items-center relative pb-6 md:pt-31">
          <div className="relative">
            <div className="absolute inset-0 rounded-full md:border-4 border-[#98BF45] shadow-lg animate-pulse p-2"></div>
            <img
              src={image}
              alt="Healthcare illustration"
              className="relative w-40 sm:w-56 md:w-80 lg:w-[30rem] h-auto object-contain rounded-full p-1 bg-white/10 backdrop-blur-md"
            />
          </div>
        </div>
      </div>

      {/* Animations */}
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
        // .animate-gradient {
        //   background-image: linear-gradient(
        //     90deg,
        //     #98bf45,
        //     #6bb5ff,
        //     #ff6584,
        //     #98bf45
        //   );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
