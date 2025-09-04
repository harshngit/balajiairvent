import React from 'react'
import Image from 'next/image'

const AboutBanner = () => {
	return (
		<div className="lg:mx-10  lg:px-6 px-2 py-12 space-y-10">
			{/* Text Section */}
			<div className="flex flex-col lg:flex-row lg:pt-[100px] pt-[80px] lg:pb-[40px] justify-between items-end gap-10">
				{/* Left Heading */}
				<div className="lg:w-[40%] w-full">
					<h2 className="text-[32px] lg:text-[32px] text-[#0F2850] font-light">
						Your one stop source for <br className='lg:block hidden' />
						<span className=" bg-blue-gradient text-transparent bg-clip-text font-light lg:text-[40px]">
							Air Management Solutions
						</span>
					</h2>
				</div>

				{/* Right Paragraphs */}
				<div className="lg:w-[60%] w-full flex lg:flex-row flex-col justify-start items-start text-sm text-[#0F2850] leading-relaxed gap-[20px]">
					<div className='flex lg:w-1/2 w-full flex-col space-y-5'>
						<p className='font-light text-[14px]'>
							Balaji Airvent Systems Private Limited is a Quality and Customer conscious Company with long experience in Metal and Air Distribution field. We work with big OEMs and deeply understand the importance of quality and prompt services.
						</p>
						<p className='font-light text-[14px]'>
							It is said that all it takes to excel is commitment to quality, mutual respect for one's customers and above all complete confidence in oneself and one's product. And Balaji Airvent Systems Private Limited has substantiated this claim with its own example.
						</p>
						<p className='font-light text-[14px]'>In spite of being a fledging venture, it is already a ranked manufacturer of Air Distribution Products.</p>
					</div>
					<div className='flex lg:w-1/2 w-full flex-col space-y-5'>
						<p className='font-light text-[14px]'>
						At Balaji Airvent Systems Private Limited, we believe that this was achieved simply by sticking to our core competence and doing what we do best, which is applying our technical and commercial expertise and years of experience in the field of Air Distribution Management to manufacture and supply good quality, super-efficient products. This, along with our transparent and ethical business practice and professional approach is what has established for us a formidable reputation in the arena and an even growing list of distinguished clients.
						</p>
						<p className='font-light text-[14px]'>
						Balaji Air vent Systems Private Limited is quite literally and figuratively "a breath of fresh air" the in field of Air Distribution Management.
						</p>
						
					</div>
				</div>
			</div>

			{/* Image Section */}
			<div className="lg:w-full  lg:h-full h-[200px] rounded-xl overflow-hidden">
				<Image
					src="/asset/about/aboutBanner.webp" // replace with your actual path
					alt="Air Management System"
					width={1400}
					height={400}
					className="lg:w-full lg:h-auto w-full h-[200px] object-cover"
				/>
			</div>
			<div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] w-full flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[48px] text-[32px] font-light '>Our Vision</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[32px] text-[18px] text-secondary font-light'>To make the name "Balaji Airvent Systems Private Limited" synonymous with Air Distribution Products.</p>
				</div>
			</div>
			<div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] w-full flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[48px] text-[32px] font-light '>Our Mission</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[32px] text-[18px] text-secondary font-light'>To provide superlative, yet cost effective air management solutions using best quality products and efficient technical support constantly boosted by continuous R&D and innovations.</p>
				</div>
			</div>
		</div>
	)
}

export default AboutBanner
