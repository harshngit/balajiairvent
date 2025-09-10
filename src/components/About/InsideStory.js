import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InsideStory = () => {
	return (
		<>
			<div className='xxl:px-[220px] xl:px-[96px] md:px-[64px] px-5 lg:mx-10'>
				<div className='flex justify-between items-start lg:pb-[100px] xl:px-[40px] md:px-[20px] py-5 px-5  lg:flex-row flex-col'>
					<div className='flex w-full xl:w-[60%] md:w-[50%] justify-start items-center'>
						<h2 className='text-secondary font-light xl:text-[40px] md:text-[30px] text-[28px]'>
							Inside the Factory
						</h2>
					</div>
					<div className='lg:px-[25px]  py-5 w-full xl:w-[40%] md:w-[50%] lg:border-l-[2px] border-orange'>
						<p className='font-light text-secondary xl:text-[16px] md:text-[14px] text-[16px]'>
							Step inside our state-of-the-art manufacturing facility and witness how quality products come to life.
							Our factory is equipped with advanced machinery, streamlined production processes, and a skilled workforce dedicated to precision and innovation.
							From raw materials to the finished product, every stage is handled with the highest standards of safety, efficiency, and quality control.
						</p>
					</div>
				</div>

			</div>
			<div className='lg:pb-[100px] w-full'>
				<div className="relative w-full lg:h-[800px] h-[300px] overflow-hidden">
					<video
						className="w-full h-full object-cover"
						controls
						autoplay
						playsInline
						// poster="/asset/about/factory-thumbnail.webp"
					>
						<source src="/asset/about/videoplayback.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					
				</div>
			</div>
		</>
	)
}

export default InsideStory