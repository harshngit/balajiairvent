"use client"
import React, { useRef, useState } from 'react'
import { Navigation, Controller, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {
	const testimonials = [
		{
			name: "Rajesh S",
			title: "Architect & Interior Designer",
			text: "The quality of Hav'Dor doors is top-class and we loved picking our own style and finish. It was simple to select and our home now looks elegant and grand. Installation was clean and quick.",
			image: "/asset/home/testinomial/Rajesh.webp",
		},
		{
			name: "Anjali Pal",
			title: "Marketing Manager",
			text: "Hav'Dor made our dream door so easy with their clear options and support. The doors are sturdy, stylish, and make our new house feel like a luxury Villa.",
			image: "/asset/home/testinomial/Anjali.webp",
		},

		{
			name: "Vikram R.",
			title: "Government Officer",
			text: "Hav'Dor’s doors are superbly crafted and add a rich, classy vibe to our home. Customizing was hassle-free, and the quality makes every paisa worth it.",
			image: "/asset/home/testinomial/Vikram.webp",
		},

		{
			name: "Neha K.",
			title: "Charted Accountant",
			text: "We picked Hav'Dor for their amazing quality and easy customization process. The doors look so luxurious, our guests can’t stop praising our home’s new look!",
			image: "/asset/home/testinomial/Neha.webp",
		},
	];
	const textSwiperRef = useRef(null);
	const imageSwiperRef = useRef(null);
	const [textSwiper, setTextSwiper] = useState(null);
	const [imageSwiper, setImageSwiper] = useState(null);
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<div className="w-full lg:pl-10 lg:pr-0 lg:py-10 mb-10	 py-10 px-5 font-helvetica" >
			<h2 className="lg:text-[36px] text-[24px] lg:font-light font-light font-helvetica mb-10 lg:ml-[41%]">Our Proud Supporters Say</h2>

			<div className="flex relative justify-center lg:flex-row flex-col-reverse gap-10 lg:items-start items-center ">
				<div className="absolute lg:left-[4.5rem] left-[30%] lg:bottom-[1rem] -bottom-[3rem] z-10 flex justify-center items-center gap-5">
					<button
						ref={prevRef}
						className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center border-[1px] border-[#2F3435] hover:bg-[#f9e3d8] transition"
					>
						<img src="/asset/right.png" className="rotate-180 w-[16px]" alt="Previous" />
					</button>
					<button
						ref={nextRef}
						className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center border-[1px] border-[#2F3435]  hover:bg-[#f9e3d8] transition"
					>
						<img src="/asset/right.png" className="w-[16px]" alt="Next" />
					</button>
				</div>
				{/* Text Swiper */}
				<Swiper
					modules={[Controller, Navigation]}
					onSwiper={setTextSwiper}
					// speed={700}
					// autoplay={{
					// 	delay: 5000,
					// 	disableOnInteraction: true,
					// }}
					controller={{ control: imageSwiper }}
					allowTouchMove={false}
					className="lg:w-[40%] w-full h-full"
				>
					{testimonials.map((item, index) => (
						<SwiperSlide key={index}>
							<div className="space-y-10">
								<div className='flex flex-col'>
									<h3 className="lg:text-[32px] text-[20px] font-helvetica font-400 text-[#2F3435]">{item.name}</h3>
									<p className="italic text-[#2F3435] font-thin lg:text-[32px] ">{item.title}</p>
								</div>
								<p className="relative text-[#2F3435] font-thin italic pl-10">
									<span className="absolute left-7 top-[-10px] w-2 text-black leading-none font-helveticaN"><img src="/asset/comma.png" alt="comma" /></span>
									{item.text}
								</p>
							</div>
						</SwiperSlide>
					))}

				</Swiper>

				{/* Image Swiper */}
				<div className="lg:w-[50%] w-full">
					<Swiper
						modules={[Controller, Navigation]}
						onSwiper={setImageSwiper}
						controller={{ control: textSwiper }}
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
						}}
						onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl = prevRef.current;
							swiper.params.navigation.nextEl = nextRef.current;
						}}
						// speed={700}
						// autoplay={{
						// 	delay: 5000,
						// 	disableOnInteraction: true,
						// }}
						className="h-full w-full "
					>
						{testimonials.map((item, index) => (
							<SwiperSlide key={index} className='flex justify-start  items-start lg:!w-[96%] !w-[96%] lg:gap-0 !gap-[15px] lg:mr-[0px] !mr-[15px]'>
								<img
									src={item.image}
									alt={item.name}
									className="lg:w-[96%] w-[96%]  lg:h-[400px]"
								/>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Navigation buttons */}

				</div>
			</div>
		</div>
	)
}

export default Reviews