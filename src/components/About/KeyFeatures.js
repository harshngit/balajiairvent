'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const features = [
	{
		icon: '/asset/about/keyfeature/1.webp',
		title: 'Top of the line product range',
	},
	{
		icon: '/asset/about/keyfeature/2.webp',
		title: 'State of the art production facility employing skilled technicians and contemporary processes',
	},
	{
		icon: '/asset/about/keyfeature/3.webp',
		title: 'Superior grade, virgin quality raw materials used',
	},
	{
		icon: '/asset/about/keyfeature/4.webp',
		title: 'Aesthetically pleasing designs and flawless finishing',
	},
	{
		icon: '/asset/about/keyfeature/5.webp',
		title: 'Fair and cost optimizing price range.',
	},
	{
		icon: '/asset/about/keyfeature/6.webp',
		title: 'Constant innovation and product development',
	},
	{
		icon: '/asset/about/keyfeature/7.webp',
		title: 'Excellent packaging, transportation and logical support',
	},
	{
		icon: '/asset/about/keyfeature/8.webp',
		title: 'On the dot deliveries',
	},
	{
		icon: '/asset/about/keyfeature/9.webp',
		title: 'Diligent after-sales services with informed technical back-up.',
	},
	{
		icon: '/asset/about/keyfeature/10.webp',
		title: 'Professional attitude and straightforward trade practices.',
	},
];

const KeyFeatures = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const [activeIndex, setActiveIndex] = useState(0);

	const getSlideStyle = (index) => {
		const currentIndex = activeIndex;
		const nextIndex = (currentIndex + 1) % features.length;
		const nextNextIndex = (currentIndex + 2) % features.length;

		if (index === currentIndex) {
			// Active slide - white background
			return 'bg-white text-[#000] scale-y-1';
		} else if (index === nextIndex) {
			// Next two slides - lighter blue
			return 'bg-[#63B0FF] text-white';
		} else if (index === nextNextIndex) {
			// All other slides - darker blue
			return 'bg-[#1666B6] text-white';
		} else {
			return 'bg-[#1666B6] text-white';
		}
	};
	const reorderPagination = (activeIdx) => {
		const paginationEl = document.querySelector('.custom-pagination');
		if (!paginationEl) return;

		const bullets = Array.from(paginationEl.children);
		const totalBullets = bullets.length;

		// Calculate order: active in center, others around it
		const orderedIndices = [];

		// Add active bullet first (will be in center)
		orderedIndices.push(activeIdx);

		// Add bullets before active (left side)
		for (let i = 1; i <= Math.floor(totalBullets / 2); i++) {
			const leftIdx = (activeIdx - i + totalBullets) % totalBullets;
			orderedIndices.unshift(leftIdx);
		}

		// Add bullets after active (right side)
		for (let i = 1; i <= Math.floor(totalBullets / 2); i++) {
			const rightIdx = (activeIdx + i) % totalBullets;
			orderedIndices.push(rightIdx);
		}

		// Re-append existing nodes to avoid losing handlers
		const orderedNodes = orderedIndices.map((idx) => bullets[idx]);
		paginationEl.innerHTML = '';
		orderedNodes.forEach((node) => paginationEl.appendChild(node));
	};

	React.useEffect(() => {
		reorderPagination(activeIndex);
	}, [activeIndex]);
	return (
		<section className=" lg:py-[120px] lg:pl-[40px]">
			{/* Heading */}
			<div className='flex justify-start gap-[10px] lg:flex-row flex-col items-center'>
				<div className="mb-10 lg:w-[30%] w-full px-5 space-y-4">
					<p className="text-[#000000] font-light lg:text-[28px] text-[20px]">
						<span className='text-transparent bg-clip-text bg-blue-gradient'>Key feature </span>
						of our company</p>
					<h2 className="text-[32px] md:text-[30px] font-light whitespace-wrap lg:leading-[40px] text-[#0F2850] mt-2">
						What Sets Balaji Airvent Systems Apart?
					</h2>
				</div>

				{/* Swiper Container */}
				<div className="lg:w-[70%] w-full rounded-[10px] relative lg:left-0 left-[20px] lg:pt-[100px] lg:pb-[50px] bg-[#0F2850] px-[50px] lg:h-[510px] py-10">
					<div className="flex  justify-end gap-3 mb-6">
						<button ref={prevRef} className="">
							<Image
								src={"/asset/leftswipe.png"}
								width={50}
								height={50}
							/>
						</button>
						<button ref={nextRef} className="">
							<Image
								src={"/asset/rightswipe.png"}
								width={50}
								height={50}
							/>
						</button>
					</div>
					{/* <div className="lg:hidden block absolute -bottom-[%] gap-3 mb-6">
						<button ref={prevRef} className="">
							<Image
								src={"/asset/leftswipe.png"}
								width={50}
								height={50}
							/>
						</button>
						<button ref={nextRef} className="">
							<Image
								src={"/asset/rightswipe.png"}
								width={50}
								height={50}
							/>
						</button>
					</div> */}

					{/* Swiper */}
					<Swiper
						modules={[Navigation, Pagination]}
						loop={true}
						centeredSlides={true}
						slidesPerView={2.5}
						spaceBetween={10}
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
						}}
						onInit={(swiper) => {
							swiper.params.navigation.prevEl = prevRef.current;
							swiper.params.navigation.nextEl = nextRef.current;
							swiper.navigation.init();
							swiper.navigation.update();
						}}
						onSlideChange={(swiper) => {
							setActiveIndex(swiper.realIndex);
						}}
						pagination={{
							clickable: true,
							el: '.custom-pagination',
							bulletClass: 'swiper-bullet',
							bulletActiveClass: 'swiper-bullet-active',
							renderBullet: (index, className) => {
								return `<span class="${className}" data-index="${index}"></span>`;
							},
						}}
						breakpoints={{
							0: { slidesPerView: 1.25, centeredSlides: false },
							640: { slidesPerView: 1.5, centeredSlides: false },
							768: { slidesPerView: 2, centeredSlides: false },
							1024: { slidesPerView: 3, centeredSlides: false },
						}}
						className=""
					>
						{features.map((feature, index) =>
						(
							<SwiperSlide key={index} className="!flex !justify-center !h-[220px] relative !items-center">
								<div
									className={`rounded-xl px-6 py-8 flex flex-col gap-6 justify-center items-start transition-all duration-500 ease-in-out !w-[280px] h-[260px] ${getSlideStyle(index)}`}
								>
									<div
										className={`flex justify-center bg-[#F0F0F0] items-center rounded-full border-2 border-[#E77853] transition-all duration-300 ${index === activeIndex ? 'w-[100px] h-[100px] rounded-full' : 'w-[80px] h-[80px]'
											}`}
									>
										<Image src={feature.icon} width={45} height={60} alt="" />
									</div>
									<p className={` font-medium transition-all duration-300 ${index === activeIndex ? 'text-[15px]' : 'text-[14px]'
										}`}>
										{feature.title}
									</p>
								</div>


							</SwiperSlide>
						))}
					</Swiper>


					{/* Custom Pagination Bottom Left */}
					<div className="custom-pagination flex justify-start mt-8"></div>

					{/* Styles moved to globals.css */}
					<div className="absolute right-10 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-[#0F2850] to-transparent" />
				</div>
			</div>
		</section>
	);
};

export default KeyFeatures;
