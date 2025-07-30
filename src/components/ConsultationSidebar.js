"use client";
import Link from "next/link";
import React from "react";

const ConsultationSidebar = ({ open, setOpen }) => {
	return (
		<>
			{/* Overlay */}
			<div
				className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ease-in-out z-40 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
					}`}
				onClick={() => setOpen(false)}
			></div>

			{/* Mobile Sidebar */}
			<div className={`fixed bg-white font-helvetica z-[10000] w-full h-[86vh] overflow-y-scroll transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sidebar-transition
          bottom-0 left-0
          ${open ? "translate-y-0" : "translate-y-full"}
          rounded-t-2xl shadow-xl lg:hidden
        `}>
				<div className="flex sticky top-0 z-100 bg-white justify-between border-b border-[#2F3435] items-center p-4 mb-1">
					<h2 className="font-normal w-[90%] text-center text-[20px] text-[#0F2837]">Request Consultation</h2>
					<button onClick={() => setOpen(false)}>
						<img className="w-6 transition hover:opacity-80" src="/asset/cross.png" alt="Close" />
					</button>
				</div>

				<div className="flex p-6 flex-col justify-start gap-8 items-start">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-[10px]">
							<h2 className="text-[20px] font-light text-lightgrey">Your personalised door consultation</h2>
							<p className="text-[14px] font-light text-lightgrey">To help you find the perfect fit, we offer a personalized consultation experience tailored to your specific needs.</p>
						</div>

						<div className="flex flex-wrap justify-start items-center gap-[20px]">
							{[
								{ img: "request.png", label: "Submit your request" },
								{ img: "expert.png", label: "Get a call back from our expert" },
								{ img: "1on1.png", label: "1 on 1 consultation" },
								{ img: "bring1.png", label: "Bring your vision to life" }
							].map((item, idx) => (
								<div key={idx} className="flex flex-col gap-2 items-center">
									<img className="w-[50px]" src={`/asset/sidebar/${item.img}`} alt="" />
									<h3 className="w-[90px] text-center text-[10px] text-lightgrey">{item.label}</h3>
								</div>
							))}
						</div>
					</div>

					<div>
						<Link href="" className="px-3 py-2 text-[14px]  border border-black text-[#2F3435] uppercase flex items-center gap-2 transition hover:opacity-80 h-[48px]">
							Submit request
							<img className="w-6" src="/asset/right.png" alt="" />
						</Link>
					</div>
				</div>

				<div className="flex justify-center">
					<div className="bg-[#FFF1EA] w-[88%] mt-10 px-6 py-10">
						<h3 className="text-[20px] w-full font-normal mb-1">Why Book a HAV’DOR Consultation?</h3>
						<p className="text-[16px] text-lightgrey mb-5">We believe in making right choices for you!</p>
						<ul className="list-disc pl-5 space-y-2 text-[14px] font-light text-lightgrey">
							<li>Get expert advice customized to your taste, space, and functionality.</li>
							<li>Choose the perfect combination with guided support from our team.</li>
							<li>Understand all the ways your door can be uniquely yours.</li>
							<li>Preview samples and visualize the final result with confidence.</li>
							<li>From your first call to final installation—we’ve got you covered.</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Desktop Sidebar */}
			<div className={`fixed bg-white font-helvetica z-[10000] w-[40%] overflow-y-scroll h-full pl-5 pr-5 pt-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sidebar-transition
          top-0 right-0
          ${open ? "translate-x-0" : "translate-x-full"}
          shadow-xl hidden lg:block
        `}>
				<div className="flex justify-end mb-12">
					<button onClick={() => setOpen(false)}>
						<img className="w-6 transition hover:opacity-80" src="/asset/cross.png" alt="Close" />
					</button>
				</div>

				<div className="flex flex-col gap-20">
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-5">
							<h2 className="text-[36px] text-lightgrey">Your personalised door consultation</h2>
							<p className="text-[18px] font-light text-lightgrey">To help you find the perfect fit, we offer a personalized consultation experience tailored to your specific needs.</p>
						</div>

						<div className="bg-[#FFF1EA] w-full px-8 py-10 mt-10 mb-10">
							<h3 className="text-[20px] font-light mb-1">Why Book a HAV’DOR Consultation?</h3>
							<p className="text-[12px] text-lightgrey mb-5">We believe in making right choices for you!</p>
							<ul className="list-disc pl-5 space-y-2 text-[15px] text-lightgrey">
								<li>Get expert advice customized to your taste, space, and functionality.</li>
								<li>Choose the perfect combination with guided support from our team.</li>
								<li>Understand all the ways your door can be uniquely yours.</li>
								<li>Preview samples and visualize the final result with confidence.</li>
								<li>From your first call to final installation—we’ve got you covered.</li>
							</ul>
						</div>

						<div className="flex gap-16 justify-center">
							{[
								{ img: "request.png", label: "Submit your request" },
								{ img: "expert.png", label: "Get a call back from our expert" },
								{ img: "1on1.png", label: "1 on 1 consultation" },
								{ img: "bring1.png", label: "Bring your vision to life" }
							].map((item, idx) => (
								<div key={idx} className="flex flex-col gap-2 items-center">
									<img className="w-[100px]" src={`/asset/sidebar/${item.img}`} alt="" />
									<h3 className="w-[100px] text-center text-[14px] text-lightgrey">{item.label}</h3>
								</div>
							))}
						</div>
					</div>

					<div>
						<Link href="https://forms.gle/M1y3sWf9v42VvAkv9" target="_blank" className="px-3 py-2 w-[37%] mb-[40px] border hover:bg-[#FFF1EA80] hover:border-[1px] hover:border-[#2F3435]  border-black text-[#2F3435] uppercase flex items-center gap-2 transition hover:opacity-80">
							Submit request
							<img className="w-6" src="/asset/right.png" alt="" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ConsultationSidebar;
