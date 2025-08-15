import Image from 'next/image'
import React from 'react'

const InsideStory = () => {
	return (
		<>
			<div className='mx-10'>
				<div className='flex justify-between items-start lg:pb-[100px] lg:px-[40px] py-5 px-5  lg:flex-row flex-col'>
					<div className='flex w-full lg:w-[60%] justify-start items-center'>
						<h2 className='text-secondary font-light lg:text-[40px] text-[30px]'>
							Inside the Factory
						</h2>
					</div>
					<div className='lg:px-[25px] px-5 py-5 w-full lg:w-[40%] lg:border-l-[2px] border-orange'>
						<p className='font-light text-secondary text-[14px]'>
							Step inside our state-of-the-art manufacturing facility and witness how quality products come to life.
							Our factory is equipped with advanced machinery, streamlined production processes, and a skilled workforce dedicated to precision and innovation.
							From raw materials to the finished product, every stage is handled with the highest standards of safety, efficiency, and quality control.
						</p>
					</div>
				</div>

			</div>
			<div className='lg:pb-[100px] w-full'>
				<Image
					src={"/asset/about/inside.webp"}
					width={1512}
					height={800}
					className='w-full'
				/>
			</div>
		</>
	)
}

export default InsideStory