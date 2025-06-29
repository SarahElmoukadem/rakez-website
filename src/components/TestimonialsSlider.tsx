"use client";
import "swiper/css";
import "swiper/css/pagination";

// type Testimonial = {
//   name: string;
//   title: string;
//   company: string;
//   content: string;
//   image: string;
//   stars?: number;
// };

// const testimonials: Testimonial[] = [
//   {
//     name: "MIHIR SHAH",
//     title: "FOUNDER",
//     company: "NOTUS COMPOSITES FZC",
//     image: "/images/notus.png",
//     content:
//       "We were immediately attracted to establish our manufacturing facility in RAKEZ when we found out that it offers ready-made facilities for affordable rates, which is a must for any startup company. Apart from that, the Al Hamra Industrial Zone is very accessible from Dubai and the rest of the emirates.",
//     stars: 5,
//   },
//   {
//     name: "MIHIR SHAH",
//     title: "FOUNDER",
//     company: "NOTUS COMPOSITES FZC",
//     image: "/images/notus.png",
//     content:
//       "We were immediately attracted to establish our manufacturing facility in RAKEZ when we found out that it offers ready-made facilities for affordable rates, which is a must for any startup company. Apart from that, the Al Hamra Industrial Zone is very accessible from Dubai and the rest of the emirates.",
//     stars: 5,
//   },
//   {
//     name: "MIHIR SHAH",
//     title: "FOUNDER",
//     company: "NOTUS COMPOSITES FZC",
//     image: "/images/notus.png",
//     content:
//       "We were immediately attracted to establish our manufacturing facility in RAKEZ when we found out that it offers ready-made facilities for affordable rates, which is a must for any startup company. Apart from that, the Al Hamra Industrial Zone is very accessible from Dubai and the rest of the emirates.",
//     stars: 5,
//   },
//   {
//     name: "MIHIR SHAH",
//     title: "FOUNDER",
//     company: "NOTUS COMPOSITES FZC",
//     image: "/images/notus.png",
//     content:
//       "We were immediately attracted to establish our manufacturing facility in RAKEZ when we found out that it offers ready-made facilities for affordable rates, which is a must for any startup company. Apart from that, the Al Hamra Industrial Zone is very accessible from Dubai and the rest of the emirates.",
//     stars: 5,
//   },
// ];

export default function TestimonialsSlider() {
  return (
    <section className="py-20 text-center">
      <h4 className="text-xl font-medium" data-aos="fade-up"  data-aos-duration="1200">Testimonials</h4>
      <h2 className="text-3xl md:text-4xl font-bold my-2" data-aos="fade-up"  data-aos-duration="1200">
        Trusted by Businesses
      </h2>
      <p className=" max-w-2xl mx-auto mb-12" data-aos="fade-up"  data-aos-duration="1200">
        Hear from entrepreneurs, startups, and global companies who have chosen
        RAKEZ to launch and grow their business in the UAE.
      </p>
      {/* <div className="p-15">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          className="px-8"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center h-full">
                <div className="w-24 h-24 mb-4 rounded-full border-2 border-black overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex space-x-1 mb-2 text-black">
                  {Array(item.stars || 5)
                    .fill("★")
                    .map((s, i) => (
                      <span key={i} className="text-sm">
                        ★
                      </span>
                    ))}
                </div>
                <h3 className="font-bold text-sm uppercase">{item.name}</h3>
                <p className="text-xs font-medium text-gray-500">
                  {item.title}
                </p>
                <p className="text-xs font-medium text-gray-500 mb-4">
                  {item.company}
                </p>
                <p className="text-sm text-gray-600 italic max-w-xs">{`“${item.content}”`}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </section>
  );
}
