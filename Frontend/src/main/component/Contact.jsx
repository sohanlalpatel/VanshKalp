"use client";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6vt1jy", // Replace with your EmailJS service ID
        "template_jfztx9j", // Replace with your EmailJS template ID
        formRef.current,
        "6HBhdrdzkeg658DXP" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="relative py-15 bg-gray-50 overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">
        Contact <span className="text-[#2A86BF]">Us</span>
      </h2>
      <div className="  w-20   md:w-28 h-1 bg-gradient-to-r from-[#407338] via-[#98BF45] to-[#2A86BF] mx-auto mb-8 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Info + Map */}
       {/* Left Column: Info + Map */}
<div className="space-y-8">

  {/* Info Cards */}
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
    
    {/* Call Us Card */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 bg-white rounded-xl shadow hover:scale-105 transition-transform duration-300 w-full">
      <FaPhoneAlt className="text-3xl sm:text-4xl text-yellow-400 flex-shrink-0" />
      <div className="text-center sm:text-left">
        <h4 className="font-semibold text-lg">Call Us</h4>
        <p className="text-sm md:text-base text-gray-600">+91 98765 43210</p>
      </div>
    </div>

    {/* Email Card */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 bg-white rounded-xl shadow hover:scale-105 transition-transform duration-300 w-full">
      <FaEnvelope className="text-3xl sm:text-4xl text-red-400 flex-shrink-0" />
      <div className="text-center sm:text-left">
        <h4 className="font-semibold text-lg">Email</h4>
        <p className="text-sm md:text-base text-gray-600">contact@doctorsite.com</p>
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
        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Book an Appointment
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition"
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
                placeholder="email"
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition"
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
                placeholder="number"
                required
                maxLength={10}
                pattern="\d{10}"
                title="Please enter a 10-digit phone number"
                onChange={(e) =>
                  (e.target.value = e.target.value.replace(/\D/g, ""))
                }
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition"
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
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2A86BF]"
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
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition"
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
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2A86BF]"
              >
                <option value="">-- Select Time --</option>
                <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
              </select>
            </div>

            {/* Message - full width */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <textarea
                name="message"
                placeholder="Type your message.........."
                rows="2"
                className="w-full px-4 py-3 border border-gray-400 rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#2A86BF] transition"
              />
            </div>

            {/* Submit Button - full width */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#407338] via-[#98BF45] to-[#2A86BF] text-white py-3 rounded-full font-semibold text-base hover:opacity-90 transition"
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
