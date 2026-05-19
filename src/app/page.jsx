// src/app/page.jsx
import Layout from "@layout/Layout";
import "./globals.scss";

const quickLinks = [
  {
    text: "Internship FAQ",
    href: "/get-involved#faq"
  },
  {
    text: "Research Papers",
    href: "/projects#publications"
  },
  {
    text: "Community Support",
    href: "/contact"
  }
];

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Sivasakthi Science Foundation™ — Advancing Research, Training, and Education in Kerala, India."
    >
      <main className="main-content-wrapper">
        <div className="home-hero-text-block">
          
          {/* Header Identity Deck */}
          <header className="hero-identity-group">
            <h1 className="hero-main-title">Sivasakthi Science Foundation™</h1>
            <p className="hero-sub-tagline">Advancing Research, Training & Education</p>
          </header>

          {/* Core Descriptive Text Body */}
          <section className="mission-description-section">
            <h2 className="mission-section-heading">What is Sivasakthi Science Foundation?</h2>
            
            <p className="mission-paragraph">
              The world of science moves fast, but implementation requires responsibility. 
              SSF combines the power of <strong>Genomics</strong> with the precision of <strong>AI</strong>.
            </p>
            
            <p className="mission-paragraph">
              We don't just collect data; we explore the identity of the genome to ensure every 
              research breakthrough delivers actual community value.
            </p>

            <blockquote className="mission-pullquote">
              "Moving beyond simple data collection. Starting to drive strategic healthcare quality."
            </blockquote>
          </section>

          {/* Quick Links Horizontal Ribbon Grid */}
          <div className="quick-links-ribbon">
            <span className="ribbon-label">Quick Links:</span>
            <div className="ribbon-links-group">
              {quickLinks.map((link, idx) => (
                <a key={link.text} href={link.href} className="ribbon-hyperlink">
                  {link.text}
                  {idx < quickLinks.length - 1 && <span className="link-separator"></span>}
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}