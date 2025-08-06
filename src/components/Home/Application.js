"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const data = [
	{
		title: "Data Centre",
		description:
			"Various customised solutions given by us to our clients to reduce energy consumption.",
		images: [
			"/asset/home/application/1/1.webp",
			"/asset/home/application/1/2.webp",
			"/asset/home/application/1/3.webp",
		],
	},
	{
		title: "Airports",
		description:
			"Solutions given for cooling large area with pleasant cooling environment.",
		images: [
			"/asset/home/application/2/2.webp",
			"/asset/home/application/2/1.webp",
			"/asset/home/application/2/3.webp",
		],
	},
	{
		title: "Cinema Theaters",
		description:
			"Products designed and choosen in such a way so aesthetic look of Cinema Hall should not be hampered.",
		images: [
			"/asset/home/application/3/2.webp",
			"/asset/home/application/3/1.webp",
			"/asset/home/application/2/3.webp",
		],
	},
	{
		title: "Fitness Centers",
		description:
			"Positioning right solution at right place is most important for fitness centers.",
		images: [
			"/asset/home/application/4/1.webp",
			"/asset/home/application/4/2.webp",
			"/asset/home/application/4/3.webp",
		],
	},
	{
		title: "Food Store",
		description:
			"Solution given for maintaining Food Quality and pleasant environment for customers.",
		images: [
			"/asset/home/application/5/1.webp",
			"/asset/home/application/5/2.webp",
			"/asset/home/application/5/3.webp",
		],
	},
	{
		title: "Hotels",
		description:
			"Perfect air distribution solution for Hotel Lobby creates good impression about Hotel.",
		images: [
			"/asset/home/application/6/1.webp",
			"/asset/home/application/6/2.webp",
			"/asset/home/application/6/3.webp",
		],
	},
	{
		title: "Malls",
		description:
			"Our experience of years shows that diffusers offers a substantially better & more unform air pattern than can be achieved with traditional systems in Malls.",
		images: [
			"/asset/home/application/7/1.webp",
			"/asset/home/application/7/2.webp",
			"/asset/home/application/7/3.webp",
		],
	},
	{
		title: "Supermarkets",
		description:
			"For large retail areas we can provide supply air through laser cut perforations or nozzles, whichever suits the application best.",
		images: [
			"/asset/home/application/8/1.webp",
			"/asset/home/application/8/2.webp",
			"/asset/home/application/8/3.webp",
		],
	},
	{
		title: "Corporate Offices",
		description:
			"Correctly manufactured and perfectly installed fabric diffusers become an elegant part of an interior.",
		images: [
			"/asset/home/application/9/1.webp",
			"/asset/home/application/9/2.webp",
			"/asset/home/application/9/3.webp",
		],
	},
	{
		title: "Pools",
		description:
			"Our many installations at sports and fitness centres provide comfortable cooling air movement for customers working out.",
		images: [
			"/asset/home/application/10/1.webp",
			"/asset/home/application/10/2.webp",
			"/asset/home/application/10/3.webp",
		],
	},
	{
		title: "Sports Hall",
		description:
			"We are able to create a large range of diffusion air patterns to suit any sports hall.",
		images: [
			"/asset/home/application/11/1.webp",
			"/asset/home/application/11/2.webp",
			"/asset/home/application/11/3.webp",
		],
	},
];

export default function Application() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	const x = useTransform(
		scrollYProgress,
		[0, 1],
		["0%", `-${(data.length - 1) * 100}%`]
	);

	return (
		<div className="font-onset bg-white my-[50px]">
			{/* Header */}
			<div className="w-full lg:px-10 px-5 lg:py-10 py-6 max-w-[1400px] mx-auto">
				<div className="flex flex-col lg:flex-row justify-between items-end gap-8">
					{/* Left */}
					<div className="flex flex-col text-left lg:w-1/2 w-full">
						<h2 className="font-light lg:text-[28px] text-[18px] text-orange">
							Applications we developed
						</h2>
						<h2 className="text-3xl md:text-[54px] font-light text-[#0F2850] leading-snug">
							Expanding Horizons, Creating
							<span className="text-3xl pl-4 md:text-[54px] font-light bg-gradient-to-r from-[#0052A0] to-[#A5C1E2] text-transparent bg-clip-text">
								Opportunities.
							</span>
						</h2>
					</div>

					{/* Right */}
					<div className="flex items-end justify-end flex-col lg:w-1/2 w-full lg:border-l-[2px] py-0 lg:px-[25px] border-[#E77853]">
						<p className="lg:pl-4 text-[14px] text-[#0F2850] mb-4 leading-relaxed">
							We are able to simulate air flow in our customers premises and
							suggest a suitable product. Our knowledge and years of experience
							allow us to put hundreds of technical details together so as to
							ensure the best result. Our expertise in air flow and in space is
							what our work is all about.
						</p>
					</div>
				</div>
			</div>

			{/* Horizontal Scroll Section */}
			<section
				ref={ref}
				style={{ height: `${data.length * 100}vh` }}
				className="relative lg:block hidden bottom-[150px] max-w-[1400px] m-auto"
			>
				<div className="sticky top-0 left-0 right-0 h-screen overflow-hidden">
					<motion.div style={{ x }} className="flex w-full h-[100%]">
						{data.map((item, i) => (
							<div
								key={i}
								className="w-[90vw] relative flex-shrink-0 flex items-end justify-center gap-[50px]"
							>
								{/* Image section */}
								<div className="flex gap-6">
									{/* Left column (2 images stacked) */}
									<div className="flex flex-col  gap-6">
										<Image
											src={item.images[0]}
											width={473}
											height={300}
											className="rounded-xl object-cover"
											alt=""
										/>
										<Image
											src={item.images[1]}
											width={473}
											height={162}
											className="rounded-xl object-cover"
											alt=""
										/>
									</div>

									{/* Right image */}
									<Image
										src={item.images[2]}
										width={473}
										height={400}
										className="rounded-xl object-cover"
										alt=""
									/>
								</div>

								{/* Text section */}
								<div className="flex items-end border-l-2 border-orange">
									<div className="flex items-start">


										{/* Text content */}
										<div className="flex items-end ml-5">
											{/* Main vertical text "Airports" */}
											<div className="writing-mode-vertical text-[54px] font-light   transform rotate-180 bg-gradient-to-b from-[#0052A0] to-[#A5C1E2] text-transparent bg-clip-text"
												style={{ writingMode: 'vertical-rl' }}>
												{item?.title}
											</div>

											{/* Horizontal descriptive text */}
											<div className="text-secondary text-[14px] max-w-[150px] leading-relaxed">
												{item?.description}
											</div>
										</div>
									</div>
								</div>

							</div>
						))}
					</motion.div>

					{/* Gradient edges */}
					<div className="absolute top-0 left-0 h-full w-16 z-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
					<div className="absolute top-0 right-0 h-full w-16 z-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
				</div>
			</section>

			<section className="w-full lg:hidden flex flex-col max-w-[1400px] mx-auto lg:px-10 px-5 lg:py-10 py-6">
				{data?.map((item) => (
					<div className="flex justify-start flex-col border-t-2 border-orange pb-5">
						<div className="flex justify-start items-start flex-col gap-[7px]">
							<h2 className="text-[32px] font-light  bg-gradient-to-b from-[#0052A0] to-[#A5C1E2] text-transparent bg-clip-text"
							>
								{item?.title}
							</h2>
							<p className="text-secondary text-[14px]">
								{item?.description}
							</p>
						</div>
						<div className="flex justify-center flex-col gap-[10px] items-center">
							<div className="w-[350px] h-[150px]">
								<Image
									src={item?.images[0]}
									width={350}
									height={150}
									className="w-full h-full"
								/>
							</div>
							<div className="w-[350px] h-[150px]">
								<Image
									src={item?.images[1]}
									width={350}
									height={150}
									className="w-full h-full"
								/>
							</div>
							<div className="w-[350px] h-[150px]">
								<Image
									src={item?.images[2]}
									width={350}
									height={150}
									className="w-full h-full"
								/>
							</div>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}
