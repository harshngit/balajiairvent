import React from 'react'
import Image from 'next/image'

const Testinomial = () => {
  return (
    <div className="w-full xxl:px-[220px] xl:px-[96px] md:px-[64px] px-5 lg:py-14 py-10 font-onest">
      <div className="lg:mx-6 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* Left text column */}
        <div className="flex flex-col gap-3">
          <span className="text-[#E77853] text-[28px] font-light">Testimonial</span>
          <h2 className="text-[#0F2850] font-light leading-snug text-3xl xl:text-[40px] md:text-[32px] max-w-[520px]">
            What our <span className="bg-blue-gradient text-transparent bg-clip-text">Clients</span> have
            <br className='hidden md:block' /> to say about us...
          </h2>
        </div>

        {/* Right image with testimonial card on the right side */}
        <div className=" w-full rounded-xl ">
          

          {/* Testimonial card */}
          <div className="">
            <div className="relative rounded-xl bg-[#F0F0F0] border border-[#E6A694] shadow-sm p-4 md:p-6">
              {/* comma icon */}
              <Image src={'/asset/commaup.png'} alt="quote" width={36} height={36} className="absolute lg:-left-14 -left-3 lg:-top-3 -top-5 w-[38px] h-[38px] md:w-[76px] md:h-[76px]" />

              <div className="text-[#0F2850] text-[14px] xl:text-[24px] md:text-[18px] font-light leading-relaxed">
                <p>Balaji AirVent’s team has consistently demonstrated a deep understanding of our needs and delivered innovative solutions that meet our expectations. Their customer-focused approach is truly commendable.</p>
                <p className="mt-2">We appreciate your business.<br/>Thank you!</p>
              </div>

              {/* Footer strip */}
              <div className="mt-4 md:mt-5 flex justify-start lg:gap-[40px] gap-[20px] items-center rounded-lg bg-white p-3 md:p-4">
                 <div className='flex justify-center items-center'>
                  <Image src={'/asset/logoexternal.png'} alt="quote" width={102} height={70} className="" />
                 </div>
                <div className="text-[#63B0FF] text-[12px] md:text-[18px] leading-snug">
                  <p className="font-medium">Airody Trading LLC, Dubai</p>
                  <p>Jason Joseph P.</p>
                  <p>Admin Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testinomial