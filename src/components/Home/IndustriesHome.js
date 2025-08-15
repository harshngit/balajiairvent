'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const industries = [
	{
		title: 'View all Data Centre Products',
		image: '/asset/home/industries/1.webp',
		href: '#',
		showArrow: true,
		spanClass: 'row-span-2',
	},
	{
		title: 'Comfort Air Conditioning',
		image: '/asset/home/industries/1.webp',
		href: '#',
		showArrow: true,

	},
	{
		title: 'Industrial Dampers',
		image: '/asset/home/industries/1.webp',
		href: '#',
		showArrow: true,
	},
	{
		title: 'Fans & Ventilation Accessories',
		image: '/asset/home/industries/1.webp',
		href: '#',
		showArrow: true,
	},
]

const IndustriesHome = () => {
	return (
		<div className="w-full lg:px-10 px-5 lg:py-10 py-6 font-onset mt-10">
			<div className=" mx-6 flex flex-col md:flex-row gap-[54px]">
				{/* Left Text Section */}
				<div className="md:w-[600px] w-full flex flex-col justify-center">
					<div className='flex justify-start items-start lg:gap-[30px] gap-1 flex-col'>
						<h4 className="text-[#E77853] text-[28px] font-light mb-2">Industries we serve</h4>
						<h2 className="text-3xl md:text-[40px] font-light text-[#0F2850] leading-snug mb-4">
							Explore our precision-engineered{' '}
							<span className="bg-gradient-to-r from-[#0052A0] to-primary bg-clip-text text-transparent">
								Airvent Solutions
							</span>
							.
						</h2>
					</div>
					<p className="text-[#0F2850] mb-6 text-[16px] lg:w-[464px] w-full  leading-relaxed">
						From concept to completion, every AirVent solution is meticulously crafted for maximum efficiency, durability, and ease of installation. Whether it’s Louvers , Industrial Dampers, or Specialized products for Data Centers and Cleanrooms, our focus is on delivering precision-engineered solutions that enhance comfort, safety, and energy efficiency.
					</p>
					<Link href="/products">
						<button className="flex items-center gap-2 border border-[#0F2850] text-[#0F2850] 
						pr-[7px] pl-[20px] py-[10px] rounded-full hover:bg-[#0F2850] hover:text-white transition-all text-[16px] ">
							Explore All Products
							<Image
								src={"/asset/rightbutton.png"}
								width={28}
								height={28}
							/>

						</button>
					</Link>
				</div>

				<div className="lg:w-1/2 w-full lg:px-5 flex lg:flex-row flex-col justify-start items-start gap-[20px]">
					<div className='flex justify-start items-start flex-col gap-[20px]'>
						<Link href={"#"}>
							<div
								className={`relative w-full rounded-xl overflow-hidden group `}
							>
								{/* Image */}
								<Image
									src={"/asset/home/industries/1.webp"}
									alt=""
									height={300}
									width={400}
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>

								{/* Hover Gradient */}
								<div className="absolute inset-0 bg-gradient-to-b from-[#0F2850]/80  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

								{/* Hover Text From Top */}
								<div className="absolute -top-10 group-hover:top-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-[#fff] font-normal text-[12px] md:text-[20px] flex items-center justify-start gap-[10px]">
									View all Data Center Products
									<Image
										src="/asset/rightotline.png"
										alt="arrow"
										width={24}
										height={24}
									/>

								</div>
							</div>
						</Link>
						<Link href={"#"} className=''>
							<div
								className={`relative w-full rounded-xl overflow-hidden group  `}
							>
								{/* Image */}
								<Image
									src={"/asset/home/industries/2.webp"}
									alt=""
									height={300}
									width={400}
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>

								{/* Hover Gradient */}
								<div className="absolute inset-0 bg-gradient-to-b from-[#0F2850]/80  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
								<div className="absolute bottom-0 lg:block hidden left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10" />
								{/* Hover Text From Top */}
								<div className="absolute -top-10 group-hover:top-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-[#fff] font-normal text-[12px] md:text-[20px] flex items-center justify-start gap-[10px]">
									Industrial Dampers
									<Image
										src="/asset/rightotline.png"
										alt="arrow"
										width={24}
										height={24}
									/>

								</div>
							</div>
						</Link>

					</div>
					<div className='flex justify-start items-start flex-col gap-[20px]'>
						<Link href={"#"}>
							<div
								className={`relative w-full rounded-xl overflow-hidden group `}
							>
								{/* Image */}
								<Image
									src={"/asset/home/industries/3.webp"}
									alt=""
									height={300}
									width={400}
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>

								{/* Hover Gradient */}
								<div className="absolute inset-0 bg-gradient-to-b from-[#0F2850]/80  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

								{/* Hover Text From Top */}
								<div className="absolute -top-10 group-hover:top-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-[#fff] font-normal text-[12px] md:text-[20px] flex items-center justify-start gap-[10px]">
									Comfort Air Conditioning
									<Image
										src="/asset/rightotline.png"
										alt="arrow"
										width={24}
										height={24}
									/>

								</div>
							</div>
						</Link>
						<Link href={"#"}>
							<div
								className={`relative w-full rounded-xl overflow-hidden group  `}
							>
								{/* Image */}
								<Image
									src={"/asset/home/industries/4.webp"}
									alt=""
									height={300}
									width={400}
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>

								{/* Hover Gradient */}
								<div className="absolute inset-0 bg-gradient-to-b from-[#0F2850]/80  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
								<div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent z-10" />
								{/* Hover Text From Top */}
								<div className="absolute -top-10 group-hover:top-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-[#fff] font-normal text-[12px] md:text-[20px] flex items-center justify-start gap-[10px]">
									Fans & Ventilation Accessories
									<Image
										src="/asset/rightotline.png"
										alt="arrow"
										width={24}
										height={24}
									/>

								</div>
							</div>
						</Link>
					</div>
				</div>

			</div>
		</div>
	)
}

export default IndustriesHome
