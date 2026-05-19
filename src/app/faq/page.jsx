import Layout from "@layout/Layout";

export default function FaqPage() {
  return (
    <Layout title="Frequently Asked Questions" description="Answers to common queries">
      <main className="main-content-wrapper">
        <header className="hero-identity-group">
          <h1 className="hero-main-title">Frequently Asked Questions</h1>
          <p className="hero-sub-tagline">Find direct answers about operations.</p>
        </header>
      </main>
    </Layout>
  );
}