import React from 'react'
import NavbarTwo from '@/components/Layout/Navbar.js'
import Footer from '@/components/Layout/Footer'
import BannerProducts from '@/components/Products/BannerProducts'
import ProductGrid from '@/components/Products/ProductGrid'
import NavbarCustom1 from '@/components/Layout/NavbarWhite'

const Products = () => {
	return (
		<div className=' font-onest overflow-hidden'>
			<NavbarCustom1 />
			<BannerProducts />
			<ProductGrid />
			<Footer />
		</div>
	)
}

export default Products