"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {

  const [activeLink, setActiveLink] = useState<string | null>('home');

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section');

    const handleScroll = () => {
      let currentLink : string | null = null;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the current scroll position is within this section's bounds
        const isInView = 
          window.scrollY >= sectionTop - sectionHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight - sectionHeight / 3
        
          if (isInView) {
          currentLink = section.getAttribute('id');
        }

        // Handle the last section
      const isLastSection = index === sections.length - 1;
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

      if (isLastSection && isNearBottom) {
        currentLink = section.getAttribute('id');
      }

      })

      if (currentLink !== activeLink) {
        setActiveLink(currentLink); // Update only when there's a change
      }    

    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[activeLink])

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.offsetTop;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header>
      <div className='flex items-center justify-center fixed z-10 top-3 w-full'>
        <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        {['home', 'projects', 'about', 'contact'].map((sectionId) => (
            <motion.a
              key={sectionId}
              href={`#${sectionId}`}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(sectionId);
              }}
              className={`nav-item ${
                activeLink === sectionId ? 'bg-white text-gray-900' : ''
              }`            
            }             
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </motion.a>
          ))}
          {/* <a
            href='#home'
            className='nav-item'
          >
            Home
          </a>
          <a
            href='#projects'
            
            className='nav-item'
          >
            Projects
          </a>
          <a
            href='#about'
            className='nav-item'
          >
            About
          </a>
          <a
            href='#contact'
           className='nav-item bg-white text-gray-900'
          >
            Contact
          </a> */}
        </nav>
      </div>
    </header>
  );
};
