import React from 'react'
import NavbarTwo from '@/components/Layout/Navbar.js'
import Footer from '@/components/Layout/Footer'
import BannerProducts from '@/components/Products/BannerProducts'
import ProductGrid from '@/components/Products/ProductGrid'
import NavbarCustom1 from '@/components/Layout/NavbarWhite'
import NavbarCustom2 from '@/components/Layout/Navbar2'

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