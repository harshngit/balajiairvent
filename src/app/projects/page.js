import Footer from '@/components/Layout/Footer'
import NavbarCustom2 from '@/components/Layout/Navbar2'
import NavbarCustom1 from '@/components/Layout/NavbarWhite'
import ProjectGrid from '@/components/Projects/ProjectGrid'
import React from 'react'

export const metadata = {
    title: "Projects - Balaji AirVent",
  description: "Explore Balaji AirVent's successful HVAC projects and collaborations including 75F Solutions and Teryair partnerships. View our portfolio of industrial air handling, ventilation systems, and air conditioning installations.",
  keywords: [
    "HVAC Projects",
    "AirVentilation Projects",
    "Industrial HVAC Installations",
    "75F Solutions Collaboration",
    "Teryair Partnership",
    "HVAC Project Portfolio",
    "Air Handling Projects",
    "Ventilation System Installations",
    "Commercial HVAC Projects",
    "Balaji AirVent Projects"
  ],
  openGraph: {
    title: "Projects | Balaji AirVent - HVAC Solutions & Collaborations",
    description: "Explore Balaji AirVent's successful HVAC projects and collaborations including 75F Solutions and Teryair partnerships. View our portfolio of industrial installations.",
    url: "https://balajiairvent.com/projects",
    siteName: "Balaji AirVent",
    images: [
      {
        url: "/asset/projects/collabration/1.webp",
        width: 1200,
        height: 630,
        alt: "Balaji AirVent Projects - HVAC Solutions Portfolio",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://balajiairvent.com/projects",
  },
};

const Projects = () => {
  return (
    <div className=' font-onest overflow-hidden'>
        <NavbarCustom2/>
        <ProjectGrid />
        <Footer />
    </div>
  )
}

export default Projects     