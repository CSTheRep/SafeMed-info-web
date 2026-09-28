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
    <section id="about" className="py-20 md:py-28 bg-[#FAF7F2] relative border-t border-[#E6D9CF]">
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
            <div className="p-8 rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/safemed-logo.png"
                  alt="SafeMed Logo"
                  className="h-11 w-auto object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#302B2B]">SafeMed Initiative</h3>
                  <p className="text-xs font-mono text-[#857B78]">Research &amp; Product Showcase</p>
                </div>
              </div>

              {/* Full Description Placeholder */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed">
                <span className="text-[#C95C5C] font-bold block mb-1">PROJECT STATEMENT:</span>
                {about.fullDescription}
              </div>

              {/* Key Facts Summary */}
              <div className="pt-4 border-t border-[#E6D9CF] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {about.keyFacts.map((fact) => (
                  <div key={fact.label} className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF]">
                    <span className="text-[10px] font-mono uppercase text-[#857B78] block mb-0.5">{fact.label}</span>
                    <span className="text-[#302B2B] font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Centrally Configurable Project Links Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E6D9CF]">
                <h4 className="text-sm font-bold text-[#302B2B] uppercase tracking-wider font-mono">
                  Project Resources &amp; Channels
                </h4>
                <span className="text-[10px] font-mono text-[#A94444] font-semibold">Configurable</span>
              </div>

              <div className="space-y-3">
                {resourceLinks.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] hover:border-[#C95C5C]/50 hover:bg-[#F5EFE6] transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#FFFDFC] border border-[#E6D9CF] flex items-center justify-center text-[#A94444] group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#302B2B] group-hover:text-[#A94444] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-[#6B6260]">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#857B78] group-hover:text-[#302B2B] transition-colors" />
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

              <div className="mt-4 pt-3 border-t border-[#E6D9CF] text-[11px] font-mono text-[#857B78] text-center">
                Replace repository &amp; contact links in <code>src/data/project.js</code>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
