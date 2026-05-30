// src/components/Layout/Layout.jsx
'use client';

import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * @component Layout
 * @description Master framework template wrapper handling dynamic document titles for clean, uniform SEO.
 */
export default function Layout({ title, description, children }) {
  
  useEffect(() => {
    const baseBranding = "Sivasakthi Science Foundation™";
    
    // If it's the home page, keep the clean brand string. Otherwise, build the breadcrumb title.
    if (!title || title.toLowerCase() === "home") {
      document.title = baseBranding;
    } else {
      document.title = `${title} | ${baseBranding}`;
    }
    
    // Dynamically update meta description tag for search crawlers
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }
  }, [title, description]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}