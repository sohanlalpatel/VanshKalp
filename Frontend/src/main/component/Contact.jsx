"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

export default function ContactUs() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    emailjs
      .sendForm(
        "service_l6vt1jy", // Replace with your EmailJS service ID
        "template_jfztx9j", // Replace with your EmailJS template ID
        formRef.current,
        "6HBhdrdzkeg658DXP" // Replace with your EmailJS public key
      )

      .then(
        () => {
          setIsLoading(false); // Stop loading

          Swal.fire({
            title: "Message Sent!",
            text: "✅ Your message has been sent successfully.",
            icon: "success",
            timer: 2500, // Auto close after 2.5 seconds
            showConfirmButton: false,
            timerProgressBar: true, // Show a progress bar
            position: "top-end", // Top-right corner
            background: "#e6ffed", // Light green background
            color: "#2A86BF", // Text color
            toast: true, // Makes it a small toast popup
          });
          formRef.current.reset();
        },
        (error) => {
          setIsLoading(false); // Stop loading

          Swal.fire({
            title: "Oops!",
            text: "❌ Failed to send message. " + error.text,
            icon: "error",
            timer: 3000,
            showConfirmButton: false,
            timerProgressBar: true,
            position: "top-end",
            background: "#ffe6e6",
            color: "#d33",
            toast: true,
          });
        }
      );
  };

  return (
    <section id="contact" className="relative py-15 bg-gray-50 overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">
        Contact <span className="text-[#2A86BF]">Us</span>
      </h2>
      <div className="  w-20   md:w-28 h-1 bg-gradient-to-r from-[#407338] via-[#98BF45] to-[#2A86BF] mx-auto mb-8 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Info + Map */}
        <div className="space-y-8">
          {/* Info Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Call Us Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 bg-white rounded-xl shadow hover:scale-105 transition-transform duration-300 w-full">
              <FaPhoneAlt className="text-3xl sm:text-4xl text-yellow-400 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p className="text-sm md:text-base text-gray-600">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 bg-white rounded-xl shadow hover:scale-105 transition-transform duration-300 w-full">
              <FaEnvelope className="text-3xl sm:text-4xl text-red-400 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-sm md:text-base text-gray-600">
                  contact@vanshkalp.com{" "}
                </p>
              </div>
            </div>

            {/* Uncomment if WhatsApp Card is needed */}
            {/* 
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 bg-white rounded-xl shadow hover:scale-105 transition-transform duration-300 w-full">
      <FaWhatsapp className="text-3xl sm:text-4xl text-green-500 flex-shrink-0" />
      <div className="text-center sm:text-left">
        <h4 className="font-semibold text-lg">WhatsApp</h4>
        <p className="text-sm md:text-base text-gray-600">+91 98765 43210</p>
      </div>
    </div>
    */}
          </div>

          {/* Map */}
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.74330793719!2d77.0914936!3d28.7040592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1696355555555!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="clinic-map"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact / Appointment Form */}
        <div className="bg-white rounded-3xl p-2 md:p-8 shadow-2xl w-full  ">
          <h3 className="text-2xl  md:text-3xl font-bold mb-8 text-center text-gray-800">
            Book an Appointment
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6  px-4 sm:px-6"
          >
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition appearance-none"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition appearance-none"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                maxLength={10}
                pattern="\d{10}"
                title="Please enter a 10-digit phone number"
                onChange={(e) =>
                  (e.target.value = e.target.value.replace(/\D/g, ""))
                }
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition appearance-none"
              />
            </div>

            {/* Select Doctor */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Select Doctor
              </label>
              <select
                name="doctor"
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition appearance-none bg-white"
              >
                <option value="">-- Choose Doctor --</option>
                <option value="Dr. Jignesh Sharma">Dr. Jignesh Sharma</option>
                <option value="Dr. Vaishali Sharma">Dr. Vaishali Sharma</option>
              </select>
            </div>

            {/* Appointment Date */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Appointment Date
              </label>
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition appearance-none"
              />
            </div>

            {/* Time Slot */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Time Slot
              </label>
              <select
                name="time"
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition appearance-none bg-white"
              >
                <option value="">-- Select Time --</option>
                <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col sm:col-span-2">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <textarea
                name="message"
                placeholder="Type your message..."
                rows="3"
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition appearance-none resize-none"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-4 cursor-pointer bg-[#407338] text-white py-3 rounded-xl font-semibold text-base transition ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Book Appointment"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
