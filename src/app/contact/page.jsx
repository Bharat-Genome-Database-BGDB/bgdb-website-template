//src/app/contact/page.jsx
'use client'; 

import Layout from "@layout/Layout";
import "@styles/contact.css";

export default function ContactPage() {
  return (
    <Layout 
      title="Contact & Collaborations | GenAI Research Labs" 
      description="Connect with GenAI Research Labs for deep learning computational project proposals, multi-omics dataset access, and research fellowships."
    >
      <main className="contact-container">
        
        <header className="hero-identity-group">
          <h1 className="hero-main-title">Contact & Collaborations</h1>
          <p className="hero-sub-tagline">
            Connect with our core computational lab teams for research joint-ventures, academic fellowships, or data pipeline inquiries.
          </p>
        </header>

        <div className="contact-grid">
          
          {/* Left Column: Context Channels */}
          <aside className="contact-info-sidebar">
            <div className="info-card">
              <h3><i className="fas fa-atom"></i> Research Lab Headquarters</h3>
              <p>
                GenAI Research Labs<br />
                7, Belhaven Gardens, Kawdiar,<br />
                Thiruvananthapuram, Kerala, India
              </p>
              <p style={{ marginTop: '8px' }}>
                <strong>Email:</strong> labs@genairesearch.org
              </p>
            </div>

            <div className="info-card">
              <h3><i className="fas fa-dna"></i> Multi-Omics & Joint Processing</h3>
              <p>
                We welcome joint biological processing requests, open-source model configuration evaluations, and deep learning computational project proposals from clinical research groups and institutional partners.
              </p>
            </div>

            <div className="info-card">
              <h3><i className="fas fa-graduation-cap"></i> Internships & Fellowships</h3>
              <p>Academic researchers, bioinformatics graduates, and AI engineers can interface with our pipelines via:</p>
              <ul>
                <li>Computational genomics bootcamps</li>
                <li>Postdoctoral research positions</li>
                <li>Open-source dataset contributions</li>
              </ul>
            </div>
          </aside>

          {/* Right Column: Interaction Form Block */}
          <section className="contact-form-card">
            <form onSubmit={(e) => e.preventDefault()}>
              
              <div className="form-group">
                <label htmlFor="name">Full Name / Lead Investigator</label>
                <input type="text" id="name" placeholder="Dr. / Prof. / Your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Institutional Email Address</label>
                <input type="email" id="email" placeholder="name@university.edu" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Inquiry Classification</label>
                <input type="text" id="subject" placeholder="Research Proposal, Dataset Access, or Fellowship" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Collaboration or Technical Details</label>
                <textarea id="message" rows="5" placeholder="Describe your computational needs, model requirements, or research parameters..." required></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Submit Pipeline Inquiry <i className="fas fa-paper-plane"></i>
              </button>

            </form>
          </section>

        </div>
      </main>
    </Layout>
  );
}