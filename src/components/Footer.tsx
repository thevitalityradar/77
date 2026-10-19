import React from 'react';
import { BrandLogo } from './BrandLogo';
import { SITE_CONFIG } from '../data/siteConfig';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Editorial Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white inline-block p-2 rounded-xs">
              <BrandLogo size="md" />
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              77 Review is an independent health, fitness, and dietary supplement editorial publication. We conduct deep-dive clinical research syntheses, ingredient purity audits, and transparent consumer product evaluations without commercial bias.
            </p>
            <p className="text-xs text-stone-500">
              Primary Market: United States · Written in American English · Governed by peer-reviewed evidence.
            </p>
          </div>

          {/* Editorial Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-stone-400 mb-3">
              Editorial Sections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/review/phytomem-one-brain-memory-review')}
                  className="hover:text-white transition-colors text-stone-300 text-left font-semibold text-emerald-400"
                >
                  PhytoMemone Review (2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/review/prodentim-advanced-oral-probiotics-review')}
                  className="hover:text-white transition-colors text-stone-300 text-left font-semibold text-emerald-400"
                >
                  ProDentim Review (2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/review/audisoothe-ear-health-tinnitus-drops-review')}
                  className="hover:text-white transition-colors text-stone-300 text-left font-semibold text-emerald-400"
                >
                  AudiSoothe Review (2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/comparisons')}
                  className="hover:text-white transition-colors text-stone-300 text-left"
                >
                  Formulation Comparison Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/ingredients')}
                  className="hover:text-white transition-colors text-stone-300 text-left"
                >
                  Active Botanical Index (PubMed)
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial Governance */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-stone-400 mb-3">
              Editorial Governance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/editorial-policy')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Editorial Integrity Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/methodology')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Research & Review Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/medical-review')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Medical Review Board
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/affiliate-disclosure')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Affiliate Disclosure Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/corrections')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Corrections & Revisions Log
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-stone-400 mb-3">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  About 77 Review
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/privacy')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Privacy Policy (No Health Data)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Terms of Use & Disclaimers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  Contact & Editorial Inquiries
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="pt-8 pb-8 space-y-4 text-[11px] text-stone-400 border-b border-stone-800 leading-relaxed">
          <p>
            <strong className="text-stone-300">Mandatory Medical Disclaimer: </strong>
            The educational content published on 77 Review is intended exclusively for informational and general knowledge purposes. 77 Review is not a healthcare clinic, medical provider, diagnostic laboratory, or pharmaceutical distributor. None of the editorial evaluations or ingredient breakdowns on this website are designed to diagnose, treat, cure, or prevent any chronic disease, pathology, or injury. Do not discontinue prescribed medications or alter medical regimens without consulting your board-certified physician or specialist.
          </p>
          <p>
            <strong className="text-stone-300">FTC Commercial Transparency: </strong>
            77 Review participates in affiliate marketing programs with vetted third-party networks (including ShareASale, ClickBank, and BuyGoods) and direct merchants. We may receive financial compensation when visitors click our outbound links and make purchases. This compensation does not influence our editorial assessments, test scores, clinical trial reviews, or ingredient purity rankings.
          </p>
          <p>
            <strong className="text-stone-300">Advertising Standards Compliance: </strong>
            In accordance with Google Ads Healthcare policies and Meta Advertising Standards, this website prohibits unsubstantiated cure claims, misleading before-and-after imagery, fabricated medical credentials, and undisclosed subscription auto-renewals.
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} 77 Review. All rights reserved. Independent Editorial Health Publishing.</p>
          <p className="flex items-center gap-3">
            <span>American English Edition</span>
            <span aria-hidden="true">·</span>
            <span>Version 2.0 Production</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
