import AboutBanner from '@/components/About/AboutBanner'
import InsideStory from '@/components/About/InsideStory'
import KeyFeatures from '@/components/About/KeyFeatures'
import Footer from '@/components/Layout/Footer'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import React from 'react'

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