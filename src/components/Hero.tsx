export default function HeroSection() {
  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
   
         <video
         className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/RAKEZ-Free-Zone.mp4"
          autoPlay
          loop
          muted
          playsInline
         />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-40  z-[2]" />


      <div className="relative z-10 flex items-center h-full px-8 lg:px-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6"  data-aos="fade-up"  data-aos-duration="800">
            Smart Support at Every Step
          </h1>
          <p className="text-lg md:text-xl mb-8"  data-aos="fade-up"  data-aos-duration="1000">
            Explore RAKEZ for Seamless Setup, Custom Solutions, and Ongoing Support in the UAE
          </p>
          <a href="a" className="main-btn"  data-aos="fade-up"  data-aos-duration="1200">
            <span>
            Get Started
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
