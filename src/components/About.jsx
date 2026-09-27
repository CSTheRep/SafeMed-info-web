import React from 'react';
import SectionHeading from './SectionHeading';
import { projectConfig } from '../data/project';
import { Link } from 'react-router-dom';
import { Github, BookOpen, FileCode, Play, Mail, Shield, ExternalLink } from 'lucide-react';

export default function About() {
  const about = projectConfig.about;
  const links = projectConfig.links;

  const resourceLinks = [
    {
      name: "GitHub Repository",
      url: links.github,
      icon: Github,
      desc: "Source code repository and release archives",
      isExternal: true
    },
    {
      name: "Research Papers",
      url: "/research",
      icon: BookOpen,
      desc: "All three academic paper detail overviews",
      isExternal: false
    },
    {
      name: "Project Documentation",
      url: links.documentation,
      icon: FileCode,
      desc: "Detailed API documentation and setup guides",
      isExternal: true
    },
    {
      name: "Prototype Demonstration",
      url: links.demonstration,
      icon: Play,
      desc: "Interactive demonstration deployment link",
      isExternal: true
    },
    {
      name: "Project Contact",
      url: `mailto:${links.contactEmail}`,
      icon: Mail,
      desc: links.contactEmail,
      isExternal: true
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-navy-950/90 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Project Overview"
          title={about.heading}
          subtitle={about.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Description Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-tealAccent-500 flex items-center justify-center text-navy-950 font-bold">
                  <Shield className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">SafeMed Initiative</h3>
                  <p className="text-xs font-mono text-slate-400">Research &amp; Product Showcase</p>
                </div>
              </div>

              {/* Full Description Placeholder */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed">
                <span className="text-brand-400 font-bold block mb-1">PROJECT STATEMENT:</span>
                {about.fullDescription}
              </div>

              {/* Key Facts Summary */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {about.keyFacts.map((fact) => (
                  <div key={fact.label} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block mb-0.5">{fact.label}</span>
                    <span className="text-slate-200 font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Centrally Configurable Project Links Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Project Resources &amp; Channels
                </h4>
                <span className="text-[10px] font-mono text-tealAccent-400 font-semibold">Configurable</span>
              </div>

              <div className="space-y-3">
                {resourceLinks.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-900/90 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-tealAccent-400 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-brand-300 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                  );

                  return item.isExternal ? (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link key={item.name} to={item.url} className="block">
                      {content}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 text-center">
                Replace repository &amp; contact links in <code>src/data/project.js</code>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
