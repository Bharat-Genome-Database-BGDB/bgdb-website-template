'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@db/supabaseClient";
import "@styles/footer.css";

/**
 * @component Footer
 * @description Master split two-section template footer updated for Gen AI Research Labs.
 * Separates core navigation categories from lower-level sub-brand attribution layers.
 */
const Footer = () => {
  const [userRole, setUserRole] = useState("public");
  const [loading, setLoading] = useState(true);

  // --- Auth Role-Based Access Control (RBAC) Listener ---
  useEffect(() => {
    const fetchRole = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user) {
          setUserRole("public");
          return;
        }

        const { data: roleData, error } = await supabase
          .from("user_role_assignments")
          .select("role")
          .eq("user_id", session.user.id)
          .single();

        if (!error && roleData?.role) {
          setUserRole(roleData.role.toLowerCase());
        }
      } catch (err) {
        // Silently capture for standard public navigation views
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, []);

  return (
    <footer className="site-footer">
      
      {/* SECTION 1: Top Navigation & Link Directory */}
      <div className="footer-inner">
        
        {/* Column 1: Core Identity Desk */}
        <div className="footer-brand">
          <strong className="footer-brand-title">Gen AI Research Labs™</strong>
          <address className="footer-address">
            Computational Genomics & Molecular AI<br />
            An Interdisciplinary Core Laboratory
          </address>
        </div>

        {/* Column 2: Lab Pages Directory */}
        <div className="footer-links">
          <h4>About Labs</h4>
          <Link href="/about/ourstory">Our Story</Link>
          <Link href="/about/trustees">Our Team & Fellows</Link>
          <Link href="/about/transparency">Research Areas</Link>
        </div>

        {/* Column 3: Science Matrix & Operations */}
        <div className="footer-links">
          <h4>Research Core</h4>
          <Link href="/projects/initiatives">Models & Initiatives</Link>
          <Link href="/projects/publications">Publications</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Column 4: Dynamic Portal Gate (RBAC) */}
        {!loading && ["admin", "superadmin", "member"].includes(userRole) && (
          <div className="footer-links member-gate-links">
            <h4>Member Area</h4>
            <Link href="/dashboard">Researcher Dashboard</Link>
            <Link href="/internships">Internship Portal</Link>
          </div>
        )}
      </div>

      {/* SECTION 2: Dedicated Base Layer Metadata Attribution Bar */}
      <div className="footer-base-bar">
        <div className="footer-base-container">
          <p className="footer-copyright-statement">
            &copy; 2026 Gen AI Research Labs, All right reserved. An SSF Initiative. Managed by <a href="https://bgdb.org" target="_blank" rel="noopener noreferrer">BGDB.org</a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;