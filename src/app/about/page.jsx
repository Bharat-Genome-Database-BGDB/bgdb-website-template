'use client';
import "@styles/about.css";

/**
 * @component AboutLabsSection
 * @description Flat scrolling component section detailing GenAI Research Labs' computational identity,
 * mission statement, and deep-learning infrastructure directives. Integrated directly into the home page viewport.
 */
export default function AboutLabsSection() {
  return (
    <section id="about-labs" className="story-container">
      
      {/* Section Header */}
      <header className="story-hero-section">
        <span className="label-tag" style={{ marginBottom: '0.5rem' }}>Core Intelligence Architecture</span>
        <h2 style={{ fontSize: '36px', color: 'var(--ink-primary)', fontWeight: '800', letterSpacing: '-0.02em' }}>
          Our Narrative & Computational Vision
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginTop: '8px' }}>
          Advancing generative neural network frameworks to interpret highly complex multi-omics datasets.
        </p>
      </header>

      <article className="story-narrative" style={{ marginTop: '40px' }}>
        
        {/* Paragraph Block 1: Who We Are */}
        <div className="story-block">
          <p>
            Operating as the primary upstream dry-lab intelligence matrix under the Sivasakthi Science Foundation ecosystem, 
            <strong> GenAI Research Labs™</strong> is dedicated to designing specialized machine learning models that decode the 
            fundamental rules of molecular biology. We approach biological sequences not simply as static text, but as dynamic, 
            high-dimensional languages waiting to be mapped by modern transformer architectures.
          </p>
          <p>
            By synthesizing vast multi-omics arrays—spanning raw genomic sequencing, transcriptomic variations, and proteomic structural curves—we 
            engineer proactive foundational models. These systems accelerate open-access discovery pipelines, handing off optimized model weights 
            and functional algorithmic scripts directly to downstream clinical implementation frameworks.
          </p>
        </div>

        {/* Mission & Directives Callout Grid */}
        <div className="story-callout-grid">
          
          <div className="story-card">
            <h3>Our Mission</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
              To pioneer the intersection of high-throughput algorithmic pipelines and generative deep learning tools, 
              building open, transparent, and structurally sound neural models capable of parsing complex human health variations.
            </p>
          </div>

          <div className="story-card">
            <h3>Core Directives</h3>
            <ul>
              <li>Developing proprietary and open generative transformers for molecular mapping.</li>
              <li>Sustaining continuous high-performance compute arrays for deep model training.</li>
              <li>Fostering global mathematical validation metrics through robust check-case standards.</li>
              <li>Hosting secure, accessible baseline resources for independent bio-informatics researchers.</li>
            </ul>
          </div>

        </div>

        {/* Paragraph Block 2: Evolution & The Scale Layer */}
        <div className="story-block" style={{ marginTop: '16px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700' }}>Tracing the Algorithmic Trajectory</h2>
          <p>
            Our lab space began with a singular focus: parsing localized molecular datasets to discover underlying patterns behind chronic regional 
            health vectors. As computational capabilities scaled alongside deep learning methodologies, our frameworks evolved from simple 
            statistical regression clusters into highly complex generative neural network execution stacks.
          </p>
          <p>
            Today, our computational initiatives manage millions of parameters, running algorithmic sanity pipelines to ensure complete token 
            validation. By mapping raw biological files into predictive insights, GenAI Research Labs remains firmly focused on its ultimate operational mandate: 
            ensuring the data architectures of today are fully optimized for the predictive therapies of tomorrow.
          </p>
        </div>

      </article>
    </section>
  );
}