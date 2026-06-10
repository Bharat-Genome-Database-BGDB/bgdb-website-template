// src/app/layout.jsx
import Header from "@/components/Layout/Header"; // Adjust paths if your folder aliases differ
import Footer from "@/components/Layout/Footer";
import "./globals.scss";
import "@styles/variables.scss";

export const metadata = {
  title: "Gen AI Research Labs",
  description: "Computational Genomics & Molecular AI — Advancing interdisciplinary research at the intersection of AI and genomics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome v6 CSS CDN link matching original code setup */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Header />

        {/* The main tag ensures your body content doesn't collide with fixed headers */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}