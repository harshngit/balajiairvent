import Footer from '@/components/Layout/Footer'
import NavbarCustom2 from '@/components/Layout/Navbar2'
import NavbarCustom1 from '@/components/Layout/NavbarWhite'
import ProjectGrid from '@/components/Projects/ProjectGrid'
import React from 'react'

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