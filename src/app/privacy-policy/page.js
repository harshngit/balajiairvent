import Footer from '@/components/Layout/Footer'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import PrivacyContent from '@/components/Privacy/PrivacyContent'
import React from 'react'

export const metadata = {
  title: "Privacy Policy - Balaji Airvent",
  description: "Read Balaji Airvent's privacy policy to understand how we collect, use, and protect your personal information. Learn about our data practices and your privacy rights when using our HVAC services.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "Personal Information",
    "Privacy Rights",
    "Data Collection",
    "Privacy Practices",
    "Balaji Airvent Privacy",
    "HVAC Privacy Policy",
    "Data Security",
    "Privacy Compliance"
  ],
  openGraph: {
    title: "Privacy Policy | Balaji Airvent - Data Protection & Privacy",
    description: "Read Balaji Airvent's privacy policy to understand how we collect, use, and protect your personal information and data practices.",
    url: "https://balajiairvent.com/privacy-policy",
    siteName: "Balaji Airvent",
    images: [
      {
        url: "/asset/logo.png",
        width: 1200,
        height: 630,
        alt: "Balaji Airvent Privacy Policy",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://balajiairvent.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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