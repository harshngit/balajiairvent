'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const AboutHome = () => {
	return (
		<div className="bg-[#0F2850] px-6 py-12 w-full">
			<div className="mx-6 mb-[50px] flex flex-col md:flex-row items-start gap-10">
				{/* Left: Image + Button */}
				<div className="md:w-[30%] w-full">
					<Image
						src={"/asset/home/abouthome.webp"}
						alt="About Us Image"
						width={426}
						height={370}
						className="rounded-xl w-full h-auto object-cover"
					/>

					<Link href="/aboutus" className="inline-block mt-4">
						<button className="flex items-center gap-4 border border-[#F0F0F0] text-[16px]  py-[5px] pr-[5px] pl-[10px] text-[#F0F0F0] lg:pl-[20px] lg:pr-[7px] lg:py-2 font-light  rounded-full hover:bg-primary hover:text-[#F0F0F0] transition-all">
							About US
							<Image
								src={"/asset/rightotline.png"}
								width={28}
								height={28}
							/>
						</button>
					</Link>
				</div>

				{/* Right: Text with full gradient */}
				<div className="md:w-[70%] w-full">
					<p className="lg:text-[32px] lg:w-[100%] lg:h-auto h-[300px] leading-relaxed bg-gradient-to-b from-[#F0F0F0] via-[#E77853] to-[#0F2850] text-transparent bg-clip-text">
						Balaji Airvent Systems Private Limited is a Quality and Customer Conscious Company with long experience in Metal and Air Distribution field. We work with big OEMs and deeply understand the importance of quality and prompt services. Promoters have long & extensive Manufacturing and Commercial experience of this line of activity having worked for a leading Company in this field and Aluminium field for 16 years. We have deep technical and product designing knowledge.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutHome
