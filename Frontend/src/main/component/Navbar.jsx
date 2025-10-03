"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "../../../assests/logo.png";
import AppointmentForm from "./AppiontmentForm";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");

  const prevScrollY = useRef(0);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "affiliations", label: "Specialists" },
    { id: "services", label: "Services" },
    { id: "lifestyle", label: "LifeStyle" },
   ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Scroll direction
      setScrollDir(currentScrollY > prevScrollY.current ? "down" : "up");
      prevScrollY.current = currentScrollY;

      // Active section
      let current = "hero";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80) current = section.id;
        }
      });
      setActiveSection(current);

      // Navbar background
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };



   const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* --------- Top Header --------- */}
      <div
        className={`fixed top-0 left-0 w-full  text-white text-sm z-20   bg-sky-500/20 transition-transform duration-300 border-b-1 ${
          scrollDir === "down" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-end gap-2">
          <div className="flex flex-col md:flex-row justify-end gap-4 text-end md:text-right">
            <span className=" flex items-center gap-1">
              <MapPin size={16} className="text-white/80" />
              123 Main Street, City
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Phone size={16} className="text-white/80" />
              +91 98765 43210
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Mail size={16} className="text-white/80" />
              info@clinic.com
            </span>
          </div>
        </div>
      </div>

      {/* --------- Main Navbar --------- */}
      <nav
        className={`fixed left-0 w-full z-40 transition-all duration-300 ${
          scrollDir === "down" ? "top-0" : scrolled ? "top-0" : "top-[36px]"
        } ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer py-2"
              onClick={() => handleScrollTo("hero")}
            >
              <img src={logo} className="w-14 md:w-16" alt="Logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className={`font-medium text-sm lg:text-base transition-colors duration-300 cursor-pointer ${
                    activeSection === section.id
                      ? scrolled
                        ? "text-[#2A86BF] border-b-2 border-[#2A86BF]"
                        : "text-white border-b-2 border-white"
                      : scrolled
                      ? "text-gray-800 hover:text-[#2A86BF]"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {section.label}
                </button>
              ))} */}
                <button
                  onClick={() => handleScrollTo("hero")}
                  className={`font-medium text-sm lg:text-base transition-colors duration-300 cursor-pointer ${
                    activeSection === "hero"
                      ? scrolled
                        ? "text-[#2A86BF] border-b-2 border-[#2A86BF]"
                        : "text-white border-b-2 border-white"
                      : scrolled
                      ? "text-gray-800 hover:text-[#2A86BF]"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                Home
                </button>
                <button
                  onClick={() => handleScrollTo("about")}
                  className={`font-medium text-sm lg:text-base transition-colors duration-300 cursor-pointer ${
                    activeSection === "about"
                      ? scrolled
                        ? "text-[#2A86BF] border-b-2 border-[#2A86BF]"
                        : "text-white border-b-2 border-white"
                      : scrolled
                      ? "text-gray-800 hover:text-[#2A86BF]"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                About
                </button>
                <button
                  onClick={() => handleScrollTo("affiliations")}
                  className={`font-medium text-sm lg:text-base transition-colors duration-300 cursor-pointer ${
                    activeSection === "affiliations"
                      ? scrolled
                        ? "text-[#2A86BF] border-b-2 border-[#2A86BF]"
                        : "text-white border-b-2 border-white"
                      : scrolled
                      ? "text-gray-800 hover:text-[#2A86BF]"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                Affiliations
                </button>
                <button
                  onClick={() => handleScrollTo("services")}
                  className={`font-medium text-sm lg:text-base transition-colors duration-300 cursor-pointer ${
                    activeSection === "services"
                      ? scrolled
                        ? "text-[#2A86BF] border-b-2 border-[#2A86BF]"
                        : "text-white border-b-2 border-white"
                      : scrolled
                      ? "text-gray-800 hover:text-[#2A86BF]"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                Services
                </button>
                <button
                  onClick={() => handleScrollTo("lifestyle")}
                  className={`font-medium text-sm lg:text-base transition-colors duration-300 cursor-pointer ${
                    activeSection === "lifestyle"
                      ? scrolled
                        ? "text-[#2A86BF] border-b-2 border-[#2A86BF]"
                        : "text-white border-b-2 border-white"
                      : scrolled
                      ? "text-gray-800 hover:text-[#2A86BF]"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                Lifestyle
                </button>
                {/* <button
                  onClick={() => handleScrollTo("hero")}
                  className={`font-medium text-sm lg:text-base transition-colors duration-300 cursor-pointer ${
                    activeSection === "hero"
                      ? scrolled
                        ? "text-[#2A86BF] border-b-2 border-[#2A86BF]"
                        : "text-white border-b-2 border-white"
                      : scrolled
                      ? "text-gray-800 hover:text-[#2A86BF]"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                Home
                </button> */}
           <button
  onClick={() => handleScrollTo("contact")}
  className={`w-full mt-2 px-4 py-2 rounded-full font-semibold transition cursor-pointer ${
    scrolled
      ? "bg-[#2A86BF] text-white hover:bg-[#246ea0]"
      : "bg-white text-[#2A86BF] hover:bg-gray-100"
  }`}
>
  Book Appointment
</button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                  scrolled ? "text-gray-800" : "text-white"
                } focus:outline-none`}
              >
                {isOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } ${scrolled ? "bg-white" : "bg-black/80"}`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScrollTo(section.id)}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors duration-300 ${
                  activeSection === section.id
                    ? scrolled
                      ? "text-[#2A86BF] bg-gray-100"
                      : "text-[#5EA8CD] bg-white/10"
                    : scrolled
                    ? "text-gray-800 hover:text-[#2A86BF] hover:bg-gray-100"
                    : "text-white hover:text-[#5EA8CD] hover:bg-white/10"
                }`}
              >
                {section.label}
              </button>
            ))}
          <button
  onClick={() => handleScrollTo("contact")}
  className={`w-full mt-2 px-4 py-2 rounded-full font-semibold transition cursor-pointer ${
    scrolled
      ? "bg-[#2A86BF] text-white hover:bg-[#246ea0]"
      : "bg-white text-[#2A86BF] hover:bg-gray-100"
  }`}
>
  Book Appointment
</button>
          </div>
        </div>
      </nav>

      <AppointmentForm
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </>
  );
}
