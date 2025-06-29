
export default function LaunchPartnerSection() {
  return (
    <section className="relative overflow-hidden  py-24 px-4 md:px-16 text-black">

      <div className="absolute inset-0 z-0">
  
        <img className="w-[100%]  opacity-50" src="/images/black-white.png" alt="city" />
      </div>

      {/* Moving clouds overlay */}
      <div className="absolute inset-0 z-10 top-[190px]">
        <div className="w-[200%] h-full animate-clouds bg-[url('/images/cloudy.png')]" />
      </div>

    
      <div className="relative z-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up"  data-aos-duration="800">
          Not Just a Licence <br />
          A Launch Partner
        </h2>

        <p className="text-gray-700 mb-6" data-aos="fade-up"  data-aos-duration="1000">
          Powering 30 000+ companies across 50+ sectors, RAKEZ turns bold ideas into thriving businesses right from the heart of Ras Al Khaimah, UAE.
        </p>
        <p className="text-gray-700 mb-6"  data-aos="fade-up"  data-aos-duration="1500">
          Backed by the Government of Ras Al Khaimah, RAKEZ offers customised business setup solutions, covering both free zone and non-free zone options.
        </p>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8 text-left text-black font-medium">
          <div data-aos="fade-up"  data-aos-duration="1200" className=" text-center">» Business licences</div>
          <div data-aos="fade-up"  data-aos-duration="1300" className=" text-center">» Business licences</div>
          <div data-aos="fade-up"  data-aos-duration="1400" className=" text-center">» Business licences</div>
          <div data-aos="fade-up"  data-aos-duration="1500" className=" text-center">» Business licences</div>
        </div>

    
        <div className="mt-12 text-center">
             <button className="main-btn main-btn-black mx-auto" data-aos="fade-up"  data-aos-duration="1800">
            <span>
            Learn more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
