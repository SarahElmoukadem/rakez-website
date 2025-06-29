
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const slides = [
  {
    bg: "/images/journey.jpg",
    title: "Your Business Journey",
    cta: "Learn More",
  },
  {
    bg: "/images/journey.jpg",
    title: "Your Growth Story",
    cta: "Start Today",
  },
  {
    bg: "/images/journey.jpg",
    title: "Your New Beginning",
    cta: "Explore Now",
  },
];


export default function AboutUsSection() {
//   const [view, setView] = useState<"hero" | "accordion">("hero");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Cycle hero heading text
  //   useEffect(() => {
  //     if (view !== 'hero') return
  //     const interval = setInterval(() => {
  //       setIndex((prev) => (prev + 1) % messages.length)
  //     }, 4000)
  //     return () => clearInterval(interval)
  //   }, [view])

  return (
    <>
      {/* <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setView("hero")}
          className={`px-4 py-2 rounded-md border ${
            view === "hero"
              ? "bg-black text-white"
              : "bg-white border-gray-300 text-gray-700"
          }`}
        >
          Hero View
        </button>
        <button
          onClick={() => setView("accordion")}
          className={`px-4 py-2 rounded-md border ${
            view === "accordion"
              ? " text-white"
              : "bg-white border-gray-300 text-gray-700"
          }`}
        >
          Accordion View
        </button>
      </div> */}

      {/* {view === "hero" ? ( */}
        <section className="relative h-screen w-full overflow-hidden text-white" >
          <div className="absolute inset-0 transition-all duration-1000">
        
             <Image
              src={slides[current].bg}
              alt="Background"
              className="w-full h-full object-cover transition-opacity duration-1000"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80" />
          </div>

          <div className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none">
            <Image
              src="/images/hero-girl-crop.png"
              alt="Woman Standing"
              width={700}
              height={700}
              className="object-contain"
              
            />
          </div>

          <div className="absolute top-16 w-full text-center z-30 px-4 text-black">
            <h4 className="text-lg">Why RAKEZ</h4>
            <h2 className="text-3xl md:text-4xl font-bold mt-2"  data-aos="fade-up">
              More Than a Free Zone
            </h2>
            <p className="mt-2"  data-aos="fade-up">
              A Business Zone Designed for Flexibility, Growth, and Real Support
            </p>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-30" >
            <h3 className="text-3xl md:text-5xl font-semibold transition-opacity duration-500" data-aos="fade-up">
              {slides[current].title}
            </h3>
          </div>

          <div className="absolute bottom-20 w-full text-center z-30">
            <a href="#" className="main-btn mx-auto"  data-aos="fade-up">
              <span>{slides[current].cta}</span>
            </a>
          </div>

          <div className="absolute bottom-6 left-6 z-30 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={clsx(
                  "w-3 h-3 rounded-full border border-white transition-all duration-300",
                  current === index ? "bg-white" : "bg-transparent"
                )}
                aria-label={`Go to slide ${index + 1}`}
                 data-aos="fade-up"
              />
            ))}
          </div>
        </section>
      {/* ) : (
        <VerticalAccordion />
      )} */}
    </>
  );
}
