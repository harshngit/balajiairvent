"use client";
import productData from "@/data/productData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const productTabs = [
	{ label: "All", href: "#all", category: "all" },
	{ label: "Data Centre", href: "#data", category: "Data Centre" },
	{ label: "Comfort Air Conditioning", href: "#industries", category: "Air" },
	{ label: "Industrial Dampers", href: "#collab2", category: "Industries" },
	{ label: "Fans & Ventilation Accessories", href: "#fans", category: "Fans" },
	{ label: "Fire Doors", href: "#firedoor", category: "Fire Door" },
];

const ProductGrid = () => {
	// ✅ Drive state by category (not href)
	const [activeCategory, setActiveCategory] = useState("all");
	const [filteredProducts, setFilteredProducts] = useState(productData);
    // Expanded details per product
    const [expandedProductId, setExpandedProductId] = useState(null);
    const [activeTab, setActiveTab] = useState("Description");
    const [activeImageSrc, setActiveImageSrc] = useState(null);
    const [columns, setColumns] = useState(1);

	// Filter whenever category changes
	useEffect(() => {
		if (activeCategory === "all") {
			setFilteredProducts(productData);
		} else {
			setFilteredProducts(
				productData.filter(
					(p) => (p.category || "").toLowerCase() === activeCategory.toLowerCase()
				)
			);
		}
	}, [activeCategory]);

	// On load: read hash and map to category
	useEffect(() => {
		if (typeof window !== "undefined" && window.location.hash) {
			const hash = window.location.hash;
			const match = productTabs.find((t) => t.href === hash);
			if (match) setActiveCategory(match.category);
		}
	}, []);

    const handleClick = (tab) => {
		// update selected category
		setActiveCategory(tab.category);
		// update URL hash & optional scroll
		if (typeof window !== "undefined") {
			window.history.replaceState(null, "", tab.href);
			const section = document.querySelector(tab.href);
			if (section) section.scrollIntoView({ behavior: "smooth" });
		}
	};

    const openDetails = (product) => {
        const images = [product.img1, product.img2, product.img3, product.img4].filter(Boolean);
        setExpandedProductId((prev) => (prev === product.id ? null : product.id));
        setActiveTab("Description");
        setActiveImageSrc(images[0] || product.img1 || "/placeholder.jpg");
        // Smooth scroll to the inline details block
        if (typeof window !== "undefined") {
            setTimeout(() => {
                const el = document.getElementById(`product-details-inline-${product.id}`);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 0);
        }
    };

    // Track column count to insert details after the end of the row
    useEffect(() => {
        const updateColumns = () => {
            if (typeof window === 'undefined') return;
            const w = window.innerWidth;
            if (w >= 768) {
                setColumns(3); // md and up → 3 columns (md:w-1/3)
            } else if (w >= 640) {
                setColumns(2); // sm → 2 columns (sm:w-1/2)
            } else {
                setColumns(1); // base → 1 column
            }
        };
        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

	return (
		<div className="max-w-[1400px] mx-auto pt-[50px]">
			<div className="lg:pt-[0px] pb-[50px]">
				{/* Tabs */}
				<div className="flex space-x-6 border-b border-gray-200">
					{productTabs.map((tab) => (
						<button
							key={tab.href}
							onClick={() => handleClick(tab)}
							className={`relative pb-2 px-[20px] text-sm md:text-[20px] transition-colors ${activeCategory === tab.category
								? "font-medium text-[#0F2850]"
								: "font-light text-[#0F2850]/80"
								}`}
						>
							{tab.label}
							{activeCategory === tab.category && (
								<span className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange rounded-full"></span>
							)}
						</button>
					))}
				</div>

				{/* grid — you can now do checks like this */}
				{/* Example usage requested: {activeCategory === "all"} */}
				<div className="">
					{activeCategory == "Data Centre" &&
						<>
							<div className="grid grid-cols-1 lg:grid-cols-2 mt-5 px-5 py-5 gap-6">
								<div className="flex flex-col lg:w-[620px] w-full space-y-3 justify-start items-start">
									<h2 className=" bg-blue-gradient text-[32px] text-transparent bg-clip-text">Data Centre</h2>
									<p className="text-secondary text-[14px]">
										The determination of cooling requirements for IT systems can be reduced to a simple process that can be done by anyone without special training. Expressing all measures of power and cooling in Watts simplifies the process. A general rule is that a CRAC system rating must be 1.3 times the anticipated IT load rating plus any capacity added for redundancy.
									</p>
									<p className="text-secondary text-[14px]">
										For larger data centers, the cooling requirements alone are typically not sufficient to select an air conditioner. Typically, the effects of other heat sources such as walls and roof, along with recirculation, are significant and must be examined for a particular installation.
									</p>
									<p className="text-secondary text-[14px]">
										The design of the air handling ductwork or raised floor has a significant effect on the overall system performance, and also greatly affects the uniformity of temperature within the data center. The adoption of a simple, standardized, and modular air distribution system architecture, combined with the simple heat load estimation method described, could significantly reduce the engineering requirements for data center design.
									</p>
								</div>
								<div className="flex justify-center items-center">
									<Image
										src={"/asset/product/dataimg/data.webp"}
										width={620}
										height={300}
									/>
								</div>
							</div>
						</>
					}
					{activeCategory == "Air" &&
						<>
							<div className="grid grid-cols-1 lg:grid-cols-2 mt-5 px-5 py-5 gap-6">
								<div className="flex flex-col lg:w-[620px] w-full space-y-3 justify-start items-start">
									<h2 className=" bg-blue-gradient text-[32px] text-transparent bg-clip-text">Comfort Air Conditioning</h2>
									<p className="text-secondary text-[14px]">
										The Comfort Airconditioning Segment refers to air conditioning systems designed to maintain a pleasant and healthy indoor environment for human comfort. These systems regulate temperature, humidity, air quality, and ventilation across various settings like homes, offices, retail spaces, hotels, and public buildings.

									</p>
									<p className="text-secondary text-[14px]">
										Key features include:
									</p>
									<ul className="space-y-2 list-disc list-inside text-secondary">
										<li className="text-secondary text-[14px]">Temperature Control: Maintains indoor temperature in a comfortable range (typically 22–26°C).
										</li>
										<li className="text-secondary text-[14px]">Humidity Regulation: Keeps humidity between 40–60% for optimal comfort.
										</li>
										<li className="text-secondary text-[14px]">Air Quality: Uses filters to reduce dust, allergens, and pollutants.
										</li>
										<li className="text-secondary text-[14px]">
											Energy Efficiency: Focus on energy-saving technologies like inverter compressors and smart controls.
										</li>
										<li className="text-secondary text-[14px]">
											Comfort air conditioning plays a crucial role in enhancing productivity, well-being, and overall indoor experience. The segment is driven by rising urbanization, improved lifestyle standards, and demand for sustainable HVAC solutions.

										</li>
									</ul>
								</div>
								<div className="flex justify-center items-center">
									<Image
										src={"/asset/product/air/air.webp"}
										width={620}
										height={300}
									/>
								</div>
							</div>
						</>
					}
					{activeCategory == "Industries" &&
						<>
							<div className="grid grid-cols-1 lg:grid-cols-2 mt-5 px-5 py-5 gap-6">
								<div className="flex flex-col lg:w-[620px] w-full space-y-3 justify-start items-start">
									<h2 className=" bg-blue-gradient text-[32px] text-transparent bg-clip-text">Industrial Dampers</h2>
									<p className="text-secondary text-[14px]">
										Heavy-duty industrial dampers are robust airflow control devices designed for demanding applications involving high temperatures, pressures, or corrosive environments.
									</p>
									<p className="text-secondary text-[14px]">
										Key features :
									</p>
									<ul className="space-y-2 list-disc list-inside text-secondary">
										<li className="text-secondary text-[14px]">Built with durable materials like stainless steel or coated steel.
										</li>
										<li className="text-secondary text-[14px]">Designed to handle large volumes of air or gas.
										</li>
										<li className="text-secondary text-[14px]">Operated manually or with actuators (electric, pneumatic, or hydraulic).
										</li>
										<li className="text-secondary text-[14px]">
											Common Types:
										</li>
										<li className="text-secondary text-[14px]">
											Guillotine Dampers – For tight shut-off and maintenance isolation.
										</li>
										<li className="text-secondary text-[14px]">
											Louver Dampers – For modulating flow.
										</li>
										<li className="text-secondary text-[14px]">
											Butterfly Dampers – Compact and suitable for quick shut-off.
										</li>
										<li className="text-secondary text-[14px]">
											Widely used in power plants, steel mills, refineries, and process industries for reliable airflow control, system isolation, and process efficiency under harsh operating conditions.

										</li>
									</ul>
								</div>
								<div className="flex justify-center items-center">
									<Image
										src={"/asset/product/industries/industries.webp"}
										width={620}
										height={300}
									/>
								</div>
							</div>
						</>
					}
					{activeCategory == "Fans" &&
						<>
							<div className="grid grid-cols-1 lg:grid-cols-2 mt-5 px-5 py-5 gap-6">
								<div className="flex flex-col lg:w-[620px] w-full space-y-3 justify-start items-start">
									<h2 className=" bg-blue-gradient text-[32px] text-transparent bg-clip-text">Fans & Ventilation Accessories</h2>
									<p className="text-secondary text-[14px]">
										Fans and ventilation accessories are crucial for maintaining good air quality and comfort in homes and buildings. Fans, including exhaust fans, ceiling fans, and cooling fans, are used to circulate air, remove stale air and pollutants, and regulate temperature. Ventilation accessories, like ducting, louvers, and filters, complement fans by directing airflow, preventing backdrafts, and filtering out contaminants.
									</p>
								</div>
								<div className="flex justify-center items-center">
									<Image
										src={"/asset/product/fans/fans.webp"}
										width={620}
										height={300}
									/>
								</div>
							</div>
						</>
					}
					{activeCategory == "Fire Door" &&
						<>
							<div className="grid grid-cols-1 lg:grid-cols-2 mt-5 px-5 py-5 gap-6">
								<div className="flex flex-col lg:w-[620px] w-full space-y-3 justify-start items-start">
									<h2 className=" bg-blue-gradient text-[32px] text-transparent bg-clip-text">Fire doors</h2>
									<p className="text-secondary text-[14px]">
										Fire doors are specialized doors designed to resist the spread of fire and smoke, providing crucial time for safe evacuation and limiting property damage. They are a critical component of passive fire protection systems in buildings. These doors are engineered to withstand fire for a specific duration, preventing flames and toxic gases from passing through.
									</p>
								</div>
								<div className="flex justify-center items-center">
									<Image
										src={"/asset/product/firedoor/fire.webp"}
										width={620}
										height={300}
									/>
								</div>
							</div>
						</>
					}
                    <div className="flex flex-wrap mt-5  -mx-3 relative">
                        {(() => {
                            const expandedIndex = filteredProducts.findIndex(p => p.id === expandedProductId);
                            const expandedProduct = expandedIndex >= 0 ? filteredProducts[expandedIndex] : null;
                            return filteredProducts.map((product, index) => {
                            const images = [product.img1, product.img2, product.img3, product.img4].filter(Boolean);
                                const isExpanded = expandedProductId === product.id;
                                const rowStart = index - (index % columns);
                                const rowEnd = Math.min(rowStart + columns - 1, filteredProducts.length - 1);
                                const insertPanel = index === rowEnd && expandedIndex >= rowStart && expandedIndex <= rowEnd && expandedProduct;
                                return (
                                    <React.Fragment key={product.id}>
                                <div id={`product-card-${product.id}`} className="w-full sm:w-1/2 md:w-1/3 px-3">
                                    <div className="group relative h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden rounded-lg bg-white">
                                        <Image
                                            src={product.img1 || "/placeholder.jpg"}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#0F2850] via-[#0F2850]/70 to-transparent" />
                                        <div className="absolute left-4 bottom-4 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <button onClick={() => openDetails(product)} className="inline-flex items-center hover:bg-[#fff] hover:text-secondary gap-2 text-white text-sm font-medium pl-[10px] pr-[10px] py-[6px] rounded-full ring-1 ring-white/40 bg-white/10 backdrop-blur-sm">
                                                View Details
												<Image src={"/asset/Arrowview.png"} alt="arrow" width={24

												} height={24} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-[20px] font-medium text-gray-800">{product.name}</h3>
                                    </div>
                    
                                </div>

                                {insertPanel && expandedProduct && (
                                    <div id={`product-details-inline-${expandedProduct.id}`} className="w-full basis-full ">
                                      <div className="max-w-[100%] my-[10px] rounded-xl bg-[#F0F0F0] p-[50px] transition-all duration-500 ease-out">
                                        <div className="flex justify-between items-start flex-col lg:flex-row gap-[84px]">
                                                <div className="lg:w-[40%] w-full">
                                                    <div className="relative w-full h-[240px] md:h-[300px] lg:h-[320px] rounded-lg overflow-hidden bg-gray-50">
                                                        <Image src={activeImageSrc || expandedProduct.img1 || "/placeholder.jpg"} alt={expandedProduct.name} fill className="object-cover" />
                                                    </div>
                                                    <div className="mt-3 flex gap-3">
                                                        {[expandedProduct.img1, expandedProduct.img2, expandedProduct.img3, expandedProduct.img4].filter(Boolean).map((img, i) => (
                                                            <button key={i} onClick={() => setActiveImageSrc(img)} className="relative w-[70px] h-[70px] rounded-md overflow-hidden ring-1 ring-gray-200">
                                                                <Image src={img} alt={`${product.name}-${i}`} fill className="object-cover" />
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="lg:w-[60%] w-full">
                                                    <div className="flex items-start  justify-between">
                                                        <div>
                                                            <h3 className="text-[18px] md:text-[24px] font-medium text-secondary">{expandedProduct.name}</h3>
                                                            <p className="text-xs md:text-[24px] font-light text-secondary mt-1">{expandedProduct.category}</p>
                                                        </div>
                                                        <button onClick={() => setExpandedProductId(null)} className="text-gray-500 hover:text-gray-700">
															<Image src={"/asset/crossnew.png"} alt="close" width={24} height={24} />
														</button>
                                                    </div>

                                                    <div className="mt-[50px] border-b-[1px] border-secondary">
                                                        <div className="flex gap-6 text-sm">
                                                            {["Description", "Key Benefits"].map((tab) => (
                                                                <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-2 lg:text-[20px] text-[16px] relative ${activeTab === tab ? "text-secondary font-bold" : "text-secondary"}`}>
                                                                    {tab}
                                                                    {activeTab === tab && <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-secondary rounded-full" />}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="mt-4 text-[12px] md:text-[14px] text-secondary">
                                                        {activeTab === "Description" && <p className="text-[14px]">{expandedProduct.desc}</p>}
                                                        {activeTab === "Key Benefits" && (
                                                            <ul className="list-disc list-inside space-y-1">
                                                                {(expandedProduct.KeyFeatures || []).map((k, i) => (
                                                                    <li key={i}>{k}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                          </div>
                                        </div>
                                )}
                                </React.Fragment>
                            );
                            });
                        })()}
                    </div>

                    {/* Removed unified panel; now each expanded card shows its own panel directly below */}
				</div>

				{/* Example conditional wrapper if you ever need separate markup for "all":
        {activeCategory === "all" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">...</div>
        )} 
        */}
			</div>
		</div>
	);
};

export default ProductGrid;
