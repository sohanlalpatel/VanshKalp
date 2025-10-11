"use client";

import DrPhoto from "../../../assests/aboutdr.jpg"; // ✅ fix "assets" spelling

export default function AboutUs() {
  return (
    <section
      className="py-20 bg-gradient-to-r from-[#faf8f8] via-white to-[#ffffff]"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Photo */}
        <div className="flex flex-col gap-8">
          {/* Photo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#2A86BF] via-[#98BF45] to-[#407338] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1661492071612-98d26885614a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dr. Jignesh Sharma"
                className="w-full h-80 md:h-[590px] object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Content + Cards */}
        <div className="flex flex-col gap-6">
          {/* Doctor Name */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#407338] border-b-4 border-[#98BF45] inline-block pb-2">
            Dr. Jignesh Sharma
          </h2>

          {/* Qualifications */}
          <p className=" text-lg md:text-xl font-semibold text-[#2A86BF]">
            MBBS, DCH, DNB Pediatrics, DPAA (Sir Gangaramand IAS USA), Fellow
            Genetic (AIIMS), Fellow Pediatric Cardiology (AIIMS)
          </p>

          {/* Bio */}
          <p className="text-gray-700 md:text-lg leading-relaxed">
            Dr. Jignesh Sharma is a highly respected pediatrician and Geneticist
            with over years of experience in providing exceptional patient care.
            His specialties include Genetics, Pediatric Allergy and Asthma and
            Non interventional pediatric cardiology.
            {/* <span className="text-[#407338] font-semibold">
              {" "}
              interventional cardiology
            </span>
            ,
            <span className="text-[#407338] font-semibold">
              {" "}
              heart failure management
            </span>
            , and
            <span className="text-[#407338] font-semibold">
              {" "}
               cardiology
            </span> */}
            .
          </p>

          {/* Cards: Achievements & Professional Journey */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Professional Journey Card */}
            <div
              className="bg-gradient-to-tr from-[#2A86BF]/20 via-[#98BF45]/20 to-[#407338]/20 
                         border-l-4 border-[#98BF45] rounded-2xl shadow-xl p-6 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#407338]">
                Professional Journey
              </h3>
              <ul className="space-y-2 text-sm md:text-base list-disc list-inside text-gray-700">
                <li>Completed MBBS from VM GMC SOLAPUR</li>
                <li>DNB Pediatrics from SDMH, Jaipur</li>
                <li>
                  Fellowship in Genetics and Pediatric Cardiology from AIIMS
                  Bhopal
                </li>
              </ul>
            </div>

            {/* Achievements Card */}
            <div
              className="bg-gradient-to-tr from-[#2A86BF]/20 via-[#98BF45]/20 to-[#407338]/20 
                         border-l-4 border-[#98BF45] rounded-2xl shadow-xl p-6 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#407338]">
                Achievements
              </h3>
              <ul className="space-y-2 text-sm md:text-base list-disc list-inside text-gray-700">
                <li>
                  Diploma jn Pediatric Allergy and Asthma from SirGangaram and
                  IAS USA
                </li>
                <li>&gt;15 Posters and Publications</li>
                <li>Led free health check-up camps for community health</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
