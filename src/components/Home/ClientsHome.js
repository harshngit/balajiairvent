'use client'
import React from 'react'
import Image from 'next/image'

// List of logo paths (make sure all files exist)
const clientLogos = [
	'/asset/home/clients/Aurionpro.webp',
	'/asset/home/clients/bluebox.webp',
	'/asset/home/clients/bluestar.webp',
	'/asset/home/clients/climaveneta.webp',
	'/asset/home/clients/CTRLS.webp',
	'/asset/home/clients/Gulf Computers.webp',
	'/asset/home/clients/ironmoutain.webp',
	'/asset/home/clients/maxheal.webp',
	'/asset/home/clients/nti.webp',
	'/asset/home/clients/nxtra.webp',
	'/asset/home/clients/rital.webp',
	'/asset/home/clients/schneider.webp',
	'/asset/home/clients/shootfire.webp',
	'/asset/home/clients/sify.webp',
	'/asset/home/clients/tata projects.webp',
	'/asset/home/clients/vertiv.webp',
	'/asset/home/clients/vodafone.webp',
	'/asset/home/clients/woodkraft.webp',
	'/asset/home/clients/yotta.webp',
]

const ClientsHome = () => {
	return (
		<div className="relative lg:block hidden w-full !px-5 !py-10 bg-[#0F2850] overflow-hidden">
			{/* Top gradient for smooth blending */}
			{/* <div className="absolute -top-[50px] left-0 w-full h-4 bg-gradient-to-t from-[#162e54] to-transparent z-20 pointer-events-none" /> */}

			<div className="max-w-[1700px] mx-auto flex items-center h-full px-6 relative z-10">
				{/* Left Title */}
				<div className="flex-shrink-0 w-[200px] text-[#F0F0F0] text-[36px] font-light pr-6 z-20">
					Clients
				</div>

				{/* Gradient fade after "Clients" */}
				<div className="absolute left-[210px] top-0 h-full w-24 bg-gradient-to-r from-[#0F2850] to-transparent z-10 pointer-events-none" />

				{/* Marquee (continuous) */}
				<div className="relative w-full overflow-hidden top-[0px] py-10">
					<div className="marquee flex items-center" style={{ animationDuration: '30s' }}>
						{/* Track A */}
						<div className="flex items-center gap-[85px] mr-[85px]">
							{clientLogos.map((logo, index) => (
								<div key={`a-${index}`} className="flex items-center justify-center w-[200px] h-[50px]">
									<Image src={logo} alt={`Client ${index + 1}`} width={200} height={50} className="lg:w-[200px] lg:h-[50px] w-[100px] h-[25px] object-contain" />
								</div>
							))}
						</div>
						{/* Track B (duplicate) */}
						<div className="flex items-center gap-[85px]">
							{clientLogos.map((logo, index) => (
								<div key={`b-${index}`} className="flex items-center justify-center w-[200px] h-[50px]">
									<Image src={logo} alt={`Client ${index + 1}`} width={200} height={50} className="w-[200px] h-[50px] object-contain" />
								</div>
							))}
						</div>
					</div>
					<style jsx>{`
						.marquee {
							display: flex;
							width: max-content;
							animation-name: marqueeScroll;
							animation-timing-function: linear;
							animation-iteration-count: infinite;
						}
						@keyframes marqueeScroll {
							0% { transform: translateX(0); }
							100% { transform: translateX(-50%); }
						}
					`}</style>
				</div>
			</div>

			{/* Right gradient */}
			<div className="absolute right-8 top-0 h-full w-24 bg-gradient-to-l from-[#0F2850] to-transparent z-10 pointer-events-none" />
		</div>
	)
}

export default ClientsHome
