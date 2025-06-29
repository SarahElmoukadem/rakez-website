'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

type Partner = {
  logo: string
  title: string
  subtitle: string
}

const partners: Partner[] = [
  {
    logo: '/images/partners/p-1.jpg',
    title: 'RAK Courts',
    subtitle: 'Notary Public and Labour Affairs',
  },
  {
    logo: '/images/partners/p-2.jpg',
    title: 'Customs Department',
    subtitle: 'Import and Export Support',
  },
  {
    logo: '/images/partners/p-3.png',
    title: 'Environment Protection and Development Authority',
    subtitle: 'Environmental Permit for Industrial Projects',
  },
  {
    logo: '/images/partners/p-4.jpg',
    title: 'Etihad Credit Insurance',
    subtitle: 'UAE’s Export Credit Agency',
  },
  {
    logo: '/images/partners/p-5.png',
    title: 'RAK Department of Economic Development',
    subtitle: 'Issuance of Non-Free Zone Licence',
  },
  {
    logo: '/images/partners/p-6.png',
    title: 'Chamber of Commerce',
    subtitle: 'Membership and Certification',
  },
]

export default function PartnersSlider() {
  return (
    <section className="bg-[#f9f9f9] py-20 text-center">
      <h4 className="text-xl font-medium" data-aos="fade-up"  data-aos-duration="1500">Partners</h4>
      <h2 className="text-3xl md:text-4xl font-bold my-2" data-aos="fade-up"  data-aos-duration="1500">Built on Trusted Networks</h2>
      <p className="text-gray-600 mb-12" data-aos="fade-up"  data-aos-duration="1500">Powering Business Together</p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full px-8"
      >
        {partners.map((partner, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-6 rounded shadow text-center h-full flex flex-col justify-center items-center">
              <img
                src={partner.logo}
                alt={partner.title}
                className="h-16 w-auto object-contain mb-4"
                 data-aos="fade-up"  data-aos-duration="1200"
              />
              {/* <h5 className="font-semibold text-sm">{partner.title}</h5>
              <p className="text-xs text-gray-500">{partner.subtitle}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
