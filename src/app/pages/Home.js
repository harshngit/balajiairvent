"use client"
// import HomeBanner from '@/components/Home/HomeBanner.js'
import NavbarTwo from '@/components/Layout/Navbar.js'
import React, { useState } from 'react'
import BannerHome from '@/components/Home/BannerHome.js'
import AboutHome from '@/components/Home/AboutHome.js'
import IndustriesHome from '@/components/Home/IndustriesHome.js'
import Reviews from '@/components/Home/Reviews.js'
import AboutHome2 from '@/components/Home/AboutHome2.js'
import CTA from '@/components/CTA.js'
import Footer from '@/components/Layout/Footer.js'
import ConsultationSidebar from '@/components/ConsultationSidebar.js';
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <ConsultationSidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
      <div className=' overflow-hidden'>
        <NavbarTwo />
        <BannerHome onOpenSidebar={() => setIsSidebarOpen(true)} />
        {/* <AboutHome />
        <section id='we-work-with'>
          <IndustriesHome />
        </section>
        <section id='testimonials'>
          <Reviews />
        </section>
        <AboutHome2 />
        <section id='send-inquiry'>
          <CTA onOpenSidebar={() => setIsSidebarOpen(true)} />
        </section> */}
        <Footer />
      </div>
    </>
  )
}

export default Home