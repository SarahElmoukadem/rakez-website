import Image from "next/image";

// components/OffersSection.js
export default function OffersSection() {
  const offers = [
    { type: "image", image: "/images/services-1.jpg" },
    { type: "text" },
    { type: "image", image: "/images/services-1.jpg" },
    { type: "text" },
    { type: "image", image: "/images/services-1.jpg" },
    { type: "text" },
  ];
// type Offer = {
//   image: string;
// }
  return (
    <section className="bg-white text-black py-20 px-4 md:px-16">
      <div className="text-center mb-16">
        <h4
          className="text-xl font-medium"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Offers
        </h4>
        <h2
          className="text-3xl md:text-4xl font-bold mt-2 mb-4 custom-green"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Smart Setup Savings
        </h2>
        <p
          className="text-gray-600 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Launch Your Business with Special Rates
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-16">
        {offers.map((offer, i) =>
          offer.type === "image" ? (
            <div
              key={i}
              className="w-full h-64"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {typeof offer.image === "string" && offer.image.length > 0 && (
                <Image
                  src={offer.image}
                  alt={`Offer ${i + 1}`}
                  className="w-full h-full object-cover h-[200px]"
                  fill
                />
              )}
            </div>
          ) : (
            <div
              key={i}
              className="bg-white text-left p-6 flex flex-col justify-between h-64 "
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <div>
                <h3
                  className="text-sm font-bold uppercase mb-2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Exclusive Package for Businesswomen
                </h3>
                <p
                  className="text-sm text-gray-700"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Our BusinessWomen Package is designed to empower
                  entrepreneurial and driven ladies like you!
                </p>
              </div>
              <a
                href="#"
                className="text-2xl mt-4"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                »
              </a>
            </div>
          )
        )}
      </div>

      {/* Learn More Button */}
      <div className="text-center">
        <button
          className="main-btn"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <span>Learn more</span>
        </button>
      </div>
    </section>
  );
}
