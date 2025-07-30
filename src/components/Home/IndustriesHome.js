import React from 'react';

const IndustriesHome = () => {
	const categories = [
		{
			title: 'Corporates',
			img: '/asset/home/industries/5.webp',
			content: "We help corporate spaces  to make the right ,first impression. Whether it’s modern office entrances or sleek meeting room partitions, our doors bring a touch of sophistication and long-lasting performance. We understand the importance of function, security, and design in high-traffic business environments."
		},
		{
			title: 'Real Estate',
			img: '/asset/home/industries/2.webp',
			content: "We work closely with real estate developers and builders to offer door solutions that adds value to their property. From upscale apartments to gated communities, Hav’Dor delivers quality, consistency, and customization that aligns with modern housing standards and buyer expectations."
		},
		{
			title: 'Hospitality',
			img: '/asset/home/industries/3.webp',
			content: "In the hospitality industry, every detail matters. Hav’Dor delivers doors that blend luxury with performance—beautiful to look at, built to last, and designed to offer quiet, private spaces for your guests. We help create memorable stays through thoughtful craftsmanship."
		},
		{
			title: 'Brands',
			img: '/asset/home/industries/4.webp',
			content: "For retail chains, showrooms, and brand-driven spaces, we create statement doors that align with your visual identity. Our team ensures that every design detail supports your brand’s personality while delivering quality that lasts through every season and every sale."
		},
		{
			title: 'Architecture',
			img: '/asset/home/industries/1.webp',
			content: "We collaborate with architects to turn bold ideas into beautiful realities. With our expertise in engineered wood, finishes, and customization, we bring creative freedom without compromising on strength, structure, or longevity—helping designers push the boundaries of what’s possible."
		},
	];

	return (
		<div className="w-full py-10 px-5 font-helvetica tracker-wider">
			<div className="flex justify-start flex-col items-start mb-6">
				<h2 className="lg:text-[40px] text-[24px] font-helvetica">Industries we work with</h2>
				<p className=' font-helvetica w-[70%] font-thin text-[#2F3435] lg:text-[20px] text-[15px]'>
					At Hav’Dor, we create doors that cater to the distinct demands of each industry we serve. With a strong foundation in craftsmanship, premium materials, and long-lasting performance, we’re a reliable partner for businesses across sectors. Here’s how we add value in every space we enter...
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
				{categories.map((item, i) => (
					<div
						key={i}
						className="relative group overflow-hidden h-[588px] rounded-md"
					>
						<img
							src={item.img}
							alt={item.title}
							className="w-full h-full object-cover"
						/>

						{/* Overlay that slides up */}
						{item.content && (
							<div className="absolute bottom-0 left-0 w-full h-full bg-[#2F3435CC] text-[#FFF1EA] px-4 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10">
								<div className='flex justify-between flex-col h-full'>
									<p className="text-[20px] font-helvetica font-normal">{item.content}</p>
									<h3 className="text-[24px] text-[#FFF1EA] font-normal ">{item.title}</h3>
								</div>
							</div>
						)}

						{/* Always visible title */}
						<div className="absolute bottom-0 left-0 w-full ">
							<div className=" h-[150px] bg-gradient-to-t from-[#FFF1EA] via-[#fff1ea77] to-transparent px-4 pt-10 pb-4 flex justify-start item-end">
								<h3 className="absolute bottom-5 text-[#2F3435] text-[24px] font-normal ">{item.title}</h3>
							</div>
						</div>

					</div>
				))}
			</div>
		</div>
	);
};

export default IndustriesHome;
