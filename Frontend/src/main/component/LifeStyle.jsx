import React, { useEffect, useRef, useState } from "react";

const LifeStyle = () => {
 const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");
  const prevScrollY = useRef(0);





useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Scroll direction
      setScrollDir(currentScrollY > prevScrollY.current ? "down" : "up");
      prevScrollY.current = currentScrollY;

      // Active section
      let current = "hero";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80) current = section.id;
        }
      });
      setActiveSection(current);

      // Navbar background
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);






 const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };










  return (
    <div>
      <section
        id="lifestyle"
        className="relative bg-gray-100 rounded-tl-3xl rounded-br-3xl p-6 sm:p-8 md:p-16 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl py-12 sm:py-16 flex flex-col gap-6">
          {/* Row 1: Heading + 2 cards */}
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Heading */}
            <div className="flex-1 max-w-lg text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pb-2">
                Patients for Today’s Lifestyle
              </h2>
                    <div className="flex justify-center w-38 md:w-64 h-1 bg-gradient-to-r from-[#407338] via-[#98BF45] to-[#2A86BF] mx-auto mb-2 rounded-full"></div>

              <p className="mt-2 text-base sm:text-lg text-black">
                We Have All Your Clinic Needs Covered
              </p>
            </div>

            {/* 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {[
                {
                  title: "Comprehensive Health Checkups",
                  description:
                    "Helping patients recover strength, mobility, and flexibility after injuries or surgeries.",
                  img: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
                },
                {
                  title: "Preventive Care Services",
                  description:
                    "Helping patients recover strength, mobility, and flexibility after injuries or surgeries.",
                  img: "https://thumbs.dreamstime.com/b/writing-note-showcasing-health-prevention-diagnosis-tests-medical-consultation-man-holding-120585430.jpg",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden shadow-lg transform transition-all duration-300 rounded-2xl"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    <p className="text-sm mt-1">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "Wellness Screenings",
                description:
                  "Helping patients recover strength, mobility, and flexibility after injuries or surgeries.",
                img: "https://media.istockphoto.com/id/1152844782/photo/im-glad-to-see-you-doing-well.jpg?s=612x612&w=0&k=20&c=r7KVPoP1UT4qANvyr3jeXokWVdnUOJ732on6Ve-ynCY=",
              },
              {
                title: "Nutritional Counseling",
                description:
                  "Helping patients recover strength, mobility, and flexibility after injuries or surgeries.",
                img: "https://irp.cdn-website.com/056e16c2/dms3rep/multi/Nutrition-Counseling.png",
              },
              {
                title: "Mental Health Support",
                description:
                  "Helping patients recover strength, mobility, and flexibility after injuries or surgeries.",
                img: "https://media.istockphoto.com/id/1513072392/photo/hands-holding-paper-head-human-brain-with-flowers-self-care-and-mental-health-concept.jpg?s=612x612&w=0&k=20&c=CCzxREX01-dEqN3P_1M1ZrsZeenCxTmDWbp-goLwjMc=",
              },
              {
                title: "Chronic Disease Management",
                description:
                  "Helping patients recover strength, mobility, and flexibility after injuries or surgeries.",
                img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2794883.jpeg",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden shadow-lg transform transition-all duration-300 rounded-2xl"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <p className="text-sm mt-1">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: 2 Cards + CTA */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {[
                {
                  title: "Physical Therapy Services",
                  description:
                    "Helping patients recover strength, mobility, and flexibility after injuries or surgeries.",
                  img: "https://krsnaphysioplus.com/wp-content/uploads/2019/03/physiotherapy.png",
                },
                {
                  title: "Health Education Programs",
                  description:
                    "Programs designed to educate patients about preventive care and healthy lifestyle choices.",
                  img: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden shadow-lg transform transition-all duration-300 rounded-2xl"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    <p className="text-sm mt-1">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex-shrink-0 mt-4 md:mt-0">
              <button
                  onClick={() => handleScrollTo("contact")}
                style={{
                  background:
                    "linear-gradient(135deg, #2A86BF, #98BF45, #407338)",
                }}
                className="text-white px-10 sm:px-14 py-4 sm:py-26 rounded-br-full font-semibold shadow-lg text-lg sm:text-xl transition-all hover:scale-105 cursor-pointer"
              >
                Consult With Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeStyle;
