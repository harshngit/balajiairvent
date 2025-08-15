"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import projectsData from '@/data/projectsData'
import ClientsProject from './ClientsProject';

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState("collabration");
  const productTabs = [
    { label: "Collabration", category: "collabration" },
    { label: "Projects", category: "projects" },
    { label: "Clients", category: "clients" },
  ];
  const handleClick = (tab) => setActiveCategory(tab.category);

  return (
    <div className='relative w-full overflow-hidden pt-[88px] lg:pt-[120px]'>
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
            <button
              key={tab.category}
              onClick={() => handleClick(tab)}
              className={`relative pb-2 px-[20px] text-sm md:text-[20px] transition-colors ${
                activeCategory === tab.category
                  ? "font-medium text-[#fff]"
                  : "font-light text-[#fff]/80"
              }`}
            >
              {tab.label} {}
              {activeCategory === tab.category && (
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange rounded-full"></span>
              )}
            </button>
          ))}
          </div>
        </div>
        {activeCategory === "collabration" && (
          <div className="flex justify-start lg:gap-[50px] items-start flex-col gap-4 lg:py-[50px] lg:px-[20px] px-3 py-5">
            <div className='flex justify-start items-center gap-2'>
              <h3 className='font-light text-[#F0F0F0] text-[32px]'>75F Solutions</h3>
              <Image 
                src={"/asset/Arrowsideup.png"}
                alt="75F Solutions"
                width={28}
                height={28}
                className='w-[28px] h-[28px]'
              />            
            </div>
            <div className='w-full shadow-lg rounded-2xl overflow-hidden'>
              <Image 
                src={"/asset/projects/collabration/1.webp"}
                alt="75F Solutions"
                width={1472}
                height={300}
                className='w-full'
              />
            </div>
            {/* Below image: Description + Key Features */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-6 lg:mt-10">
              <div className="text-secondary text-[14px] leading-relaxed p-4 lg:p-6 ">
                <p className="mb-4">75F offers a vertically-integrated suite of wireless sensors, equipment controllers and cloud-based software delivering predictive, proactive building automation right out of the box.</p>
                <p className="mb-4">It takes control of your commercial building indoor environments, proactively eliminating hot and cold spots before they occur, improving air quality and saving energy, regardless of which heating or cooling systems you have. It understands when to take advantage of outside air to provide free cooling and improve the health and well-being of your staff and guests.</p>
                <p>The suite of products and solutions can be implemented at commercial real estate, office, tech parks, hospitality, restaurants and retail etc.</p>
              </div>
              <div className="p-[1px] rounded-2xl bg-blue-gradient">
  <div className="rounded-2xl p-5 lg:p-6 bg-white h-full">
    <h4 className="text-[#0F2850] text-lg font-medium mb-3">Key Features</h4>
    <ul className="list-disc pl-5 space-y-2 text-[#0F2850]/90 text-sm">
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
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[32px] font-light '>Dynamic Airflow Balancing</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>75F’s proactive zone control system with smart dampers prevents hot & cold spots before they occur.</p>
				</div>
			</div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[32px] font-light '>Outside Air <br/> Optimizer</h3>
				</div>
				<div className='lg:w-[65%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>75F’s Intelligent Economizer & Enthalpy HVAC Control for RTUs, MUAs & DOAS.</p>
				</div>
			</div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[32px] font-light '>Indoor Air Quality Management</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>The 75F smart system detects levels of CO2, NO2 and other VOCs in the building and proactively adjusts outside air dampers to maintain air quality at appropriate levels.</p>
				</div>
			</div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[32px] font-light '>Dynamic Chilled Water Balancing</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>75F designed an end-to-end solution for the chilled water system to maintain comfort while using less chilled water and saving more energy.</p>
				</div>
			</div>
            <div className='flex lg:flex-row flex-col py-2 px-2 lg:py-[70px] lg:px-[40px] justify-between item-center border-b-[1px] border-[#A3A3A3] bg-white'>
				<div className='lg:w-[30%] flex justify-start items-center'>
					<h3 className=' bg-blue-gradient text-transparent bg-clip-text lg:text-[40px] text-[32px] font-light '>Advanced Lighting</h3>
				</div>
				<div className='lg:w-[70%] w-full'>
					<p className='lg:text-[26px] text-[18px] text-secondary font-light'>The 75F advanced system considers factors about your building before determining the ideal time to adjust the lighting.</p>
				</div>
			</div>
            <div className='flex flex-col justify-start items-start gap-2'>
                <h2 className='text-secondary text-[28px] font-light'>Product Advantages</h2>
                <div className='lg:grid grid-cols-1 lg:mx-[60px] mx-8 mt-5 lg:grid-cols-4 gap-[20px] flex flex-col justify-center items-center'>
                        <Image
                            src={"/asset/projects/collabration/advantages/1.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px]'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages/2.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px]'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages/3.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px]'
                        />
                         <Image
                            src={"/asset/projects/collabration/advantages/4.webp"} 
                            alt="Product Advantages"
                            width={350}
                            height={380}
                            className='w-[350px] h-[380px]'
                        />
                </div>
            </div>

          </div>
        )}
        {activeCategory === "projects" && (
          <div className="w-full xxl:pt-[100px] lg:pt-[50px] pt-[50px]">
            <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-6">
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
