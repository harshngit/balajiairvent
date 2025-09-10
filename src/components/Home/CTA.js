import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
	return (
		<div className='banner_cta md:h-[550px] h-[700px] xl:h-[612px] relative'>
			<div className="w-full h-full relative">
				<div className="mx-auto w-full h-full max-w-[1440px] xl:max-w-[1500px] 2xl:max-w-[1700px] relative">
					<div className="absolute xl:bottom-[8rem] md:bottom-[5rem] bottom-[6rem] lg:right-20 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:w-[600px] w-[90%] max-w-[600px] p-[25px] rounded-lg bg-black/20 border border-orange z-10">
						<h2 className="text-font xl:text-[32px] md:text-[28px] text-[28px] font-light mb-2">Get a quick callback from us and all your questions will be answered...</h2>
						<div className="text-font font-light xl:text-[14px] md:text-[12px] text-[12px] mb-4 max-w-[386px] w-full">
							<p className="font-light">FOR TECHNICAL QUERY</p>
							<p>Rajbahadur Yadav – 9819903151 | 9320113151</p>
						</div>
						<Link href="https://forms.gle/LFuvgta8s3Qe29T8A" target='_blank'>
							<button className="mt-4 flex items-center gap-2 bg-[#F0F0F066] hover:bg-primary hover:text-white text-font rounded-full xl:pl-[20px] xl:pr-[7px] xl:py-2 py-1 pl-2 pr-1 xl:text-[16px] md:text-[14px] text-[14px] font-light transition-all">
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
					<div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#0F2850]/80 via-[#0F2850]/40 to-transparent z-0" />
				</div>
			</div>
			
		</div>
	)
}

export default CTA