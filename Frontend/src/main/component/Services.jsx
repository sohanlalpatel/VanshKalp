"use client";
import { FaWhatsapp } from "react-icons/fa";

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
      className="relative py-20 bg-white text-gray-800 overflow-hidden"
    >
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A86BF]/10 via-[#98BF45]/10 to-[#407338]/10 animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl    md:text-4xl font-bold text-center text-black mb-2">
          Our <span className=" ">Services</span>
        </h2>

      <div className="w-34 h-1 bg-gradient-to-r from-[#407338] via-[#98BF45] to-[#2A86BF] mx-auto mb-8 rounded-full"></div>

        {/* Doctors List */}
        <div className="grid md:grid-cols-2 gap-10">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="relative rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b4e2ff] via-[#e5f1ca] to-[#c6fcbd] opacity-90"></div>
              <div className="relative p-4 md:p-8 text-black">
                {/* Doctor Name + WhatsApp */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl md:text-xl font-semibold drop-shadow-md">
                    {doc.name}
                  </h3>
                  <a
                    href={doc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-full shadow hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    <FaWhatsapp size={20} />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                </div>

                {/* Services List */}
                <ul className="space-y-3">
                  {doc.services.map((service, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm md:text-md group hover:translate-x-2 transition-transform duration-300"
                    >
                      <span className="h-1 w-1  md:w-2 md:h-2 mt-2 bg-black rounded-full group-hover:bg-yellow-300 transition-colors"></span>
                      <p>{service}</p>
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
