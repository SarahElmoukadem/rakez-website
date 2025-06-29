// 'use client'

// import 'keen-slider/keen-slider.min.css'
// import { useKeenSlider } from 'keen-slider/react'

// const slides = [
//   {
//     image: '/images/services-2.jpg',
//     label: 'Economical Hub',
//   },
//   {
//     image: '/images/services-2.jpg',
//     label: 'Industrial Growth',
//   },
//   {
//     image: '/images/services-2.jpg',
//     label: 'Tailored Solutions',
//   },
//   {
//     image: '/images/services-2.jpg',
//     label: 'One-Stop Setup',
//   },
//   {
//     image: '/images/services-2.jpg',
//     label: 'One-Stop Setup',
//   },
//   {
//     image: '/images/services-2.jpg',
//     label: 'One-Stop Setup',
//   },
// ]

// export default function AccordionSlider() {
//   const [ref] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: {
//       origin: 'center',
//       perView: 2.5,
//       spacing: 15,
//     },
//     created: (slider) => {
//       slider.container.addEventListener('mouseover', () => slider.pause())
//       slider.container.addEventListener('mouseout', () => slider.play())
//     },
//   })

//   return (
//     <div ref={ref} className="keen-slider h-[400px] w-full">
//       {slides.map((item, i) => (
//         <div
//           key={i}
//           className="keen-slider__slide relative transition-all duration-500 group hover:scale-[1.02]"
//         >
//           <img
//             src={item.image}
//             alt={item.label}
//             className="w-full h-full object-cover brightness-75 transition-all group-hover:brightness-100"
//           />
//           <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl rotate-[-90deg] group-hover:rotate-0 transition-all duration-300">
//             {item.label}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }



'use client'

import * as Accordion from '@radix-ui/react-accordion'
// import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'

const accordionItems = [
  {
    title: 'Economical Hub',
    content:
      'RAKEZ supports startups and SMEs with cost-effective business setup packages.',
    image: '/images/services-1.jpg',
  },
  {
    title: 'Industrial Growth',
    content:
      'Access to strategic industrial zones, warehouses, and ready-built facilities.',
    image: '/images/services-1.jpg',
  },
  {
    title: 'Tailored Solutions',
    content:
      'Custom-fit solutions for freelancers, corporates, and global investors.',
    image: '/images/services-1.jpg',
  },
  {
    title: 'One-Stop Setup',
    content:
      'End-to-end support for licensing, visas, and office spaces.',
    image: '/images/services-1.jpg',
  },
]

export default function VerticalAccordion() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="item-0"
      className="w-full flex flex-col gap-2"
    >
      {accordionItems.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="overflow-hidden border rounded-xl"
        >
          <Accordion.Header>
            <Accordion.Trigger className={clsx(
              'w-full flex items-center justify-between p-4 text-left font-bold text-lg transition',
              'hover:bg-gray-100 data-[state=open]:bg-gray-100'
            )}>
              {item.title}
              {/* <ChevronDown className="transition-transform data-[state=open]:rotate-180" /> */}
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 text-sm data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <div className="relative w-full h-[200px] rounded overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
            </div>
            <p className="text-gray-700">{item.content}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
