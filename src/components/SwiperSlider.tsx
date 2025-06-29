'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

type Slide = {
  title: string
  subtitle: string
  bg: string
}

const slides: Slide[] = [
  {
    title: "Smart Support at Every Step",
    subtitle: "Explore RAKEZ for Seamless Setup, Custom Solutions, and Ongoing Support in the UAE",
    bg: "/slide-1.jpg",
  },
  {
    title: "More Than a Free Zone",
    subtitle: "A Business Zone Designed for Flexibility, Growth, and Real Support",
    bg: "/slide-2.jpg",
  },
  {
    title: "Your Business Journey Starts Here",
    subtitle: "From Idea to Reality with RAKEZ’s End-to-End Support",
    bg: "/slide-3.jpg",
  },
]

export default function SwiperSlider() {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        effect="fade"
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-md md:text-xl max-w-xl">{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
