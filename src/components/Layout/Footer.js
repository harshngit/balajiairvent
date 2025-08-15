"use client"
import React from 'react'
import { IoMdArrowRoundUp } from 'react-icons/io'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import Link from "next/link";
import Image from 'next/image';

const footerLink = [
    {
        label: "Home Page",
        href: "#"
    },
    {
        label: "About Us",
        href: "#"
    },
    {
        label: "Projects & Collaborations",
        href: "#"
    },
    {
        label: "Products",
        href: "#"
    },
    {
        label: "Contact Us",
        href: "#"
    },
]

const Footer = () => {
    return (
        <footer className="bg-[#0F2850] font-onest text-[#FFF1EA] lg:pl-[40px] px-5 lg:pr-[40px] pt-[80px] lg:h-[553px] w-full relative overflow-hidden">
            <div className='flex justify-start items-start lg:flex-row flex-col  gap-[48px]'>
                <div className='flex justify-start lg:w-[20%] w-full flex-col items-start gap-[66px]'>
                    <img src="/asset/navbar/logo-white.webp" className='w-[216px] h-[35px]' alt="" />
                    <img src="/asset/footer/isoLogo.png" className='w-[96px] h-[80px]' alt="" />
                </div>
                <div className='flex justify-start lg:w-[15%] w-full font-light items-start flex-col gap-[20px]'>
                    {footerLink?.map((item, indx) => (
                        <Link key={indx} href={item?.href}>
                            <h2 className='lg:text-[16px] text-[#F0F0F0] hover:text-[#90C4FD]'>{item?.label}</h2>
                        </Link>
                    ))}
                </div>
                <div className='flex justify-start lg:w-[15%] w-full font-light items-start lg:flex-col lg:gap-[78px] gap-5'>
                    <div className='flex justify-start flex-col gap-[7px] items-start'>
                        <h2 className='lg:text-[14px] text-[#F0F0F0]'>PHONE NUMBER</h2>
                        <Link href="tel:+919967249951">
                            <p className='hover:text-[#90C4FD]'>
                                +91-9967249951
                            </p>
                        </Link>
                        <Link href="tel:+919833777476">
                            <p className='hover:text-[#90C4FD]'>
                                +91-9833777476
                            </p>
                        </Link>
                        <Link href="tel:+919819903151">
                            <p className='hover:text-[#90C4FD]'>
                                +91-9819903151
                            </p>
                        </Link>
                    </div>
                    <div className='flex justify-start flex-col gap-[7px] items-start'>
                        <h2 className='lg:text-[14px] text-[#F0F0F0]'>EMAIL ID</h2>
                        <Link href="mailto:balajiairvent@gmail.com">
                            <p className='hover:text-[#90C4FD]'>
                                balajiairvent@gmail.com
                            </p>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-start lg:w-[20%] font-light items-start flex-col gap-[37px]'>
                    <div className='flex justify-start flex-col gap-[7px] w-[316px] items-start'>
                        <h2 className='lg:text-[14px] text-[#F0F0F0]'>OFFICE ADDRESS</h2>
                        <Link href="https://maps.app.goo.gl/cPeai3Y9YebVSz1fA">
                            <p className='hover:text-[#90C4FD] lg:text-[16px]'>
                                305, Paras Business Centre, Carter Road <br /> No.1, Near Kasturba Marg Police Station, <br />Borivali East, Mumbai-400066, <br />Maharashtra, India.
                            </p>
                        </Link>
                    </div>
                    <div className='flex justify-start flex-col gap-[7px] w-[316px] items-start'>
                        <h2 className='lg:text-[14px] text-[#F0F0F0]'>FACTORY ADDRESS</h2>
                        <Link href="#">
                            <p className='hover:text-[#90C4FD] lg:text-[16px]'>
                                002, Varun Industrial Estate, Near Blue Bell <br /> Imperial Estate, Manaspada, Waliv, <br />
                                Vasai East, District Palghar-401208, <br />
                                Maharashtra, India.
                            </p>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-start items-start'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.247804534766!2d72.85509397520913!3d19.228029082008163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d1674a67cd%3A0x10b7e2d404b3d1e3!2sParas%20Business%20Center!5e0!3m2!1sen!2sin!4v1753901159743!5m2!1sen!2sin" width="305" className=' rounded-lg' height="241" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='border-t-[1px] border-[#E77853] lg:mt-[80px] xl:mb-[67px] lg:mb-[67px] lg:h-[130px] lg:pt-[45px] mt-[50px] py-10 lg:pl-[40px] lg:pr-[20rem] lg:pb-[50px] flex lg:flex-row flex-col lg:gap-[10rem] gap-5'>
                <div className='flex justify-start items-center lg:gap-[40px] gap-5'>
                    <Link href="#" target='_blank'>
                        <IoLogoFacebook className='text-[24px] text-[white] hover:text-[#90C4FD]' />
                    </Link>
                    <Link href="#" target='_blank'>
                        <FaInstagram className='text-[24px] text-[white] hover:text-[#90C4FD]' />
                    </Link>
                    <Link href="#" target='_blank'>
                        <FaLinkedin className='text-[24px] text-[white] hover:text-[#90C4FD]' />
                    </Link>
                </div>
                <div className='flex justify-start items-center lg:w-[126px]'>
                    <h2 className='font-light text-[14px]'>All Rights Reserved</h2>
                </div>
                <div className='flex justify-start items-center'>
                    <h2 className='font-light text-[14px]'>Terms & Conditions</h2>
                </div>

                <div className='flex justify-start items-center'>
                    <h2 className='font-light text-[14px]'>Privacy Policy</h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer
