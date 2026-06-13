//src/app/privacy/page.jsx
'use client';
import Layout from "@layout/Layout";
import "@styles/privacy.css";

export default function PrivacyPage() {
  return (
    <Layout 
      title="Privacy Policy & Data Terms | GenAI Research Labs" 
      description="Legal parameters, computational data governance, model license guidelines, and multi-omics research privacy terms at GenAI Research Labs."
    >
      <main className="privacy-container">
        
        <header className="privacy-hero hero-identity-group">
          <h1 className="hero-main-title">Data Privacy & Computational Terms</h1>
          <p className="hero-sub-tagline">Please read our model governance standards and institutional multi-omics data protocols before interfacing with our research engines.</p>
        </header>

        <article className="privacy-content">
          <div className="privacy-meta-date">Last Updated: May 2026</div>

          {/* Section 1: Terms of Use Scope */}
          <section className="privacy-section">
            <h2>1. Terms of Computational Usage</h2>
            <p>
              By accessing our web endpoints, model documentation, and API prototypes, you agree to comply with and be bound by the following research parameters. The content provided on this platform spans deep learning architectures, computational multi-omics benchmarks, and algorithmic research outputs for peer validation and collaborative exploration.
            </p>
            <p>
              Unauthorized exploitation of our infrastructure, including automated scraping of active server endpoints, launching model denial-of-service (DoS) payloads, or modifying our core Next.js/Python frameworks outside of their designated license wrappers, is strictly prohibited.
            </p>
          </section>

          {/* Section 2: Data Collection & Privacy */}
          <section className="privacy-section">
            <h2>2. Research Data Privacy & Model Governance</h2>
            <p>
              GenAI Research Labs treats clinical partnership data, institutional sequence metrics, and investigator records with uncompromising architectural security. 
            </p>
            <p>
              When navigating our computational portals or submitting a joint processing request, the lab manages two distinct datasets:
            </p>
            <ul>
              <li><strong>Metadata & Investigator Context:</strong> Lead investigator names, institutional email addresses, and detailed project parameters used purely to respond to downstream computational intake workflows.</li>
              <li><strong>Sequence & Structural Targets:</strong> Biological files, variant call arrays, or structural datasets submitted via secure processing forms. These targets are parsed solely inside isolated memory buffers and are never retained in persistent public logs or utilized to fine-tune unverified baseline models.</li>
            </ul>
            <p>
              We maintain absolute isolation boundaries between separate research groups. We do not rent, trade, or distribute pipeline metadata, intellectual summaries, or contact databases to outside corporate entities or advertising vectors.
            </p>
          </section>

          {/* Section 3: Intellectual Property & Open Access */}
          <section className="privacy-section">
            <h2>3. Intellectual Property, Model Weights & Open Science</h2>
            <p>
              Our production platforms, custom sequence visualization engines, and underlying pipeline orchestration systems are protected properties of GenAI Research Labs. 
            </p>
            <p>
              However, in adherence to our open-science ethos, public research weights, pre-trained transformer checkpoints, and benchmarking utilities are actively open-sourced under permissive academic frameworks (e.g., Apache 2.0 or MIT licenses) hosted on our official version-controlled repositories. Users reproducing or fine-tuning our open-access architectures must credit GenAI Research Labs and append the required documentation headers in compliance with those respective terms.
            </p>
          </section>

        </article>
      </main>
    </Layout>
  );
}