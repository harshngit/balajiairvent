import CTA from '@/components/Home/CTA'
import Footer from '@/components/Layout/Footer'
import NavbarCustom1 from '@/components/Layout/NavbarWhite'
import React from 'react'

const Contact = () => {
  return (
    <div className='font-onest overflow-hidden'>
        <NavbarCustom1/>
        <div className='pt-[12vh] lg:pt-0'>
        <CTA/>
        </div>
        <Footer />
    </div>
  )
}

export default Contact