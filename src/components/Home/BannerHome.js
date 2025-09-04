'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BannerHome = () => {
	return (
		<>
			<div className="bg_bannerhome relative w-full">
				{/* Floating Promo Box */}
				<div className="absolute bottom-[14rem] lg:bottom-[1.5rem] md:bottom-[5rem] xl:bottom-[5rem] right-[0rem] z-10 hidden lg:flex items-center rounded-2xl px-6 py-5 max-w-[50%] w-full lg:w-auto xxl:bottom-[2rem] ">
					{/* Orange vertical line */}
					<div className="w-[3px] h-[151px] bg-[#E77853] rounded-full mr-5"></div>

					{/* Fan Image */}
					<div className="rounded-xl overflow-hidden w-[200px] h-[150px] flex-shrink-0 bg-white lg:w-[200px] xl:w-[220px] 2xl:w-[240px] lg:h-[150px] xl:h-[160px] 2xl:h-[170px]">
						<Image
							src={"/asset/home/home-product.webp"}
							alt="HVLS Fan"
							width={160}
							height={150}
							className="object-contain w-full h-full"
						/>
					</div>

					{/* Right Content */}
					<div className="pl-6 text-white flex-1">
						<h3 className="text-[24px] font-normal lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">Newly launched!</h3>
						<p className="text-[14px] font-light mt-1 max-w-[330px] lg:max-w-[330px] xl:max-w-[380px] 2xl:max-w-[420px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
							Firstfan HVLS Fans available in 5 sizes ranging from 12ft - 24 ft equipped with PMSM motor.
						</p>

						<Link href="/products#all">
							<button className="mt-4 flex items-center gap-2 hover:bg-primary hover:text-white bg-[#F0F0F066] text-font rounded-full text-[16px] lg:pl-[20px] lg:pr-[7px] lg:py-2 font-light ">
								View Product
								<Image
									src={"/asset/rightbutton.png"}
									alt="HVLS Fan"
									width={24}
									height={24}
									className="lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8"
								/>
							</button>
						</Link>
					</div>
				</div>
				{/* bottom gradient */}
				<div className="lg:block hidden absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#0F2850] to-transparent"></div>
				{/* Mobile Banner */}
				<Link href="https://forms.gle/LFuvgta8s3Qe29T8A" target='_blank' className='lg:hidden block absolute bottom-[3.25rem] left-5 '>
					<button className="mt-5  flex items-center gap-2 bg-[#F0F0F066] text-font rounded-full px-3 py-[5px] text-[16px] font-light transition-all">
						Send Inquiry
						<Image
							src={"/asset/ArrowFilled.png"}
							alt="HVLS Fan"
							width={24}
							height={24}
						/>
					</button>
				</Link>
			</div>

			<div className="lg:hidden flex bg-secondary items-start flex-col px-6 py-5 max-w-[872px]">
				{/* Orange vertical line */}

				{/* Fan Image */}
				<div className="rounded-xl overflow-hidden w-full h-[150px] flex-shrink-0 bg-white">
					<Image
						src={"/asset/home/home-product.webp"}
						alt="HVLS Fan"
						width={350}
						height={150}
						className="object-contain  !w-full h-full"
					/>
				</div>

				{/* Right Content */}
				<div className=" text-white">
					<h3 className="text-[24px] font-normal">Newly launched!</h3>
					<p className="text-[14px] font-light mt-1 max-w-[330px]">
						Firstfan HVLS Fans available in 5 sizes ranging from 12ft - 24 ft equipped with PMSM motor.
					</p>

					<Link href="/products#all">
						<button className="mt-5  flex items-center gap-2 bg-[#F0F0F066] text-font rounded-full px-3 py-[5px] text-[16px] font-light transition-all">
							View Product
							<Image
								src={"/asset/rightbutton.png"}
								alt="HVLS Fan"
								width={24}
								height={24}
							/>
						</button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default BannerHome
