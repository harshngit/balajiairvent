import Footer from '@/components/Layout/Footer'
import NavbarCustom1 from '@/components/Layout/NavbarWhite'
import ProjectGrid from '@/components/Projects/ProjectGrid'
import React from 'react'

const Projects = () => {
  return (
    <div className=' font-onest overflow-hidden'>
        <NavbarCustom1/>
        <ProjectGrid />
        <Footer />
    </div>
  )
}

export default Projects     