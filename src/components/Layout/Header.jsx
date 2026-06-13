'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { supabase } from "@db/supabaseClient";
import "@styles/header.css";

/**
 * @component Header
 * @description Master Double-Header Navigation fully updated for Gen AI Research Labs.
 * Preserves standard global ecosystem top bar connections and layout structure.
 */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const pathname = usePathname();
  const menuRef = useRef();

  // --- GenAI Lab Navigation Configuration ---
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Labs", to: "/about" },       
    { label: "Our Research", to: "/#research" }, 
    { label: "FAQ", to: "/faq" },                
    { label: "Contact Us", to: "/contact" }, 
    { label: "Privacy Policy", to: "/privacy" },      
  ];

  // Standard global ecosystem mapping preserved intact
  const SSF_ECOSYSTEM = [
    { name: "SSF", url: "https://www.sivasakthifoundation.org" },
    { name: "GenAI", url: "https://genairesearch.org" },
    { name: "BGDB", url: "https://bharatgenomedatabase.org" },
    { name: "AarogyaSakthi", url: "https://aarogyasakthi.com" },
  ];

  const handleDropdownToggle = (index, e) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="site-header" ref={menuRef}>
      {/* 1. Top Bar: Preserved Global Standard Ecosystem Layout */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <nav className="top-bar-ecosystem">
              {SSF_ECOSYSTEM.map((site, index) => (
                <div key={site.name} className="nav-wrapper-item">
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="nav-item-link">
                    {site.name}
                  </a>
                  {index < SSF_ECOSYSTEM.length - 1 && <span className="separator">|</span>}
                </div>
              ))}
            </nav>
          </div>
          <div className="top-bar-socials">
            <a href="https://x.com/SSF_handle" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/sivasakthifoundation" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/ssf.iinsta" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Shell - Branded for Gen AI Research Labs */}
      <div className="main-nav-container">
        <div className="nav-wrapper">
          <Link href="/" className="header__brand">
            {/* Logo image target location for your swapped asset file */}
            <img src="/images/global/Logo.png" alt="Gen AI Research Labs Logo" className="brand-logo" />
            <div className="brand-text">
              <h1 className="brand-title">Gen AI Research Labs™</h1>
              <p className="brand-tagline">Computational Genomics & Molecular AI</p>
            </div>
          </Link>

          <button
            className={`mobile-nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  {link.dropdown ? (
                    <>
                      <a href="#" className={`nav-link-item ${openDropdown === index ? 'active' : ''}`} onClick={(e) => handleDropdownToggle(index, e)}>
                        {link.label} <i className="fas fa-chevron-down dropdown-arrow"></i>
                      </a>
                      <ul className={`dropdown-menu ${openDropdown === index ? 'show' : ''}`}>
                        {link.dropdown.map((sub, subIdx) => (
                          <li key={subIdx}><Link href={sub.to} className="dropdown-link-item">{sub.label}</Link></li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link href={link.to} className={`nav-link-item ${pathname === link.to ? 'active' : ''}`}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;