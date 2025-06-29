"use client";

import { useState } from "react";
import ServicesSectionTwo from "@/components/ServicesSectionTwo";
import Image from "next/image";

export default function ServicesSection() {
  const [activeView, setActiveView] = useState<"v1" | "v2">("v1");

  const services = [
    {
      image: "/images/services-1.jpg",
      title: "Client Services",
      subtitle: "From Startup to Scale–Up",
      items: [
        "Flexi Facilities",
        "Standard Offices",
        "Executive Offices",
        "Shell & Core Offices",
        "Warehouses",
        "Land for Development",
      ],
    },
    {
      image: "/images/services-2.jpg",
      title: "Client Services",
      subtitle: "From Startup to Scale–Up",
      items: [
        "Flexi Facilities",
        "Standard Offices",
        "Executive Offices",
        "Shell & Core Offices",
        "Warehouses",
        "Land for Development",
      ],
    },
    {
      image: "/images/services-3.jpg",
      title: "Client Services",
      subtitle: "From Startup to Scale–Up",
      items: [
        "Flexi Facilities",
        "Standard Offices",
        "Executive Offices",
        "Shell & Core Offices",
        "Warehouses",
        "Land for Development",
      ],
    },
  ];

  return (
    <section className="px-4 md:px-16 py-16 bg-white text-black">
      <div className="text-center mb-10 section-title ">
        <h2
          className="text-2xl font-semibold text-black"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Services
        </h2>
        <h3
          className="text-3xl font-bold custom-green mt-2"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Smart Support at Every Step
        </h3>
        <p
          className="mt-2 text-black max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Explore RAKEZ for Seamless Setup, Custom Solutions, and Ongoing
          Support in the UAE
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveView("v1")}
          className={`px-4 py-2 rounded-md border ${
            activeView === "v1"
              ? "bg-black text-white"
              : "bg-gray border-black-300 text-gray-700"
          }`}
        >
          show Design 1
        </button>
        <button
          onClick={() => setActiveView("v2")}
          className={`px-4 py-2 rounded-md border ${
            activeView === "v2"
              ? "bg-black text-white"
              : "bg-white border-gray-300 text-gray-700"
          }`}
        >
          show Design 2
        </button>
      </div>

      {activeView === "v1" && (
        <>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <Image
                src="/images/main-services.jpg"
                alt="Team discussion"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>

            <div className="h-full flex flex-col justify-between">
              {services.map((service, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <Image
                    src={service.image}
                    alt=""
                    width={800}
                    height={400}
                    className="w-40 h-28 object-cover rounded-md h-[150px]"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  />

                  <div className="flex-1">
                    <h5
                      className="text-sm font-semibold"
                      data-aos="fade-up"
                      data-aos-duration="1800"
                    >
                      {service.title}
                    </h5>
                    <h6
                      className="text-lg font-bold mb-2 custom-green"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      {service.subtitle}
                    </h6>
                    <div className="grid grid-cols-2 gap-y-1  text-gray-700">
                      {service.items.map((item, j) => (
                        <div
                          key={j}
                          data-aos="fade-up"
                          data-aos-duration="2000"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="main-btn main-btn-black mx-auto"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span>Learn more</span>
            </a>
          </div>
        </>
      )}

      {/* View 2 component */}
      {activeView === "v2" && <ServicesSectionTwo />}
    </section>
  );
}
