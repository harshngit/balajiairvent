"use client"
// import HomeBanner from '@/components/Home/HomeBanner.js'
import NavbarTwo from '@/components/Layout/Navbar.js'
import React, { useState } from 'react'
import BannerHome from '@/components/Home/BannerHome.js'
import AboutHome from '@/components/Home/AboutHome.js'
import IndustriesHome from '@/components/Home/IndustriesHome.js'
import AboutHome2 from '@/components/Home/AboutHome2.js'

import Footer from '@/components/Layout/Footer.js'
import ConsultationSidebar from '@/components/ConsultationSidebar.js';
import ClientsHome from '@/components/Home/ClientsHome'
import Application from '@/components/Home/Application'
import CTA from '@/components/Home/CTA'
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <ConsultationSidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
      <div className=' font-onest lg:overflow-visible overflow-hidden'>
        <NavbarTwo />
        <BannerHome />
        <ClientsHome />
        <AboutHome />
        <IndustriesHome />
        <AboutHome2 />
        <Application />
        <CTA />
        <Footer />
      </div>
    </>
  )
}

export default Home