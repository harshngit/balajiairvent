"use client"
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react'
import projectsData from '@/data/projectsData'
import ClientsProject from './ClientsProject';
import Link from 'next/link';

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState("collabration");
  const [activeCollab, setActiveCollab] = useState("collab1");
  
  // Available functions for other components:
  // - getActiveTabLink(): Returns the current active tab's link
  // - getAllTabLinks(): Returns all tab links with their details
  // - productTabs: Array of tab configurations with links
  const productTabs = [
    { label: "Collabration", category: "collabration", href: "/projects#collabration", link: "/projects?tab=collabration" },
    { label: "Projects", category: "projects", href: "/projects#projects", link: "/projects?tab=projects" },
    { label: "Clients", category: "clients", href: "/projects#clients", link: "/projects?tab=clients" },
  ];
  const handleClick = (tab) => {
    setActiveCategory(tab.category);
    // Update URL with tab parameter
    const url = new URL(window.location);
    url.searchParams.set('tab', tab.category);
    window.history.pushState({}, '', url);
  };
  const [isCollabDropdownOpen, setIsCollabDropdownOpen] = useState(false);
  const collabDropdownRef = useRef(null);

  // Function to get the current active tab's link for use by other components
  const getActiveTabLink = () => {
    const activeTab = productTabs.find(tab => tab.category === activeCategory);
    return activeTab ? activeTab.link : null;
  };

  // Function to get all tab links for use by other components
  const getAllTabLinks = () => {
    return productTabs.map(tab => ({
      label: tab.label,
      category: tab.category,
      link: tab.link,
      href: tab.href
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (collabDropdownRef.current && !collabDropdownRef.current.contains(event.target)) {
        setIsCollabDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle URL parameters to set active tab
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam && productTabs.some(tab => tab.category === tabParam)) {
      setActiveCategory(tabParam);
    }
  }, []);
  const collabConfig = {
    collab1: { title: '75F Solutions', link: 'https://www.75f.io/en-in/' },
    collab2: { title: 'Teryair', link: null },
  };

  return (
    <div className={`relative w-full ${isCollabDropdownOpen ? 'overflow-visible' : 'overflow-hidden'} pt-[88px] lg:pt-[120px]`}>
      {/* Top background gradient effect */}
      {activeCategory === "collabration" && <div className='absolute inset-x-0 top-0 -z-10 pointer-events-none'>
        <div className='w-full h-[260px] md:h-[70vh] bg-gradient-to-b from-[#0F2850] from-[40%] via-[#0f28507c] via-[80%] to-white to-[100%]' />
      </div>}
      {activeCategory === "projects" && <div className='absolute inset-x-0 top-0 -z-10 pointer-events-none'>
        <div className='w-full h-[180px] md:h-[30vh] bg-secondary' />
      </div>}
      {activeCategory === "clients" && <div className='absolute inset-x-0 top-0 -z-10 pointer-events-none'>
        <div className='w-full h-[360px] md:h-[60vh] bg-secondary' />
      </div>}

      <div className=' min-h-screen '>
        <div className="">
          <div className='flex mt-8 space-x-6 border-b border-gray-200 lg:mb-[20px] mx-6'>
          {productTabs.map((tab) => (
            tab.category === 'collabration' ? (
              <div  key={tab.category} className='relative flex items-center' ref={collabDropdownRef}>
                <button
                  onClick={() => handleClick(tab)}
                  className={`relative pb-2 lg:px-[20px] hover:text-[#90C4FD] transition-all duration-300 px-2 w-[120px] lg:w-auto flex justify-between items-center text-sm md:text-[20px] lg:gap-5 gap-2  ${
                    activeCategory === tab.category
                      ? "font-medium text-[#fff]"
                      : "font-light text-[#fff]/80"}
                  `}
                >
                  {tab.label}
                  {activeCategory === tab.category && (
                    <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-orange rounded-full"></span>
                  )}
                  <div className='cursor-pointer'
                  onClick={() => setIsCollabDropdownOpen((prev) => !prev)}
                  >
                    <Image src={'/asset/downsmall.png'} alt='toggle' width={24} height={24} className={`${isCollabDropdownOpen ? 'rotate-180' : ''} transition-transform w-[20px] h-[20px] md:w-[24px] md:h-[24px]`} />
                  </div>
                </button>
                {isCollabDropdownOpen && (
                  <ul className='absolute top-[120%] left-0 bg-white text-[#0F2850] shadow-lg rounded-md py-2 w-[220px] z-[10000] min-w-[200px] md:min-w-[220px] max-w-[90vw]'>
                    <li>
                      <button
                        className='w-full text-left px-4 py-3 hover:bg-gray-100 hover:text-[#90C4FD] transition-all duration-300'
                        onClick={() => { 
                          setActiveCollab('collab1'); 
                          setActiveCategory('collabration'); 
                          setIsCollabDropdownOpen(false);
                          // Update URL
                          const url = new URL(window.location);
                          url.searchParams.set('tab', 'collabration');
                          window.history.pushState({}, '', url);
                        }}
                      >
                        75F Solutions
                      </button>
                    </li>
                    <li>
                      <button
                        className='w-full text-left px-4 py-3 hover:bg-gray-100 hover:text-[#90C4FD] transition-all duration-300  '
                        onClick={() => { 
                          setActiveCollab('collab2'); 
                          setActiveCategory('collabration'); 
                          setIsCollabDropdownOpen(false);
                          // Update URL
                          const url = new URL(window.location);
                          url.searchParams.set('tab', 'collabration');
                          window.history.pushState({}, '', url);
                        }}
                      >
                        Teryair
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
            <button
              key={tab.category}
              onClick={() => handleClick(tab)}
              className={`relative pb-2 px-[20px] hover:text-[#90C4FD]  duration-300 text-sm md:text-[20px] transition-colors ${
                activeCategory === tab.category
                  ? "font-medium text-[#fff]"
                    : "font-light text-[#fff]/80"}
                `}
            >
                {tab.label}
              {activeCategory === tab.category && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-orange rounded-full"></span>
              )}
            </button>
            )
          ))}
          </div>
        </div>
        {activeCategory === "collabration" && (
          <div className="flex justify-start lg:gap-[50px] items-start flex-col gap-4 lg:py-[50px] lg:px-[20px] px-3 py-5">
            {activeCollab === "collab1" && (<div>
            <div className='flex justify-start items-center gap-2 '>
              <Link href={"https://www.75f.io/en-in/"} target='_blank' className='group flex justify-start items-center gap-2'>
              <h3 className='font-light text-[#F0F0F0] text-[32px] group-hover:text-[#90C4FD] transition-all duration-300'>75F Solutions</h3>
              <Link href={"https://www.teryair.com"} target='_blank' className=''>
              <Image 
                src={"/asset/Arrowsideup.png"}
                alt="75F Solutions"
                width={28}
                height={28}
                className='w-[28px] h-[28px] group-hover:opacity-0 group-hover:hidden opacity-100 transition-all duration-300'
              />    
              <Image 
                src={"/asset/lightbluearrow.png"}
                alt="75F Solutions"
                width={28}
                height={28}
                className='w-[28px] h-[28px] group-hover:opacity-100 group-hover:block hidden opacity-0 transition-all duration-300'
              />    
              </Link>
              </Link>
            </div>
            <div className='w-full lg:block hidden shadow-lg rounded-2xl overflow-hidden'>
              <Image 
                src={"/asset/projects/collabration/1.webp"}
                alt="75F Solutions"
                width={1472}
                height={300}
                className='w-full'
              />
            </div>
            <div className='w-full lg:hidden block'>
              <Image 
                src={"/asset/projects/collabration/2.webp"}
                alt="75F Solutions"
                width={1472}
                height={300}
                className='w-full'
              />
            </div>
            {/* Below image: Description + Key Features */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-6 lg:mt-10">
              <div className="text-secondary text-[16px] leading-relaxed lg:p-6 ">
                <p className="mb-4">75F offers a vertically-integrated suite of wireless sensors, equipment controllers and cloud-based software delivering predictive, proactive building automation right out of the box.</p>
                <p className="mb-4">It takes control of your commercial building indoor environments, proactively eliminating hot and cold spots before they occur, improving air quality and saving energy, regardless of which heating or cooling systems you have. It understands when to take advantage of outside air to provide free cooling and improve the health and well-being of your staff and guests.</p>
                <p>The suite of products and solutions can be implemented at commercial real estate, office, tech parks, hospitality, restaurants and retail etc.</p>
              </div>
              <div className="p-[1px] rounded-2xl bg-blue-gradient">
  <div className="rounded-2xl p-5 lg:p-6 bg-[#F0F0F0] h-full">
    <h4 className="text-[#0F2850] text-lg font-medium mb-3">Key Features</h4>
    <ul className="list-disc pl-5 space-y-2 text-[#0F2850]/90 text-[16px]">
      <li>Multi-site, zone-specific and equipment-specific monitoring and control</li>
      <li>Predictive and intelligent system can reduce energy costs up to 50%</li>
      <li>Suitable for existing equipment or new equipment</li>
      <li>Easy and low-cost installation</li>
      <li>A typical ROI of less than 3 years</li>
    </ul>
  </div>
            </div>
            </div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[32px] font-light '>Dynamic Airflow <br className='lg:block   hidden' /> Balancing</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>75F’s proactive zone control system with smart dampers prevents hot & cold spots before they occur.</p>
				</div>
			      </div>
            <div className='w-full flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] w-full flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[24px] font-light '>Outside Air <br className='lg:block hidden' /> Optimizer</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>75F’s Intelligent Economizer & Enthalpy HVAC Control for RTUs, MUAs & DOAS.</p>
				</div>
			      </div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[24px] font-light '>Indoor Air Quality Management</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>The 75F smart system detects levels of CO2, NO2 and other VOCs in the building and proactively adjusts outside air dampers to maintain air quality at appropriate levels.</p>
				</div>
			      </div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[24px] font-light '>Dynamic Chilled <br/> Water Balancing</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>75F designed an end-to-end solution for the chilled water system to maintain comfort while using less chilled water and saving more energy.</p>
				</div>
	    		  </div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[24px] font-light '>Advanced Lighting</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>The 75F advanced system considers factors about your building before determining the ideal time to adjust the lighting.</p>
				</div>
			      </div>
            <div className='lg:py-[20px] lg:pl-[40px] flex flex-col justify-start items-start gap-2'>
                <h2 className='text-secondary text-[28px] font-light'>Product Advantages</h2>
                <div className='lg:grid grid-cols-1 lg:mx-0 mt-5 lg:grid-cols-4 gap-[20px] flex flex-col justify-start lg:justify-center lg:items-center'>
                        <Image
                            src={"/asset/projects/collabration/advantages/1.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px] lg:block hidden'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages/2.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px] lg:block hidden'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages/3.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px] lg:block hidden'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages/4.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px] lg:block hidden'
                        />

                        {/* Mobile Images */}

                        <Image
                            src={"/asset/projects/collabration/advantages/5.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={200}
                            className='w-[350px] h-[200px] lg:hidden block'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages/6.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={200}
                            className='w-[350px] h-[200px] lg:hidden block'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages/7.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={200}
                            className='w-[350px] h-[200px] lg:hidden block'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages/8.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={200}
                            className='w-[350px] h-[200px] lg:hidden block'
                        />
                        

                </div>
            </div>
            </div>)}
            {activeCollab === "collab2" && (
              <div>
              <div className='flex justify-start items-center gap-2'>
                <Link href={"https://www.teryair.com"} target='_blank' className='flex justify-start items-center gap-2 group'>
                <h3 className='font-light text-[#F0F0F0] text-[32px] group-hover:text-[#90C4FD] transition-all duration-300'>Teryair</h3>
              <div className='group'>
              <Image 
                src={"/asset/Arrowsideup.png"}
                alt="75F Solutions"
                width={28}
                height={28}
                className='w-[28px] h-[28px] group-hover:opacity-0 group-hover:hidden opacity-100 transition-all duration-300'
              />    
              <Image 
                src={"/asset/lightbluearrow.png"}
                alt="75F Solutions"
                width={28}
                height={28}
                className='w-[28px] h-[28px] group-hover:opacity-100 group-hover:block hidden opacity-0 transition-all duration-300'
              />    
              </div>    
                </Link>
            </div>
            <div className='w-full lg:block hidden shadow-lg rounded-2xl overflow-hidden'>
              <Image 
                src={"/asset/projects/collabration/3.webp"}
                alt="75F Solutions"
                width={1472}
                height={300}
                className='w-full'
              />
            </div>
            <div className='w-full lg:hidden block'>
              <Image 
                src={"/asset/projects/collabration/3.webp"}
                alt="75F Solutions"
                width={1472}
                height={300}
                className='w-full'
              />
            </div>
            {/* Below image: Description + Key Features */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-6 lg:mt-10">
              <div className="text-secondary text-[16px] leading-relaxed lg:p-6 ">
                <p className="mb-4">Teryair, a premier name in pneumatic equipment manufacturing since 2003, commands a state-of-the-art 65,000 sq. ft. facility in Vasai, located 30 km from Mumbai’s city center. The company specializes in designing and producing a comprehensive range of cost-efficient products, including pneumatic diaphragm pumps, surface preparation equipment, air motors, airless painting systems, ventilation fans, industrial high-pressure jetting systems, and an array of handheld pneumatic tools.</p>
                <p className="mb-4">With a global footprint across 30+ countries, Teryair has established a sterling reputation for reliability and superior performance. Distributors in key markets like Germany and Holland have partnered with the brand for over two decades, collectively generating sales worth millions of Euros. The extensive deployment of Teryair products aboard seagoing vessels is evidenced by consistent worldwide demand for consumables, a need expertly fulfilled by our responsive distributor network.</p>
              </div>
              <div className="p-[1px] rounded-2xl bg-blue-gradient">
              <div className="rounded-2xl p-5 lg:p-6 bg-[#F0F0F0] h-full flex flex-col justify-center items-start">
                  <h4 className="text-[#0F2850] text-lg font-medium mb-3">Teryair’s Philosophy</h4>
                  <p className="text-[16px] text-secondary ">Robust, straightforward designs crafted under stringent quality controls within a cutting-edge manufacturing environment. This commitment, coupled with assured global spare parts availability and highly competitive manufacturing standards, delivers an unparalleled value proposition for distributors and end users alike.</p>
        </div>
              </div>
            </div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[32px] font-light '>ATEX-Certified <br className='lg:block hidden' /> Products</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>All Teryair air motors and AODD pumps meet stringent ATEX certification standards, ensuring safety and reliability in hazardous environments.</p>
				</div>
			      </div>
            <div className='w-full flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] w-full flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[24px] font-light '>Innovative <br className='lg:block hidden' /> Engineering</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>Teryair excels in designing high-quality, innovative fluid power solutions tailored to industrial needs.</p>
				</div>
			      </div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[24px] font-light '>Comprehensive <br className='lg:block hidden' /> Product Range</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>A diverse lineup of industrial products, including air motors, AODD pumps, pneumatic tools, tank cleaning equipment, and more.</p>
				</div>
			      </div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[24px] font-light '>Environmentally <br className='lg:block hidden' /> Friendly Solutions</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>Teryair emphasizes sustainability by offering energy-efficient and eco-friendly products.</p>
				</div>
	    		  </div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[24px] font-light '>Global Reach with <br className='lg:block hidden' /> Local Expertise</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>A strong distribution network ensures timely delivery and local support across the globe.</p>
				</div>
			      </div>
            <div className='lg:py-[20px] lg:pl-[40px]  flex flex-col justify-start items-start gap-2'>
                <h2 className='text-secondary text-[28px] font-light'>Product Advantages</h2>
                <div className='xxl:grid lg:grid grid-cols-1 lg:mx-0 mx-8 mt-5 lg:grid-cols-4 gap-[20px] flex flex-col lg:justify-center lg:items-center'>
                        <Image
                            src={"/asset/projects/collabration/advantages2/1.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='lg:w-[350px] lg:h-[380px] w-[350px] h-[200px]'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages2/2.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px]'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages2/3.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px]'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages2/4.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px]'
                        />
                </div>
            </div>
              </div>
            )}
          </div>
        )}
        {activeCategory === "projects" && (
          <div className="w-full xxl:pt-[100px] lg:pt-[50px] pt-[50px]">
            <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-6 lg:gap-y-[50px] px-6">
              {projectsData.map((project) => (
                <div key={project.id} className="">
                  <div className="relative group ">
                    <Image
                      src={project.img}
                      alt={project.title || `Project ${project.id}`}
                      width={480}
                      height={300}
                      className="w-full"
                    />
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-transparent rounded-xl" />
                      <div className="absolute p-[30px] inset-0 flex items-start">
                        <p className="text-white text-xs md:text-[16px] font-regular leading-relaxed max-w-[90%]">
                          {project.desc || ''}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-secondary text-sm md:text-[20px] font-normal truncate">{project.title || `Project ${project.id}`}</h3>
                    <p className="text-secondary font-light text-[12px] md:text-[16px] mt-1">{project.location && project.location.trim() !== '' ? project.location : '-'}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex mt-[50px] justify-center items-center'>
                <Image 
                    src={"/asset/projects/pro/Bottom.webp"}
                    alt="Clients"
                    width={1512}
                    height={700}
                    className='w-full'
                />
            </div>
          </div>
        )}
        {activeCategory === "clients" && (
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <Image 
              src={"/asset/projects/clients/mob.webp"}
              alt="Clients"
              width={1512}
              height={700}
              className='lg:hidden block'
              />
              <Image 
              src={"/asset/projects/clients/dektop.webp"}
              alt="Clients"
              width={1440}
              height={1000}
              className='lg:block hidden   w-full h-full object-cover'
              />
            </div>
            <ClientsProject/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGrid;
