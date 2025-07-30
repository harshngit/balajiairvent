"use client";
import React, { useEffect, useRef, useState } from "react";
import {
	IconButton,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
const navItems = [
	{
		label: "About Us",
		href: "/about",
		children: [
			{ label: "Brand Story", href: "/brand-story" },
		],
	},
	{
		label: "Door",
		href: "/door",
	},
	{
		label: "X'perience Centre",
		href: "/experience-centre",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];
const navItemsMobile = [
	{ label: "Brand Story", path: "/brand-story" },
	{ label: "Door", path: "/door" },
	{ label: "X'perience Centre", path: "/experience-centre" },
	{ label: "Contact", path: "/contact" },
];
export default function NavbarBrandStory() {
	const [scrolling, setScrolling] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const pathname = usePathname();
	const [openDropdown, setOpenDropdown] = useState(false);

	const isActive = (href) => pathname === href;

	useEffect(() => {
		const handleScroll = () => {
			setScrolling(window.scrollY > window.innerHeight);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const [isOpen, setIsOpen] = useState(true);
	const timeoutRef = useRef(null);

	const handleMouseEnter = (label) => {
		clearTimeout(timeoutRef.current);
		setOpenDropdown(label);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setOpenDropdown(false);
		}, 150); // delay to allow smooth mouse movement
	};

	useEffect(() => {
		return () => clearTimeout(timeoutRef.current);
	}, []);


	const navList = (
		<ul className="flex flex-col lg:flex-row items-start lg:items-center lg:flex-wrap gap-3 lg:gap-3 text-white  font-medium !text-sm tracking-wide">
			{navItems.map((item, idx) => {
				const hasChildren = item.children && item.children.length > 0;
				const isParentActive =
					isActive(item.href) || item.children?.some((child) => isActive(child.href));

				return (
					<li key={idx} className="relative">
						<div
							onMouseEnter={() => handleMouseEnter(item.label)}
							onMouseLeave={handleMouseLeave}
						>
							{item.label === "About Us" ?
								(<Link
									href={item.href}
									className={`group px-3 py-2 flex justify-center items-center gap-[10px] transition  ${isParentActive ? "bg-[#89898933] text-lightgrey" : "bg-[#DDDDDD33] hover:bg-[#DDDDDD33] hover:border-[1px] text-lightgrey border-[#89898933]"
										}`}
								>
									{item.label}
									<img src="/asset/PlusNavbar.png" className="w-[12px]" alt="" />
								</Link>) : (
									<Link
										href={item.href}
										className={`group px-3 py-2 transition block ${isParentActive ? "bg-[#89898933] text-lightgrey" : "bg-[#DDDDDD33] hover:bg-[#DDDDDD33] hover:border-[1px] text-lightgrey border-[#89898933]"
											}`}
									>
										{item.label}
									</Link>
								)
							}


							{/* Dropdown */}
							{hasChildren && openDropdown === item.label && (
								<div className="absolute left-0 mt-1 z-20 w-[150px]">
									{item.children.map((child, i) => (
										<Link key={i} href={child.href}>
											<div
												className={`px-4 py-2 transition cursor-pointer ${isActive(child.href)
													? "bg-[#DDDDDD33] text-lightgrey"
													: "bg-[#DDDDDD33] hover:bg-[#DDDDDD33] hover:border-[1px] text-lightgrey border-[#89898933]"
													}`}
											>
												{child.label}
											</div>
										</Link>
									))}
								</div>
							)}
						</div>
					</li>
				);
			})}
		</ul>
	);
	const navListMobile = (
		<ul className="flex flex-col lg:flex-row items-start lg:items-center lg:flex-wrap gap-[27px] lg:gap-4 text-white uppercase font-medium !text-sm tracking-wide">

			<div className="flex flex-col items-center relative">
				<div className="flex justify-center items-center gap-3">
					<Link href="/about">
						<li className="cursor-pointer text-[20px] text-[#2F3435] font-helvetica">
							About Us
						</li>
					</Link>
					<div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
						{/* {isOpen ? <img className="w-[20px]" src="asset/up.png" alt="dropdown icon" /> : <img className="w-[20px]" src="asset/down.png" alt="dropdown icon" />} */}
					</div>
				</div>
			</div>


			{navItemsMobile.map((item, i) => (
				<li key={i}>
					<Link
						href={item.path}
						className="cursor-pointer text-[20px] text-[#2F3435] font-helvetica transition"
					>
						{item.label}
					</Link>
				</li>
			))}

		</ul>
	);
	return (
		<div className="fixed top-0 left-0 w-screen z-[9999]">
			<div
				className={`w-full px-4 lg:px-0 py-4 lg:py-0 transition-all duration-300 bg-[#eeeeee40] !backdrop-blur-3xl`}
			>
				<div className="w-full lg:pt-[3%] lg:pl-[3%] lg:pb-[3%] flex items-center justify-between">
					{/* Logo */}
					<Link href="/"
					>
						<div className="lg:w-[60%] xl:w-[70%] w-[50%]">
							<img
								className="w-[250px] "
								src="/asset/navbar/blacklogo.png"
								alt="logo"
							/>
						</div>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden lg:block w-[40%]">{navList}</div>

					{/* Mobile Icon */}
					<div
						variant="text"
						className="text-black lg:hidden w-[50px] h-[50px] flex justify-center items-center"
						onClick={() => setOpenDrawer(true)}
					>
						{/* <svg
              className="h-6 pt-0 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg> */}
						<img className="w-[28px]" src="/asset/navbar/hamburger.png" alt="" />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 right-0 w-screen h-screen bg-[#FFFFFF] z-[9998]  pt-6 transform transition-transform duration-700 ${openDrawer ? "translate-x-0" : "translate-x-full"
					}`}
			>
				<div className="flex justify-end items-center mb-4 px-6">
					{/* <Typography variant="h5" className="text-white">
            Menu
          </Typography> */}
					<div
						variant="text"
						className="text-white"
						onClick={() => setOpenDrawer(false)}
					>
						{/* <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> */}
						<img className="w-[28px]" src="/asset/navbar/cancel.png" alt="" />
					</div>
				</div>
				<div className="px-6">
					{navListMobile}
				</div>
				<div className="mt-5 px-6">
					<ul className="flex flex-col justify-start items-start gap-[15px]">
						<Link href="contact/#FAQ">
							<li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase hover:text-primary">FAQS</li>
						</Link>
						<Link href="/#testimonials">
							<li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase hover:text-primary">Testimonials</li>
						</Link>
						<Link href="/#we-work-with">
							<li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase hover:text-primary">We work with</li>
						</Link>
						<Link href="/#send-inquiry">
							<li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase hover:text-primary">REQUEST CONSULTATION</li>
						</Link>
						<Link href="/#send-inquiry">
							<li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase hover:text-primary">Book your visit</li>
						</Link>
					</ul>
				</div>
				<div className="flex justify-start item-center gap-5 mt-5 px-6">
					<Link href="https://www.facebook.com/share/1Ejfnddk9n/?mibextid=wwXIfr" target='_blank'>
						{/* <img className="w-[24px]" src="/asset/footer/Facebookp.png" alt="" /> */}
						<IoLogoFacebook className='text-[30px] hover:text-primary' />
					</Link>
					<Link href="https://www.instagram.com/havdorindia?igsh=MXF4YWZ4dmVuYTFsbg==" target='_blank'>
						{/* <img className="w-[24px]" src="/asset/footer/Instagramp.png" alt="" /> */}
						<FaInstagram className='text-[28px] hover:text-primary' />
					</Link>
					<Link href="https://www.linkedin.com/company/hav-dor-india/" target='_blank'>
						<FaLinkedin className='text-[28px] hover:text-primary' />
					</Link>
				</div>
				<div className="flex w-full absolute bottom-0 full !px-0 !py-0 justify-end item-end">
					<img className="w-full h-[72.5px]" src="/asset/navbar/blacklogo.png" alt="" />
				</div>
			</div>
		</div>
	);
}
