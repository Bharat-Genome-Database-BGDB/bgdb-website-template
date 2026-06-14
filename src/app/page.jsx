'use client';
import React from 'react';
import Link from 'next/link';
import { researchPillars } from '@data/genai-content';
import '@styles/home.css'; 

const ResearchIcon = ({ name, className }) => {
  const icons = {
    Activity: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    Dna: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12c0 2.5 1 5 3 7s5 3 7 3 5-1 7-3 3-4.5 3-7-1-5-3-7-5-3-7-3-5 1-7 3-3 4.5-3 7z" /></svg>,
    Sprout: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 20h10M10 20c5.5-2.5 8-8 8-15-7 0-12.5 2.5-15 8 0 7 2.5 12.5 8 15Z" /></svg>,
    ShieldAlert: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4M12 16h.01" /></svg>
  };
  return icons[name] || null;
};

export default function GenAIHomePage() {
  return (
    <div className="home-container">

      {/* Hero Block wrapped cleanly inside tracking column */}
      <section className="hero-section">
        <div className="content-wrapper">
          <div className="label-tag">GEN AI RESEARCH LABS // SSF INITIATIVE</div>
          <h1 className="hero-title">Decoding Life Through <br /><span>Generative Intelligence</span></h1>
          <p className="hero-desc">We build specialized artificial intelligence models to map multi-omics datasets, accelerate therapeutic breakthroughs, and transform global healthcare paradigms.</p>
          <div className="hero-actions">
            <Link href="/research" className="btn-primary">Explore Models</Link>
            <Link href="/data-portal" className="btn-secondary">Access Data Portal</Link>
          </div>
        </div>
      </section>

      {/* Pillars Block wrapped cleanly inside tracking column */}
      <section className="pillars-section">
        <div className="content-wrapper">
          <h2 className="section-subtitle">Computational Focus</h2>
          <h3 className="section-title">Core Research Directives</h3>
          <div className="pillars-grid">
            {researchPillars.map((pillar) => (
              <div key={pillar.id} className="pillar-card">
                <div className="pillar-icon">
                  <ResearchIcon name={pillar.icon} className="icon-svg" />
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.description}</p>
                {/* <Link href={`/research#${pillar.id}`} className="pillar-link">View Projects →</Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}