import React from 'react'
import Image from 'next/image'

const Testinomial = () => {
  return (
    <div className="w-full lg:px-10 px-5 lg:py-14 py-10 font-onest">
      <div className="lg:mx-6 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* Left text column */}
        <div className="flex flex-col gap-3">
          <span className="text-[#E77853] text-[28px] font-light">Testimonial</span>
          <h2 className="text-[#0F2850] font-light leading-snug text-3xl md:text-[40px] max-w-[520px]">
            What our <span className="bg-blue-gradient text-transparent bg-clip-text">Clients</span> have
            <br className='hidden md:block' /> to say about us...
          </h2>
        </div>

        {/* Right image - only right part visible */}
        <div className="relative w-full h-[260px] md:h-[360px] lg:h-[420px] rounded-xl">
          <Image
            src={"/asset/home/testimonial.webp"}
            alt="Testimonial"
            width={710}
            height={408}
            priority={false}
            className="object-cover object-right"
          />
        </div>
      </div>
    </div>
  )
}

export default Testinomial