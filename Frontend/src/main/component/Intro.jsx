"use client";
import { FaClinicMedical, FaUserMd, FaMapMarkerAlt } from "react-icons/fa";
import drimage from "../../../assests/clinic.jpg";
import React from "react";

const Intro = () => {
  return (
    <section id="" className="relative py-20 overflow-hidden bg-gray-100">
      {/* Background Gradient Overlay with Animation */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#2A86BF] via-[#98BF45] to-[#407338] opacity-10 animate-pulse"></div> */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight animate-fade-in text-left">
              Welcome to Our Digital platform
            </h2>
            <div
              className="h-1 bg-gradient-to-r from-[#407338] via-[#98BF45] to-[#2A86BF] rounded-full mt-2 
                    w-20 sm:w-32 md:w-48 lg:w-64"
            ></div>
          </div>

          <p className=" text-gray-600 animate-fade-in-up delay-200">
            We are dedicated to genetics, fertility, and maternal & child
            health—helping families overcome challenges of prajana kathinai
            (infertility), genetic disorders, and pregnancy concerns.With a
            strong focus on genetics, we offer advanced diagnosis, counseling,
            and personalized guidance to build healthier generations.we are
            committed to improving maternal and child health by ensuring safe
            motherhood and healthy childhood.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <div className="text-[#2A86BF] text-3xl">
                <FaClinicMedical />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Friendly Clinic Near You
                </h3>
                <p className="text-gray-600 text-sm">
                  This is a short description elaborating the service you have
                  mentioned above.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <div className="text-[#98BF45] text-3xl">
                <FaUserMd />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Experienced Doctors</h3>
                <p className="text-gray-600 text-sm">
                  This is a short description elaborating the service you have
                  mentioned above.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps?q=Delhi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 px-6 py-3 border   text-white rounded-lg font-medium hover:bg-[#6da764] hover:text-white transition-all duration-300 transform hover:scale-105 bg-[#407338] cursor-pointer">
              <FaMapMarkerAlt /> View On Google Map
            </button>
          </a>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 relative flex flex-col items-end">
          {/* Top Image (tall & narrow) */}
          <div className=" overflow-hidden shadow-2xl transform transition-all rounded-2xl duration-500   ">
            <img
              src={drimage}
              alt="Clinic"
              className="w-[450px] h-[300px] md:h-[500px] object-cover"
            />
          </div>

          {/* Bottom Image (slightly bigger, overlapping) */}
          <div className="absolute -bottom-16 md:left-10 rounded-b-full overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.05] hover:-rotate-1 w-52 md:w-72 md:h-72">
            <img
              src="https://plus.unsplash.com/premium_photo-1682310215405-3f493a5fecde?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Clinic Equipment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
