"use client";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export default function Services() {
  const doctors = [
    {
      name: "Dr. Jignesh Sharma",
      whatsapp: "https://wa.me/919876543210", // replace with actual number
      services: [
        "Online Genetic Counselling",
        "Paediatric Allergy & Asthma Consultation",
        "Non-Invasive Paediatric Cardiology (ECHO, ECG Review)",
      ],
    },
    {
      name: "Dr. Vaishali Sharma",
      whatsapp: "https://wa.me/919876543210", // replace with actual number
      services: [
        "Online Fertility Counselling",
        "IVF Consultation & Planning",
        "Antenatal & Women’s Health Counselling",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 bg-white  text-gray-800 overflow-hidden"
    >
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A86BF]/10 via-[#98BF45]/10 to-[#407338]/10 animate-pulse" />

      <div className="relative mx-auto max-w-7xl   px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl    md:text-4xl font-bold text-center text-black mb-2">
          Our <span className=" ">Services</span>
        </h2>

        <div className="w-34 h-1 bg-gradient-to-r from-[#407338] via-[#98BF45] to-[#2A86BF] mx-auto mb-8 rounded-full"></div>

        {/* Doctors List */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="relative rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105    "
            >
              {/* Gradient Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b4e2ff] via-[#e5f1ca] to-[#c6fcbd] opacity-90 transition-all duration-700 hover:opacity-100"></div>

             <div className="relative p-4 md:p-8 text-black">
  {/* Doctor Name + WhatsApp */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
    <h3 className="text-xl md:text-2xl font-semibold drop-shadow-md">
      {doc.name}
    </h3>

    {/* WhatsApp Button */}
    <a
      href={doc.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center 
                 bg-white text-green-600 
                 rounded-full sm:rounded-full 
                 shadow hover:bg-green-600 hover:text-white 
                 transition duration-300 transform hover:scale-105
                 w-10 h-10 sm:w-auto sm:h-auto sm:px-4 sm:py-2"
    >
      <FaWhatsapp size={20} />
      <span className="hidden sm:inline ml-2">WhatsApp</span>
    </a>
  </div>

  {/* Services List with Advanced Icon */}
  <ul className="space-y-3">
    {doc.services.map((service, i) => (
      <li
        key={i}
        className="flex items-start gap-3 text-sm md:text-md group transition-transform duration-300 hover:translate-x-2 hover:scale-105"
      >
        <FaCheckCircle
          className="w-5 h-5 text-green-500 group-hover:text-yellow-400 transition-colors duration-300"
        />
        <p className="leading-tight">{service}</p>
      </li>
    ))}
  </ul>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
