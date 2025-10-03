import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Stethoscope } from "lucide-react";
import DrVaishaliPhoto from "../../../assests/dr4.jpg"; // replace with actual image
import AppointmentForm from "./AppiontmentForm";

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
  <div {...props} className={`rounded-xl   bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div {...props} className={`p-2 ${className}`}>
    {children}
  </div>
);











export default function Affiliations() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");
  const prevScrollY = useRef(0);









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






  return (
    <section
      id="affiliations"
      className="py-15 px-6 md:px-12 bg-gradient-to-br from-[#bbe0b6] via-[#d8e2c1] to-[#d5ecfb]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center text-black mb-2"
        >
          Affiliations & Expertise
        </motion.h2>
        <div className="w-30  md:w-54 h-1 bg-gradient-to-r from-[#407338] via-[#98BF45] to-[#2A86BF] mx-auto mb-8 rounded-full"></div>

        <Card className="overflow-hidden shadow-2xl rounded-2xl bg-white">
          <CardContent className=" md:flex items-center">
            {/* Doctor Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/3 flex items-center justify-center p-6"
            >
              <img
                src={DrVaishaliPhoto}
                alt="Dr. Vaishali Sharma"
                className="w-64 h-64 object-cover pt- rounded-full border-4 border-white shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Doctor Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-2/3 p-2 md:p-8"
            >
              <h3 className="text-2xl font-bold text-[#407338] mb-2">
                Dr. Vaishali Sharma
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Fertility & Women&apos;s Health Specialist
              </p>

              {/* Qualifications */}
 
<div className="space-y-4">
  <div className="flex items-start gap-3">
    <GraduationCap className="w-6 h-6 text-[#2A86BF] flex-shrink-0" />
    <p className="text-gray-700 text-sm sm:text-base">
      <span className="font-semibold">Qualifications:</span> MD (Obs & Gyn), Fellowship in Reproductive Medicine
    </p>
  </div>
  <div className="flex items-start gap-3">
    <Stethoscope className="w-6 h-6 text-[#407338] flex-shrink-0" />
    <p className="text-gray-700 text-sm sm:text-base">
      <span className="font-semibold">Expertise:</span> IVF Consultation & Planning, Antenatal Care, Women&apos;s Health
    </p>
  </div>
  <div className="flex items-start gap-3">
    <Award className="w-6 h-6 text-[#98BF45] flex-shrink-0" />
    <p className="text-gray-700 text-sm sm:text-base">
      <span className="font-semibold">Clinical Experience:</span> 15+ years in reproductive medicine, known for compassionate patient care and successful IVF outcomes.
    </p>
  </div>
</div>


              {/* CTA */}
              <div className="mt-6">
                <button
  onClick={() => handleScrollTo("contact")}
                  className="bg-[#2A86BF] px-4 rounded-3xl py-2 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>

      <AppointmentForm
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </section>
  );
}
