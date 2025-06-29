"use client";

const ServicesSectionTwo = () => {
  return (
    <div>
      <section className="px-6 pb-12">
        <div className="grid grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 bg-white flex flex-col justify-between">
            <div>
              <h4 className="font-bold">Facilities</h4>
              <p className="font-semibold mt-1 mb-2">
                From Startup to Scale-Up
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Flexi Facilities</li>
                <li>Standard Offices</li>
                <li>Executive Offices</li>
                <li>Shell & Core Offices</li>
                <li>Warehouses</li>
                <li>Land for Development</li>
              </ul>
            </div>
            <div className="mt-4 text-right font-bold text-xl">»</div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/businessman-pointing-graphs-symbols.jpg"
              alt="Services visual 1"
              className="w-full h-full object-cover md:h-[300px]"
            />
          </div>

          <div className="border rounded-xl p-6 bg-white flex flex-col justify-between">
            <div>
              <h4 className="font-bold">Client Services</h4>
              <p className="font-semibold mt-1 mb-2">
                From Startup to Scale-Up
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Flexi Facilities</li>
                <li>Standard Offices</li>
                <li>Executive Offices</li>
                <li>Shell & Core Offices</li>
                <li>Warehouses</li>
                <li>Land for Development</li>
              </ul>
            </div>
            <div className="mt-4 text-right font-bold text-xl">»</div>
          </div>

          <div className="border rounded-xl p-6 bg-white flex flex-col justify-between">
            <div>
              <h4 className="font-bold">Company Setup</h4>
              <p className="font-semibold mt-1 mb-2">
                From Startup to Scale-Up
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Flexi Facilities</li>
                <li>Standard Offices</li>
                <li>Executive Offices</li>
                <li>Shell & Core Offices</li>
                <li>Warehouses</li>
                <li>Land for Development</li>
              </ul>
            </div>
            <div className="mt-4 text-right font-bold text-xl">»</div>
          </div>

          <div className="col-span-2 rounded-xl overflow-hidden relative">
            <img
              src="/images/businessman-pointing-graphs-symbols.jpg"
              alt="Services visual 2"
              className="w-full object-cover  md:h-[300px]"
            />
            <a href="#" className="!absolute top-1/2 left-0 right-0 translate-y-[-50%] mx-auto main-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSectionTwo;
