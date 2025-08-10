import React from 'react'
import NavbarTwo from '@/components/Layout/Navbar.js'
import Footer from '@/components/Layout/Footer'
import BannerProducts from '@/components/Products/BannerProducts'
import ProductGrid from '@/components/Products/ProductGrid'

const Products = () => {
	return (
		<div className=' font-onest lg:overflow-visible overflow-hidden'>
			<NavbarTwo />
			<BannerProducts />
			<ProductGrid />
			<Footer />
		</div>
	)
}

export default Products