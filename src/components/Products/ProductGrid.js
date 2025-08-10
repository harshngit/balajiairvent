"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const productTabs = [
	{ label: "All", href: "#all" },
	{ label: "Data Centre", href: "#data" },
	{ label: "Comfort Air Conditioning", href: "#industries" },
	{ label: "Industrial Dampers", href: "#collab2" },
	{ label: "Fans & Ventilation Accessories", href: "#fans" },
	{ label: "Fire Doors", href: "#firedoor" },
];

const ProductGrid = () => {
	const [activeTab, setActiveTab] = useState(productTabs[0].href); // default = first tab

	useEffect(() => {
		// Optional: read the hash from the URL on load
		if (window.location.hash) {
			setActiveTab(window.location.hash);
		}
	}, []);

	const handleClick = (href) => {
		setActiveTab(href);
		// Scroll to the section
		const section = document.querySelector(href);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className="max-w-[1400px] mx-auto pt-[50px]">
			<div className="lg:pt-[0px] pb-[50px]">
				{/* Tabs */}
				<div className="flex space-x-6 border-b border-gray-200">
					{productTabs.map((tab) => (
						<button
							key={tab.href}
							onClick={() => {
								setActiveTab(tab.href);
								const section = document.querySelector(tab.href);
								if (section) {
									section.scrollIntoView({ behavior: "smooth" });
								}
							}}
							className={`relative pb-2 px-[20px] text-sm md:text-[20px] transition-colors ${activeTab === tab.href
								? "font-medium text-[#0F2850]"
								: "font-light text-[#0F2850]/80"
								}`}
						>
							{tab.label}
							{activeTab === tab.href && (
								<span className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange rounded-full"></span>
							)}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductGrid;
