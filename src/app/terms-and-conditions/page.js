import Footer from '@/components/Layout/Footer'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import React from 'react'

const TermsAndConditionsPage = () => {
	return (
		<div className='relative'>
			<NavbarBrandStory />
			<section className='max-w-[1200px] mx-auto px-6 py-12 text-[#0F2850] font-onest'>
				<h1 className='text-2xl md:text-3xl font-medium mb-6'>Terms & Conditions</h1>
				<p className='text-sm md:text-base font-light mb-4'>
					These Terms & Conditions govern your use of the Balaji Airvent website and services. By accessing or using this site, you agree to be bound by these terms.
				</p>
				<h2 className='text-xl md:text-2xl font-medium mt-8 mb-3'>Use of Website</h2>
				<p className='text-sm md:text-base font-light'>
					You agree not to misuse the website, attempt unauthorized access, or engage in any activity that could harm or disrupt the site or its users.
				</p>
				<h2 className='text-xl md:text-2xl font-medium mt-8 mb-3'>Intellectual Property</h2>
				<p className='text-sm md:text-base font-light'>
					All content on this website, including text, graphics, logos, and images, is the property of Balaji Airvent or its partners and is protected by applicable laws.
				</p>
				<h2 className='text-xl md:text-2xl font-medium mt-8 mb-3'>Limitation of Liability</h2>
				<p className='text-sm md:text-base font-light'>
					We strive for accuracy but make no warranties regarding completeness or reliability of the content. Use of the site is at your own risk.
				</p>
				<h2 className='text-xl md:text-2xl font-medium mt-8 mb-3'>Contact</h2>
				<p className='text-sm md:text-base font-light'>
					For questions about these terms, contact us at balajiairvent@gmail.com.
				</p>
			</section>
			<Footer />
		</div>
	)
}

export default TermsAndConditionsPage


