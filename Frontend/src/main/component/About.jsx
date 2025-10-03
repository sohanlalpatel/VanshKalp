"use client";

import DrPhoto from "../../../assests/aboutdr.jpg"; // ✅ fix "assets" spelling

export default function AboutUs() {
  return (
    <section
      className="py-20 bg-gradient-to-r from-[#faf8f8] via-white to-[#ffffff]"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-start gap-16">
        {/* Left: Photo + Achievements */}
        <div className="space-y-8">
          {/* Photo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#2A86BF] via-[#98BF45] to-[#407338] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ">
              <img
                src={DrPhoto}
                alt="Dr. Jignesh Sharma"
                className="w-full h-70 md:h-[500px] object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Achievements */}
          {/* <div
            className="bg-gradient-to-r from-[#2A86BF]/90 via-[#98BF45]/90 to-[#407338]/90 
             text-white rounded-2xl shadow-xl p-6 backdrop-blur-lg w-full"
          >
            <h3 className="text-2xl font-bold mb-4 border-b border-white/30 pb-2">
              Achievements
            </h3>
            <ul className="space-y-2">
              <li>🏆 Recipient of the Best Cardiologist Award 2022</li>
              <li>📑 Published 20+ research papers in reputed journals</li>
              <li>
                🎤 Invited speaker at national & international conferences
              </li>
              <li>💙 Led free heart check-up camps for community health</li>
            </ul>
          </div> */}
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#407338] border-b-4 border-[#98BF45] inline-block pb-2">
            Dr. Jignesh Sharma
          </h2>

          {/* Qualifications */}
          <p className="text-xl font-semibold text-[#2A86BF]">
            MBBS, MD – Cardiology
          </p>

          {/* Bio */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Dr. Jignesh Sharma is a highly respected cardiologist with over 15
            years of experience in providing exceptional patient care. His
            specialties include
            <span className="text-[#407338] font-semibold">
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
              preventive cardiology
            </span>
            .
          </p>

          {/* Journey */}
          <div className="bg-white shadow-md rounded-xl  p-3 md:p-6 border-l-4 border-[#98BF45]">
            <h3 className="text-2xl font-semibold text-[#407338] mb-3">
              Professional Journey
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Completed MBBS from XYZ Medical College</li>
              <li>MD in Cardiology from ABC University</li>
              <li>Worked at PQR Hospital for 10 years as Senior Consultant</li>
              <li>Founded HeartCare Clinic in 2018</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
