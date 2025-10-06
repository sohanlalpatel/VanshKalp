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
          src={DrPhoto}
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
            MBBS, MD – Cardiology
          </p>

          {/* Bio */}
          <p className="text-gray-700 md:text-lg leading-relaxed">
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
                <li>Completed MBBS from XYZ Medical College</li>
                <li>MD in Cardiology from ABC University</li>
                <li>Worked at PQR Hospital for 10 years as Senior Consultant</li>
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
                <li> Recipient of the Best Cardiologist Award 2022</li>
                <li>Published 20+ research papers in reputed journals</li>
                <li>Invited speaker at national & international conferences</li>
                <li>Led free heart check-up camps for community health</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
