import Layout from "@layout/Layout";

export default function OurStoryPage() {
  return (
    <Layout title="About | Our Story" description="Our Story and Foundation Values">
      <main className="main-content-wrapper">
        <header className="hero-identity-group">
          <h1 className="hero-main-title">Our Story</h1>
          <p className="hero-sub-tagline">The history and values behind the foundation.</p>
        </header>
      </main>
    </Layout>
  );
}