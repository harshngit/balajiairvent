'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BannerHome = () => {
	return (
		<div className="bg_bannerhome relative w-full">
			{/* Floating Promo Box */}
			<div className="absolute bottom-[8rem] right-[4rem] z-10 flex items-center rounded-2xl px-6 py-5 max-w-[872px]">
				{/* Orange vertical line */}
				<div className="w-[3px] h-[151px] bg-[#E77853] rounded-full mr-5"></div>

				{/* Fan Image */}
				<div className="rounded-xl overflow-hidden w-[200px] h-[150px] flex-shrink-0 bg-white">
					<Image
						src={"/asset/home/home-product.webp"}
						alt="HVLS Fan"
						width={160}
						height={150}
						className="object-contain w-full h-full"
					/>
				</div>

				{/* Right Content */}
				<div className="pl-6 text-white">
					<h3 className="text-[24px] font-normal">Newly launched!</h3>
					<p className="text-[14px] font-light mt-1 max-w-[330px]">
						Firstfan HVLS Fans available in 5 sizes ranging from 12ft - 24 ft equipped with PMSM motor.
					</p>

					<Link href="/products/hvls-fan">
						<button className="mt-4 flex items-center gap-2 bg-[#F0F0F066] text-font rounded-full px-3 py-[3px] text-[16px] font-light transition-all">
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
		</div>
	)
}

export default BannerHome
