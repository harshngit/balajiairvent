"use client";
import React, { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Testinomial = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  const testimonials = [
    {
      text1: "Balaji AirVent’s team has consistently demonstrated a deep understanding of our needs and delivered innovative solutions that meet our expectations. Their customer-focused approach is truly commendable.",
      text2: "We appreciate your business.\nThank you!",
      company: "Airody Trading LLC, Dubai",
      person: "Jason Joseph P.",
      role: "Admin Officer",
      logo: "/asset/logoexternal.png",
    },
    {
      text1: "It gives us great pleasure to share a few words of appreciation for our valued partner, Balaji AirVent.",
      text2: "We have been associated with Balaji AirVent for more than a decade now and truly value their professionalism, reliability, and commitment to quality. Their prompt support and consistent delivery have made them a trusted partner in our growth journey.\n We truly value this partnership and look forward to continuing our successful collaboration in the future.",
      company: "Swegon Blue Box Private Limited, India",
      person: "Nilkanth Maindargi",
      role: "Asst. General Manager - Purchase & Import Logistics",
      logo: "/asset/home/clients/blueboxcolor.webp",
    },
    {
      text1: "Balaji AirVent has been an outstanding partner for our projects. Their team’s professionalism, technical knowledge, and commitment to excellence are truly commendable. They consistently deliver high-quality solutions on time and with great attention to detail.",
      text2: "",
      company: "Nirvaa Solutions  Private Limited",
      person: "Dr. Jagdish Shinde",
      role: "Managing Director",
      logo: "/asset/home/clients/nirvanacolor.webp",
    },
    {
      text1: "We’ve had a great experience working with Balaji Air Vent. Their innovative solutions and customer-centric approach have helped us achieve our goals. Balaji Air Vent is moving ahead with customized solutions that fulfill customer needs.",
      text2: "",
      company: "Rittal India Private Limited",
      person: "Prashant Kunder",
      role: "Sr. Manager - IT Projects",
      logo: "/asset/home/clients/rittallogo.webp",
    },
  ]
  return (
    <div className="w-full xxl:px-[220px] xl:px-[96px] md:px-[64px] px-5 lg:py-14 py-10 font-onest">
      <div className="lg:mx-6 gap-8 flex flex-col lg:flex-row ">
        {/* Left text column */}
        <div className="flex flex-col gap-3 lg:w-[40%] w-full">
          <span className="text-[#E77853] text-[28px] font-light">Testimonials</span>
          <h2 className="text-[#0F2850] font-light leading-snug text-3xl xl:text-[40px] md:text-[32px] max-w-[520px]">
            What our <span className="bg-blue-gradient text-transparent bg-clip-text">Clients</span> have
            <br className='hidden md:block' /> to say about us...
          </h2>
          
						<button 
							onClick={() => {
								if (swiperRef.current) {
									swiperRef.current.slideNext();
								}
							}} 
							className="flex items-center w-[143px] gap-2 border border-[#0F2850] text-[#0F2850] 
							pr-[7px] pl-[20px] py-[10px] rounded-full hover:bg-[#0F2850] hover:text-white 
							transition-all duration-300 ease-in-out text-[16px] transform hover:scale-105"
						>
							View Next
							<Image
								src={"/asset/rightbutton.png"}
								width={28}
								height={28}
							/>

						</button>
					
        </div>

        {/* Right image with testimonial card on the right side */}
        <div className=" rounded-xl relative lg:w-[60%] w-full">
          {/* Side-centered Navigation Buttons */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 z-10">
            {/* <button ref={prevRef} aria-label="Previous" className="pointer-events-auto flex absolute xl:left-[-44px] left-[-24px] top-1/2 -translate-y-1/2 items-center justify-center">
              <Image src={"/asset/leftswipe.png"} width={50} height={50} alt="Previous" className='xl:w-[50px] xl:h-[50px] w-[40px] h-[40px]' />
            </button>
            <button ref={nextRef} aria-label="Next" className="pointer-events-auto absolute flex items-center justify-center xl:right-[-44px] right-[-24px] top-1/2 -translate-y-1/2">
              <Image src={"/asset/rightswipe.png"} width={50} height={50} alt="Next" className='xl:w-[50px] xl:h-[50px] w-[40px] h-[40px]' />
            </button> */}
          </div>

          {/* Testimonial card Swiper */}
          <Swiper
            modules={[Navigation]}
            loop={true}
            centeredSlides={false}
            spaceBetween={20}
            slidesPerView={1}
            initialSlide={1}
            autoHeight={true}
            speed={800}
            effect="slide"
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
                swiper.navigation.init()
                swiper.navigation.update()
              }
              swiperRef.current = swiper
            }}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            className='w-[100%] relative xl:min-h-[400px] md:min-h-[450px] min-h-[400px] !flex'
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className='relative w-full !flex !justify-start !items-center transition-all duration-500 ease-in-out'>
                {/* Testimonial card (layout preserved) */}
                <div className="">
                  <div className="relative w-[100%] rounded-xl bg-[#F0F0F0] border border-[#E6A694] shadow-sm p-4 md:p-6 pt-8 md:pt-10 overflow-hidden">
                    {/* quote icons inside the card */}
                    <Image src={'/asset/commaup.png'} alt="quote-open" width={56} height={56} className="absolute left-1 -top-1 w-[36px] h-[36px] md:w-[45px] md:h-[45px]" />
                    

                    <div className="text-[#0F2850] text-[14px] xl:text-[16px] md:text-[16px] font-light leading-relaxed">
                      <p>{t.text1}</p>
                      <p className="mt-2">
                        {t.text2.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i === 0 ? <br/> : null}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>

                    {/* Footer strip */}
                    <div className="mt-4 md:mt-5 flex justify-start lg:gap-[40px] gap-[20px] items-center rounded-lg bg-white p-3 md:p-4">
                      <div className='flex justify-center items-center'>
                        <Image src={t.logo} alt={t.company} width={102} height={70} className="" />
                      </div>
                      <div className="text-[#63B0FF] text-[12px] md:text-[18px] leading-snug">
                        <p className="font-medium">{t.company}</p>
                        <p>{t.person}</p>
                        <p>{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testinomial