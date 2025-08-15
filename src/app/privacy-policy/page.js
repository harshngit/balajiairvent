import Footer from '@/components/Layout/Footer'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import PrivacyContent from '@/components/Privacy/PrivacyContent'
import React from 'react'

const PrivacyPage = () => {
	return (
		<div className='relative font-onest '>
			{/* <ThemeProvider> */}
			<NavbarBrandStory />
			<PrivacyContent />
			<Footer />
			{/* </ThemeProvider> */}
		</div>
	)
}

export default PrivacyPage