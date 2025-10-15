import CTA from '@/components/Home/CTA'
import Footer from '@/components/Layout/Footer'
import NavbarCustom1 from '@/components/Layout/NavbarWhite'
import React from 'react'

export const metadata = {
  title: "Contact Us - Balaji Airvent",
  description: "Get in touch with Balaji Airvent for all your HVAC needs. Contact our expert team for AirVentilation systems, industrial air handling equipment, and HVAC solutions. Professional consultation and support available.",
  keywords: [
    "Contact Balaji Airvent",
    "HVAC Consultation",
    "AirVentilation Support",
    "Industrial HVAC Contact",
    "HVAC Customer Service",
    "Air Handling Equipment Support",
    "Ventilation Systems Contact",
    "HVAC Technical Support",
    "Balaji Airvent Contact",
    "HVAC Sales Contact"
  ],
  openGraph: {
    title: "Contact Us | Balaji Airvent - HVAC Solutions & Support",
    description: "Get in touch with Balaji Airvent for all your HVAC needs. Contact our expert team for AirVentilation systems, industrial air handling equipment, and HVAC solutions.",
    url: "https://balajiairvent.com/contactus",
    siteName: "Balaji Airvent",
    images: [
      {
        url: "/asset/contact/banner.webp",
        width: 1200,
        height: 630,
        alt: "Contact Balaji Airvent - HVAC Solutions & Support",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://balajiairvent.com/contactus",
  },
};

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