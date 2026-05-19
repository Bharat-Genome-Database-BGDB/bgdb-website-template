// src/components/Layout/layout.jsx
'use client';
import Footer from './Footer';
import Header from './Header';
import SEO from './SEO';

/**
 * @component Layout
 * @description The main structural wrapper component for all pages.
 * It manages the SEO metadata, Header, Footer, and the main content area.
 * @param {string} title - The title for the page SEO.
 * @param {string} description - The description for the page SEO.
 * @param {string} keywords - Keywords for the page SEO.
 * @param {ReactNode} children - The main content of the page.
 */
const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <SEO title={title} description={description} keywords={keywords} />
      
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;