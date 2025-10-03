import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import bgimage from "../../../assests/testmonial.png"
const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Patient",
    doctor: "Dr. Jignesh Sharma",
    city: "Bhopal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1stFxRzbdljrVjFr0bdJr4zV2TKjULKUP-A&s",
    rating: 5,
    text: "Dr. Sharma provided excellent care during my consultation. The treatment plan was clear and very effective. Highly recommended!",
  },
  {
    name: "Sneha Verma",
    role: "Patient",
    doctor: "Dr. Vaishali Sharma",
    city: "Bhopal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1stFxRzbdljrVjFr0bdJr4zV2TKjULKUP-A&s",
    rating: 5,
    text: "I felt very comfortable discussing my concerns. Dr. Vaishali's advice was professional and reassuring.",
  },
  {
    name: "Amit Joshi",
    role: "Patient",
    doctor: "Dr. Jignesh Sharma",
    city: "Bhopal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1stFxRzbdljrVjFr0bdJr4zV2TKjULKUP-A&s",
    rating: 5,
    text: "Amazing consultation! Dr. Sharma explained everything clearly and the follow-up support was excellent.",
  },
  {
    name: "Priya Singh",
    role: "Patient",
    doctor: "Dr. Vaishali Sharma",
    city: "Bhopal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1stFxRzbdljrVjFr0bdJr4zV2TKjULKUP-A&s",
    rating: 5,
    text: "I received outstanding care and attention. The staff and Dr. Vaishali made the experience very comfortable and professional.",
  },
];

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-[#98BF45]"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
  </svg>
);

export default function Testimonial() {
  return (
<section
  id="Testimonial"
  className="py-16 px-4 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgimage})`, // ✅ Correct way
  }}
>

      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-1">
            What Our Patients Say
          </h2>
                <div className=" w-49  md:w-64 h-1 bg-gradient-to-r from-[#407338] via-[#98BF45] to-[#2A86BF] mx-auto mb-2 rounded-full"></div>

          <p className="text-md md:text-lg text-black max-w-3xl mx-auto leading-relaxed">
            Discover why patients trust our doctors for premium healthcare.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
  pagination={{ 
    clickable: true,
    el: '.custom-pagination', // custom pagination container
  }}          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 m-2 h-full flex flex-col justify-between ">
                <div>
                  <div className="mb-4 flex gap-1">
                    {Array(t.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} />
                      ))}
                  </div>
                  <blockquote className="text-gray-800 mb-4 text-sm md:text-base font-medium line-clamp-3">
                    "{t.text}"
                  </blockquote>
                  <p className="text-green-700 font-medium text-sm mb-4">
                    Consulted with {t.doctor}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-green-300 shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-base md:text-md">{t.name}</h4>
                    <p className="text-green-600 font-medium text-xs md:text-[11px]">{t.role}</p>
                    <p className="text-gray-500 text-xs md:text-[12px]">{t.city}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}




            <div className="custom-pagination mt-6 flex justify-center"></div>

        </Swiper>
      </div>
    </section>
  );
}
