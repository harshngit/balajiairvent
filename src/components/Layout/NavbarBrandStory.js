"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

const navItems = [
	{ label: "About Us", href: "/aboutus" },
	{
		label: "Products", href: "#",
		children: [
			{ label: "All", href: "#project1" },
			{ label: "Data Centre", href: "#project2" },
			{ label: "Comfor Air Conditioning", href: "#collab1" },
			{ label: "Industrial Dampers", href: "#collab1" },
			{ label: "Fans & Ventilation Accessories", href: "#collab1" },
			{ label: "Fire Doors", href: "#collab1" },
		]

	},
	{
		label: "Projects & Collaborations",
		href: "#",

	},
	{ label: "Contact Us", href: "#" },
];

export default function NavbarCustom() {
	const [scrolling, setScrolling] = useState(false);
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	const isActive = (href) => pathname === href;

	useEffect(() => {
		const handleScroll = () => setScrolling(window.scrollY > 100);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [timer, setTimer] = useState(null);

	const handleMouseEnter = (index) => {
		// Clear any previous timer before setting the active dropdown
		if (timer) {
			clearTimeout(timer);
		}
		setActiveDropdown(index); // Show dropdown when hovering over the parent item
	};

	const handleMouseLeave = () => {
		// Set a timer to hide the dropdown after a short delay
		const newTimer = setTimeout(() => {
			setActiveDropdown(null); // Hide dropdown after cursor leaves
		}, 300); // Adjust delay in milliseconds as per your preference

		setTimer(newTimer);
	};
	return (
		<div className={`fixed font-onest top-0 left-0 w-full z-[9999] transition-all  lg:pt-[30px] lg:pr-[40px] lg:pb-[20px] lg:pl-[40px] p-[15px] duration-300 ${scrolling ? "bg-white shadow-sm" : "bg-transparent"}`}>
			<div className="max-w-[1700px] mx-auto px-4 py-3 flex justify-between items-center">
				{/* Logo */}
				<Link href="/">
					<img
						src={scrolling ? "/asset/navbar/logo.webp" : "/asset/navbar/logo.webp"}
						alt="Logo"
						className="h-[32px] md:h-[40px]"
					/>
				</Link>
				<div className="block lg:hidden" onClick={() => setMenuOpen(true)}>
					<Image
						src={"/asset/navbar/iconblue.png"}
						width={24}
						height={24}
					/>
				</div>

				{/* Navigation Menu */}
				<ul className={`hidden md:flex items-center justify-center px-6 py-2 rounded-full ${scrolling ? "bg-white shadow-lg border-gray-200" : "bg-[#fff] text-white bg-white shadow-lg border-gray-200"}`}>
					{navItems.map((item, idx) => (
						<li
							key={idx}
							className="relative"
							onMouseEnter={() => handleMouseEnter(idx)} // Trigger on hover
							onMouseLeave={handleMouseLeave} // Reset on mouse leave
						>
							<Link
								href={item.href}
								className={`text-[16px] px-2 py-1 ${scrolling ? "text-[#141414] hover:text-[#1666B6]" : "text-[#141414] hover:text-primary"} ${isActive(item.href) ? "text-primary font-bold" : ""}`}
							>
								{item.label}
							</Link>

							{/* Show dropdown with delay when "Projects & Collaborations" is hovered */}
							{item.children && activeDropdown === idx && (
								<ul className={`absolute font-onest font-regular left-0 top-8 mt-2 space-y-2 px-[16px] py-[10px] w-[200px] shadow-lg rounded-lg ${scrolling ? "bg-white text-black" : "bg-white text-black"}`}>
									{item.children.map((child, idx) => (
										<li key={idx}>
											<Link href={child.href} className="hover:text-[#90C4FD]">
												{child.label}
											</Link>
										</li>
									))}
								</ul>
							)}

							{/* Add separator if it's not the last item */}
							{idx !== navItems.length - 1 && <span className={`mx-2 ${scrolling ? "text-[#141414]" : "text-[#141414]"}`}>|</span>}
						</li>
					))}
					<li>
						<Link href={""}>
							<button
								className={`group text-sm flex items-center gap-[20px] pr-[7px] pl-[20px] py-[10px] rounded-full border transition-all duration-200 w-[162px] h-[40px] group
                            ${scrolling ? "bg-primary hover:bg-[#fff] hover:border-primary hover:text-primary text-white border-primary shadow-md" : "hidden"}`}
							>
								Send Inquiry
								<img
									src="/asset/navbar/Arrow.png"
									className="w-[28px] h-[28px] group-hover:opacity-0  group-hover:hidden transition-all duration-200 opacity-100"
									alt="Arrow Hover"
								/>
								<img
									src="/asset/navbar/Arrowblue.png"
									className="w-[28px] h-[28px] group-hover:opacity-100 hidden group-hover:block transition-all duration-200 opacity-100"
									alt="Arrow Hover"
								/>
							</button>
						</Link>
					</li>
				</ul>

				{/* Send Inquiry Button */}
				<Link href="">
					<button
						className={`group text-sm flex items-center gap-[20px] pr-[7px] pl-[20px] py-[10px] rounded-full border transition-all duration-200 w-[162px] h-[40px]
      ${scrolling ? "hidden" : "bg-transparent border-primary text-primary hover:border-[#1666B6] hover:bg-[#1666B6] hover:text-[#fff]"}`}
					>
						Send Inquiry
						<img
							src="/asset/Arrowoutlineblue.png"
							className="w-[28px] h-[28px] group-hover:opacity-0  group-hover:hidden transition-all duration-200 opacity-100"
							alt="Arrow Hover"
						/>
						<img
							src="/asset/navbar/Arrow.png"
							className="w-[28px] h-[28px] group-hover:opacity-100 hidden group-hover:block transition-all duration-200 opacity-100"
							alt="Arrow Hover"
						/>
					</button>

					{/* Scrolling Button */}
					<button
						className={`group text-sm flex items-center gap-[20px] pr-[7px] pl-[20px] py-[10px] rounded-full border transition-all duration-200 w-[162px] h-[40px] group
      ${scrolling ? "bg-primary hover:bg-[#fff] hover:border-primary hover:text-primary text-white border-primary shadow-md hidden" : "hidden"}`}
					>
						Send Inquiry
						<img
							src="/asset/navbar/Arrow.png"
							className="w-[28px] h-[28px] group-hover:opacity-0  group-hover:hidden transition-all duration-200 opacity-100"
							alt="Arrow Hover"
						/>
						<img
							src="/asset/navbar/Arrowblue.png"
							className="w-[28px] h-[28px] group-hover:opacity-100 hidden group-hover:block transition-all duration-200 opacity-100"
							alt="Arrow Hover"
						/>
					</button>
				</Link>
				{menuOpen && (
					<div className="fixed inset-0 z-[99999] bg-[#002244cc] backdrop-blur-md flex flex-col justify-start items-start px-6 py-8 text-white transition-all duration-700">
						{/* Close Button */}
						<div className="absolute top-10 right-6 cursor-pointer" onClick={() => setMenuOpen(false)}>
							<Image
								src={"/asset/navbar/cross.png"}
								width={24}
								height={24}
							/>
						</div>

						{/* Logo */}
						<Link href="/" className="mb-10" onClick={() => setMenuOpen(false)}>
							<img src="/asset/navbar/logo-white.webp" alt="Logo" className="h-[32px]" />
						</Link>

						{/* Navigation Links */}
						<ul className="flex flex-col gap-[20px] text-[18px] font-light">
							<li >
								<Link href={"/"} className={`block hover:text-[#90C4FD] ${isActive("/") ? "text-[#90C4FD]" : ""}`}>
									Home Page
								</Link>
							</li>
							{navItems.map((item, idx) => (
								<li key={idx}>
									<Link href={item.href} onClick={() => setMenuOpen(false)} className={`block hover:text-[#90C4FD] ${isActive(item.href) ? "text-[#90C4FD]" : ""}`}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>

						{/* CTA Button */}
						<Link href="#" onClick={() => setMenuOpen(false)}>
							<button
								className={`group text-sm bg-white flex items-center mt-10 gap-[20px] pr-[7px] pl-[20px] py-[10px] rounded-full border transition-all duration-200 w-[162px] h-[40px]
      ${scrolling ? "hidden" : "bg-transparent border-primary text-primary hover:border-[#1666B6] hover:bg-[#1666B6] hover:text-[#fff]"}`}
							>
								Send Inquiry
								<img
									src="/asset/Arrowoutlineblue.png"
									className="w-[28px] h-[28px] group-hover:opacity-0  group-hover:hidden transition-all duration-200 opacity-100"
									alt="Arrow Hover"
								/>
								<img
									src="/asset/navbar/Arrow.png"
									className="w-[28px] h-[28px] group-hover:opacity-100 hidden group-hover:block transition-all duration-200 opacity-100"
									alt="Arrow Hover"
								/>
							</button>
						</Link>
					</div>
				)}

			</div>
		</div>
	);
}

