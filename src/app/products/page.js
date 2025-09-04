import React from 'react'
import NavbarTwo from '@/components/Layout/Navbar.js'
import Footer from '@/components/Layout/Footer'
import BannerProducts from '@/components/Products/BannerProducts'
import ProductGrid from '@/components/Products/ProductGrid'
import NavbarCustom1 from '@/components/Layout/NavbarWhite'
import NavbarCustom2 from '@/components/Layout/Navbar2'

export const metadata = {
  title: "Products - Balaji Airvent",
  description: "Browse Balaji Airvent's comprehensive range of HVAC products including air ventilation systems, industrial air handling equipment, fans, ducts, and air conditioning solutions. Premium quality products for commercial and residential applications.",
  keywords: [
    "HVAC Products",
    "Air Ventilation Equipment",
    "Industrial Air Handling Units",
    "Ventilation Fans",
    "Air Ducts",
    "Air Conditioning Systems",
    "HVAC Components",
    "Commercial HVAC Products",
    "Residential HVAC Equipment",
    "Air Quality Products",
    "Balaji Airvent Products"
  ],
  openGraph: {
    title: "Products | Balaji Airvent - HVAC Equipment & Air Ventilation Systems",
    description: "Browse Balaji Airvent's comprehensive range of HVAC products including air ventilation systems, industrial air handling equipment, fans, ducts, and air conditioning solutions.",
    url: "https://balajiairvent.com/products",
    siteName: "Balaji Airvent",
    images: [
      {
        url: "/asset/favicon_balaji.png",
        width: 1200,
        height: 630,
        alt: "Balaji Airvent Products - HVAC Equipment & Air Ventilation Systems",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://balajiairvent.com/products",
  },
};

const Products = () => {
	return (
		<div className=' font-onest overflow-hidden'>
			<NavbarCustom2 />
			<BannerProducts />
			<ProductGrid />
			<Footer />
		</div>
	)			
}

export default Products