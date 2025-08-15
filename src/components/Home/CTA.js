import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
	return (
		<div className='banner_cta xxl:h-[900px] h-[700px] relative'>
			<div className="absolute bottom-[8rem] lg:right-10 right-[12px] lg:w-[600px] w-[350px] p-[25px] rounded-lg bg-black/20 border border-orange ">
				<h2 className="text-font lg:text-[32px] text-[28px] font-light mb-2">Get a quick callback from us and all your questions will be answered...</h2>
				<div className="text-font font-light text-[14px] mb-4 w-[386px]">
					<p className="font-light">FOR TECHNICAL QUERY</p>
					<p>Rajbahadur Yadav – 9819903151 | 9320113151</p>
				</div>
				<Link href="#">
					<button className="mt-4 flex items-center gap-2 bg-[#F0F0F066] text-font rounded-full lg:pl-[20px] lg:pr-[7px] lg:py-2  text-[16px] font-light transition-all">
						Send Inquiry
						<Image
							src={"/asset/ArrowFilled.png"}
							alt="HVLS Fan"
							width={28}
							height={28}
						/>
					</button>
				</Link>
			</div>
		</div>
	)
}

export default CTA