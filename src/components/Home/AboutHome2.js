import Link from 'next/link'
import React from 'react'

const AboutHome2 = () => {
	return (
		<div className='w-full lg:px-10  lg:py-10 font-helvetica mt-10'>
			<div className='flex justify-center items-center lg:flex-row flex-col gap-10'>
				<div className='lg:w-[40%] w-full lg:block hidden'>
					<img className='w-[647px] h-[570px]' src="/asset/brand-story/brand_story.webp" alt="" />
				</div>
				<div className='lg:w-[40%] w-full lg:hidden block'>
					<img className='w-[647px] h-[570px]' src="/asset/brand-story/brand_storymob.webp" alt="" />
				</div>
				<div className='lg:w-[60%] px-5 py-5 w-full flex gap-[50px] flex-col'>
					<div className='flex justify-start items-start flex-col gap-[50px]'>
						<h2 className='lg:text-[36px] text-[24px] font-helvetica font-normal'>The HAV’DOR Story</h2>
						<p className='font-helvetica font-thin tracking-wider text-[20px]'>With over two decades of architectural excellence behind us, we realized something powerful—while every part of construction had evolved, doors were still being overlooked. What should be the soulful entry point to a space had become an afterthought</p>
						<p className='font-helvetica font-thin tracking-wider text-[20px]'>
							This sparked a journey. One of deep research, bold thinking, and a mission to redefine what a door means in modern design.</p>
						<p className='font-helvetica font-thin tracking-wider text-[20px]'>
							Discover how we turned a gap into a movement—and why a door, when crafted right, becomes so much more than just a barrier.</p>
					</div>
					<div className='flex justify-start item-start mt-[10px]'>
						<Link href="/brand-story" className='px-2 py-2 border-[1px] border-black text-[#2F3435] hover:bg-[#FFF1EA80] hover:border-[1px]  lg:h-[40px] h-[40px] hover:border-[#2F3435] font-normal uppercase'>Explore the brand story</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutHome2