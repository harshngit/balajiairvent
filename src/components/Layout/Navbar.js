"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { label: "About Us", href: "/aboutus" },
  {
    label: "Products", href: "/products",
    children: [
      { label: "All", href: "/products#all" },
      { label: "Data Centre", href: "/products#data" },
      { label: "Comfort Air Conditioning", href: "/products#industries" },
      { label: "Industrial Dampers", href: "/products#collab2" },
      { label: "Fans & Ventilation Accessories", href: "/products#fans" },
      { label: "Fire Doors", href: "/products#firedoor" },
    ]
  },
  { label: "Projects & Collaborations", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function NavbarCustom() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Keeps your original “past threshold” styling
  const [scrolled, setScrolled] = useState(false);

  // New: hide/show based on scroll direction
  const [pinned, setPinned] = useState(true); // true => visible, false => hidden
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  // Dropdown hover delay
  const [activeDropdown, setActiveDropdown] = useState(null);
  const hideTimerRef = useRef(null);

  const isActive = (href) => pathname === href;

  useEffect(() => {
    const THRESHOLD = 500;     // when to flip to “scrolled” styles
    const DELTA = 8;           // minimal movement before reacting

    const onScroll = () => {
      const y = window.scrollY;

      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          // Maintain your original styling threshold
          setScrolled(y > THRESHOLD);

          // Direction logic
          const lastY = lastYRef.current;
          const diff = y - lastY;

          if (Math.abs(diff) > DELTA) {
            if (diff > 0) {
              // Scrolling down -> hide navbar
              setPinned(false);
            } else {
              // Scrolling up -> show navbar
              setPinned(true);
            }
            lastYRef.current = y;
          }

          // Always keep lastY updated on first run
          if (lastY === 0) lastYRef.current = y;

          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    lastYRef.current = window.scrollY;
    setScrolled(window.scrollY > THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (index) => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    hideTimerRef.current = setTimeout(() => setActiveDropdown(null), 300);
  };

  return (
    <div
      className={[
        "fixed top-0 left-0 w-full z-[9999] transition-all duration-300",
        // slide out/in on scroll direction
        pinned ? "translate-y-0" : "-translate-y-full",
        // spacing from your original
        "lg:pt-[30px] lg:pr-[40px] lg:pb-[20px] lg:pl-[40px] p-[15px]",
        scrolled ? "bg-white shadow-sm" : "bg-transparent",
        "font-onest"
      ].join(" ")}
    >
      <div className="max-w-[1700px] mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src={scrolled ? "/asset/navbar/logo.webp" : "/asset/navbar/logo-white.webp"}
            alt="Logo"
            className="h-[32px] md:h-[40px]"
          />
        </Link>

        {/* Mobile burger */}
        <button className="block lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Image
            src={scrolled ? "/asset/navbar/iconblue.png" : "/asset/navbar/icon.png"}
            width={24}
            height={24}
            alt="Menu"
          />
        </button>

        {/* Desktop nav */}
        <ul className={`hidden md:flex items-center justify-center px-6 py-2 rounded-full ${scrolled ? "bg-white shadow-lg border-gray-200" : "bg-[#ffffff33] text-white"}`}>
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={`text-[16px] font-light px-2 py-1 ${scrolled ? "text-[#141414] hover:text-[#1666B6]" : "text-white hover:text-[#A3A3A3]"} ${isActive(item.href) ? `!font-bold text-white ${scrolled && "text-[#1666B6]"}` : ""}`}
              >
                {item.label}
              </Link>

              {item.children && activeDropdown === idx && (
                <ul className={`absolute font-onest font-regular left-0 top-8 mt-2 space-y-2 px-[16px] py-[10px] w-[200px] shadow-lg rounded-lg ${scrolled ? "bg-white text-black" : "bg-[#ffffff33] text-white"}`}>
                  {item.children.map((child, cidx) => (
                    <li key={cidx}>
                      <Link href={child.href} className="hover:text-[#90C4FD]">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {idx !== navItems.length - 1 && <span className={`mx-2 ${scrolled ? "text-gray-300" : "text-white/40"}`}>|</span>}
            </li>
          ))}
          <li>
            <button
              className={`group text-sm flex items-center gap-[20px] ml-5 lg:pl-[20px] lg:pr-[7px] lg:py-2 font-light  rounded-full border transition-all duration-200 text-[16px]
              ${scrolled ? "bg-primary hover:bg-[#fff] hover:border-primary hover:text-primary text-white border-primary shadow-md" : "hidden"}`}
            >
              Send Inquiry
              <img src="/asset/navbar/Arrow.png" className="w-[28px] h-[28px] group-hover:opacity-0 group-hover:hidden transition-all duration-200 opacity-100" alt="Arrow Hover" />
              <img src="/asset/navbar/Arrowblue.png" className="w-[28px] h-[28px] group-hover:opacity-100 hidden group-hover:block transition-all duration-200 opacity-100" alt="Arrow Hover" />
            </button>
          </li>
        </ul>

        {/* Right CTA (desktop) */}
        <Link href="" className="hidden lg:block">
          <button
            className={`group text-sm flex items-center gap-[20px] pr-[7px] pl-[20px] py-[10px] rounded-full border transition-all duration-200 w-[162px] h-[40px]
            ${scrolled ? "hidden" : "bg-transparent border-white text-white hover:border-[#1666B6] hover:bg-[#1666B6] hover:text-[#fff]"}`}
          >
            Send Inquiry
            <img src="/asset/navbar/Arrow.png" className="w-[28px] h-[28px] transition-all duration-200 opacity-100" alt="Arrow" />
          </button>

          <button
            className={`group text-sm flex items-center gap-[20px] pr-[7px] pl-[20px] py-[10px] rounded-full border transition-all duration-200 w-[162px] h-[40px]
            ${scrolled ? "bg-primary hover:bg-[#fff] hover:border-primary hover:text-primary text-white border-primary shadow-md hidden" : "hidden"}`}
          >
            Send Inquiry
            <img src="/asset/navbar/Arrow.png" className="w-[28px] h-[28px] group-hover:opacity-0 group-hover:hidden transition-all duration-200 opacity-100" alt="Arrow Hover" />
            <img src="/asset/navbar/Arrowblue.png" className="w-[28px] h-[28px] group-hover:opacity-100 hidden group-hover:block transition-all duration-200 opacity-100" alt="Arrow Hover" />
          </button>
        </Link>

        {/* Mobile full-screen menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-[99999] bg-[#002244cc] backdrop-blur-md flex flex-col justify-start items-start px-6 py-8 text-white transition-all duration-700 h-[100vh]">
            <button className="absolute top-10 right-6 cursor-pointer" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <Image src={"/asset/navbar/cross.png"} width={24} height={24} alt="Close" />
            </button>

            <Link href="/" className="mb-10" onClick={() => setMenuOpen(false)}>
              <img src="/asset/navbar/logo-white.webp" alt="Logo" className="h-[32px]" />
            </Link>

            <ul className="flex flex-col gap-[20px] text-[18px] font-light">
              <li>
                <Link href={"/"} className={`block hover:text-[#90C4FD] ${isActive("/") ? "text-[#90C4FD]" : ""}`} onClick={() => setMenuOpen(false)}>
                  Home Page
                </Link>
              </li>
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className={`block hover:text-[#90C4FD] ${isActive(item.href) ? "text-[#90C4FD]" : ""}`} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="#" onClick={() => setMenuOpen(false)}>
              <button
                className={`group text-sm bg-white flex items-center mt-10 gap-[20px] pr-[7px] pl-[20px] py-[10px] rounded-full border transition-all duration-200 w-[162px] h-[40px]
                ${scrolled ? "hidden" : "bg-transparent border-primary text-primary hover:border-[#1666B6] hover:bg-[#1666B6] hover:text-[#fff]"}`}
              >
                Send Inquiry
                <img src="/asset/Arrowoutlineblue.png" className="w-[28px] h-[28px] group-hover:opacity-0 group-hover:hidden transition-all duration-200 opacity-100" alt="Arrow Hover" />
                <img src="/asset/navbar/Arrow.png" className="w-[28px] h-[28px] group-hover:opacity-100 hidden group-hover:block transition-all duration-200 opacity-100" alt="Arrow Hover" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
