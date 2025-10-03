"use client";
import { useRef } from "react";
import { X } from "lucide-react";
import emailjs from "emailjs-com";

export default function AppointmentForm({ isOpen, onClose }) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6vt1jy",   // Replace with your EmailJS service ID
        "template_jfztx9j",  // Replace with your EmailJS template ID
        formRef.current,
        "6HBhdrdzkeg658DXP"    // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Appointment booked successfully! Check your email.");
          onClose();
        },
        (error) => {
          alert("❌ Failed to send appointment. " + error.text);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 pt-14 overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 cursor-pointer"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-[#2A86BF]">
          Book Your Appointment
        </h2>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-3 py-2 border rounded-lg text-sm md:text-base focus:ring-2 focus:ring-[#2A86BF] outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-3 py-2 border rounded-lg text-sm md:text-base focus:ring-2 focus:ring-[#2A86BF] outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Doctor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Doctor
            </label>
            <select
              name="doctor"
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#2A86BF] outline-none"
            >
              <option value="">-- Choose Doctor --</option>
              <option value="Dr. Sharma - Cardiologist">Dr. Jignesh Sharma</option>
              <option value="Dr. Patel - Dentist">Dr. Vaishali Sharma.</option>
             </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Date
            </label>
            <input
              type="date"
              name="date"
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#2A86BF] outline-none"
            />
          </div>

          {/* Time Slot */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time Slot
            </label>
            <select
              name="time"
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#2A86BF] outline-none"
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
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows="2"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#2A86BF] outline-none"
              placeholder="Enter any note"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#2A86BF] text-white py-2 rounded-full font-semibold text-sm md:text-base hover:bg-[#246ea0] transition"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
