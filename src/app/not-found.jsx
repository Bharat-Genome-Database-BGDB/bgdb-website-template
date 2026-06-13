'use client';

import Link from "next/link";
import Layout from "@layout/Layout";
import '@styles/not-found.css'; 

export default function NotFound() {
  return (
    <Layout 
      title="404 - Sequence Break" 
      description="The requested computational pathway or research node could not be found."
    >
      <main className="notfound-main">
        
        <h1 className="notfound-code">404</h1>
        
        <h2 className="notfound-title">Computational Node Not Found</h2>
        
        <p className="notfound-text">
          The pipeline segment or raw sequence visualization path you requested does not exist, or has been consolidated into our active multi-omics research arrays.
        </p>

        <Link href="/" className="notfound-btn">
          Return to Lab Core &nbsp;<i className="fas fa-network-wired"></i>
        </Link>
        
      </main>
    </Layout>
  );
}