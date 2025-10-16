import AboutBanner from '@/components/About/AboutBanner'
import InsideStory from '@/components/About/InsideStory'
import KeyFeatures from '@/components/About/KeyFeatures'
import Footer from '@/components/Layout/Footer'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import React from 'react'

export const metadata = {
  title: "About Us - Balaji AirVent",
  description: "Learn about Balaji AirVent's journey as a leading HVAC manufacturer. Discover our vision, mission, key features, and commitment to delivering premium AirVentilation systems and industrial air handling solutions across India.",
  keywords: [
    "About Balaji AirVent",
    "HVAC Company History",
    "AirVentilation Manufacturer",
    "Industrial HVAC Company",
    "HVAC Vision Mission",
    "Air Handling Equipment Company",
    "Ventilation Systems Manufacturer",
    "HVAC Company Profile",
    "Balaji AirVent Story",
    "HVAC Industry Leader"
  ],
  openGraph: {
    title: "About Us | Balaji AirVent - Leading HVAC Manufacturer",
    description: "Learn about Balaji AirVent's journey as a leading HVAC manufacturer. Discover our vision, mission, and commitment to delivering premium AirVentilation systems.",
    url: "https://balajiairvent.com/aboutus",
    siteName: "Balaji AirVent",
    images: [
      {
        url: "/asset/about/banner.webp",
        width: 1200,
        height: 630,
        alt: "About Balaji AirVent - Leading HVAC Manufacturer",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://balajiairvent.com/aboutus",
  },
};

const About = () => {
	return (
		<>

			<div className=' font-onest lg:overflow-visible overflow-hidden'>
				<NavbarBrandStory />
				<AboutBanner />
				<KeyFeatures />
				<InsideStory />
				<Footer />
			</div>
		</>
	)
}

export default About