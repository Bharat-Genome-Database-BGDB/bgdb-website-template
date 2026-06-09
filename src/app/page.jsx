// src/app/page.jsx
'use client';
import React from 'react';
import Link from 'next/link';
import { researchPillars } from '@data/genai-content';
// Note: Substitute these with your preferred Icon library or standard SVG wrappers
import { Activity, Dna, Sprout, ShieldAlert, ArrowUpRight, Terminal } from 'lucide-react';

const iconMap = {
  Activity: Activity,
  Dna: Dna,
  Sprout: Sprout,
  ShieldAlert: ShieldAlert,
};

export default function GenAIHomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* 1. HERO SECTION WITH AMBIENT BACKDROP GLOW */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 rounded-full mb-6">
              <Terminal className="w-3.5 h-3.5 animate-pulse" />
              GEN AI RESEARCH LABS // AN SSF INITIATIVE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-display tracking-tight leading-[1.1] mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Decoding Life Through <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Generative Intelligence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              We build specialized artificial intelligence models to map multi-omics datasets, accelerate therapeutic breakthroughs, and transform global healthcare paradigms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/research"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Models
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/data-portal"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800/80 text-slate-200 font-medium px-6 py-3 rounded-lg border border-slate-800 transition-all duration-200"
              >
                Access Data Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE RESEARCH PILLARS GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-500 mb-2">Computational Focus</h2>
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Core Research Directives</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchPillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon];
            return (
              <div 
                key={pillar.id}
                className="group relative bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 hover:border-slate-700/60 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-950/50"
              >
                {/* Micro Ambient Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800/0 via-slate-800/0 to-slate-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br ${pillar.accentColor} transition-all duration-300`}>
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {pillar.description}
                    </p>
                    <Link 
                      href={`/research#${pillar.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-500 group-hover:text-cyan-400 mt-5 tracking-wide uppercase group-hover:underline"
                    >
                      View Projects
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}