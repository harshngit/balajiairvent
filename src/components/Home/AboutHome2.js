'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const AboutHome2 = () => {
	return (
		<div className="w-full lg:px-10 px-5 lg:py-10 py-6 font-onset mt-10">
			<div className=" lg:h-[200px] lg:mx-6 flex flex-col lg:flex-row justify-between items-start gap-8">
				{/* Left Title Section */}
				<div className="flex flex-col text-left lg:w-1/2 w-full">
					<h2 className="text-3xl md:text-[54px] font-light text-[#0F2850] leading-snug">
						Key Projects &{' '}
					</h2>
					<h2 className="text-3xl py-2 md:text-[54px] font-light bg-gradient-to-r from-[#0052A0] to-[#A5C1E2] text-transparent bg-clip-text">
						Collaborations
					</h2>
				</div>

				{/* Right Content Block */}
				<div className="flex flex-col lg:w-1/2 w-full lg:border-l-[2px] lg:px-[25px] lg:border-[#E77853]">
					<div className="lg:pl-4 text-[16px] text-[#0F2850] mb-4 leading-relaxed">
						<p>
							From large-scale factories to modern workspaces, our air vent systems power efficient environments.
							We collaborate closely with industry leaders to solve complex air distribution challenges.
							<br />
							Our key collaborations reflect a legacy of quality, scale, and innovation.
						</p>
					</div>

					<Link href="/projects">
						<button className="flex items-center gap-2 border border-[#0F2850] text-[#0F2850] pl-[20px] pr-[7px] py-2 rounded-full hover:bg-[#0F2850] hover:text-white transition-all text-[16px] w-fit">
							View All Projects
							<Image
								src={"/asset/rightbutton.png"}
								width={28}
								height={28}
							/>
						</button>
					</Link>
				</div>
			</div>

			<div className="w-full lg:px-5 py-10 bg-white font-onset">
				<div className=" lg:mx-6 flex flex-col gap-6">
					<div className="flex flex-wrap gap-6 justify-start">
						{/* Card 1 */}

						<Link href={"/projects?tab=collabration"} className="lg:w-[40%] lg:block hidden relative w-full">
							<Image
								src="/asset/home/projects/1.webp"
								alt="75F Solutions"
								width={602}
								height={370}
								className="object-cover"
							/>
						</Link>
						<Link href={"/projects?tab=collabration"} className="lg:w-[40%] lg:hidden block relative w-full">
							<Image
								src="/asset/home/projects/1mob.webp"
								alt="75F Solutions"
								width={602}
								height={370}
								className="object-cover"
							/>
						</Link>


						{/* Card 2 */}
						<Link href={"/projects?tab=projects"} className='lg:w-[28%] w-full relative group'>
							<div className="">
								<div className="relative w-full  ">
									<Image
										src="/asset/home/projects/2.webp"
										alt="GMR Airport-Mopa"
										width={396}
										height={250}
										className="object-cover w-full h-full"
									/>
									<div className="absolute group-hover:opacity-100 opacity-0 inset-0 bg-gradient-to-b from-secondary to-transparent rounded-xl" />
								</div>
								
								<div className="lg:p-4 pt-4">
									<h3 className="text-[#0F2850] text-base font-semibold mb-1">GMR Airport-Mopa</h3>
									<p className="text-sm text-[#0F2850] opacity-80 leading-relaxed">
										Supplied Active Jet Nozzles with Booster Fan
									</p>
								</div>
							</div>
						</Link>

						{/* Card 3 */}
							<Link href={"/projects?tab=projects"} className='lg:w-[28%] w-full relative group'>
							<div className="">
								<div className="relative w-full group">
									<Image
										src="/asset/home/projects/3.webp"
										alt="UNMS Army"
										width={396}
										height={250}
										className="object-cover w-full h-full"
									/>
									<div className="absolute group-hover:opacity-100 opacity-0 inset-0 bg-gradient-to-b from-secondary to-transparent rounded-xl" />
								</div>
								<div className="lg:p-4 pt-4">
									<h3 className="text-[#0F2850] text-base font-semibold mb-1">
										UNMS Army (Larsen & Tourbo Ltd)
									</h3>
									<p className="text-sm text-[#0F2850] opacity-80 leading-relaxed">
										Supplied around Active Floor Grilles with 3800 CFM Booster Fans for their Data
										Centers all over India th...
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>

		</div>
	)
}

export default AboutHome2
